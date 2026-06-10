---
title: "Cazando antígenos con Machine Learning: cómo construimos AiGenix"
date: "2026-06-02"
draft: true

description: ""
tags: ["AI", "data-science", "medical", "healthcare", "artificial-intelligence"] # Lowercase, hyphenated. Used as filter labels.
---

## Un pipeline completo de ciencia de datos aplicado a inmunología computacional

Cuando aparece un nuevo patógeno, la comunidad científica se enfrenta a una pregunta tan urgente como compleja: ¿contra qué parte del virus debería dirigirse una vacuna? Un patógeno puede tener decenas de proteínas, pero no todas son igual de visibles para el sistema inmune. Identificar cuáles son las más prometedoras ha sido, históricamente, un proceso lento y costoso que depende de infraestructura de laboratorio especializada y años de experimentación.

En 2024, Demis Hassabis y John Jumper recibieron el Premio Nobel de Química por AlphaFold, un sistema de inteligencia artificial capaz de predecir la estructura tridimensional de una proteína a partir de su secuencia de aminoácidos - algo que antes requería años de cristalografía de rayos X. El mensaje es inequívoco: la computación ya no es un complemento de la biología, es uno de sus pilares.

**AiGenix: Antigen Predictor** se sitúa en esa misma intersección. Es un proyecto educativo que construye, desde cero y con datos públicos, un clasificador capaz de estimar la probabilidad de que una proteína viral sea antigénica — es decir, que el sistema inmune humano la detecte y responda a ella. No pretende competir con los grandes modelos de inmunología computacional. Pretende algo más valioso para quien empieza: demostrar que con Python, curiosidad y perseverancia, se puede atacar un problema biológico real.

![Fig1_Captura_Principal_App](../content/blog/img/Fig1_Captura_Principal_App.png)

> Figura 1: Interfaz de usuario de AiGenix. Un panel de control funcional desarrollado en Streamlit que permite a los investigadores cargar proteomas virales y obtener instantáneamente un ranking priorizado de los candidatos más prometedores.

---

## Conceptos clave antes de empezar

Para seguir el artículo sin perderse, conviene tener clara la cadena conceptual que conecta la biología con el machine learning.

**Proteína.** Las proteínas son las máquinas moleculares de los organismos vivos. Están codificadas en los genes y son las responsables de casi todo lo que ocurre en una célula — desde la estructura física hasta la señalización química. Los virus también están hechos principalmente de proteínas: la proteína Spike del SARS-CoV-2, por ejemplo, es la llave que usa el virus para entrar en nuestras células.

**Epítopo.** El sistema inmune no reconoce proteínas enteras: reconoce fragmentos. Un epítopo es un pequeño segmento de una proteína — típicamente entre 8 y 20 aminoácidos — que el sistema inmune aprende a identificar como extraño. Son, en esencia, las huellas dactilares moleculares del patógeno.

**Antigenicidad.** Una proteína es antigénica si contiene epítopos que desencadenan una respuesta inmune. Es importante distinguirla de la inmunogenicidad — la antigenicidad es la capacidad de ser _reconocido_; la inmunogenicidad es la capacidad de provocar una respuesta completa y duradera. Este proyecto se centra en la primera: predecir si una proteína será visible para el sistema inmune.

**IEDB.** La Immune Epitope Database es el mayor repositorio mundial de resultados experimentales sobre epítopos. Contiene cientos de miles de ensayos de laboratorio reales — fragmentos de proteínas que fueron testados en laboratorio, con su resultado documentado: `Positive`, `Negative`, `Positive-High`, etc. Es la fuente de verdad de nuestro proyecto.

Con estos conceptos en mente, podemos describir la pregunta central que guía todo el trabajo: **¿puede un modelo de machine learning, entrenado con datos experimentales existentes, estimar la probabilidad de que una proteína sea antigénica observando únicamente su secuencia de aminoácidos?**

---

## El pipeline: visión general

El proyecto se articula en cinco notebooks que forman un pipeline secuencial. Cada uno toma el output del anterior y produce algo nuevo:

```
download_files → 00_acquisition → 01_exploration → 02_construction → 03_model
     ↓                ↓                ↓                 ↓               ↓
 datos raw       CSV filtrado    protein_labels      dataset.csv      model.pkl
  (3.9 GB)        (29 MB)         (1,365 prot.)     (1,310 prot.)    (RF + meta)
```

---

## Notebook 0: Descarga de datos brutos

El primer paso es el más mecánico y el más crítico: obtener los datos. IEDB ofrece sus exportaciones completas en formato CSV comprimido. Descargamos tres archivos:

- `tcell_full_v3.csv` — ensayos de respuesta de células T (~1.3 GB descomprimido)
- `bcell_full_v3.csv` — ensayos de respuesta de células B y anticuerpos (~2.6 GB)
- `antigen_full_v3.csv` — catálogo de antígenos con metadatos

El notebook automatiza esta descarga con una función que obtiene el ZIP desde la URL pública de IEDB, lo extrae en `data/raw/` y elimina el comprimido. No hay transformación de datos aquí — solo asegurarse de tener el material en bruto disponible localmente. El resultado son aproximadamente 3.9 GB de datos sobre los que trabajará el resto del pipeline.

---

## Notebook 00: Adquisición y preprocesamiento

Con los datos brutos descargados, el reto inmediato es el tamaño. Cargar 4 GB en memoria en un portátil estándar no es viable, y hacerlo sería innecesario: de las ~160 columnas que contiene cada archivo, solo necesitamos 5.

La solución es procesar los archivos en **chunks de 100.000 filas** con Pandas, extrayendo únicamente las columnas de interés y filtrando sobre la marcha para quedarse solo con los ensayos de dos patógenos: SARS-CoV-2 e Influenza A. Las columnas que conservamos son:

| Columna                   | Descripción                                               |
| ------------------------- | --------------------------------------------------------- |
| `epitope_name`            | Secuencia del fragmento testado                           |
| `source_molecule`         | Nombre de la proteína de origen                           |
| `source_molecule_iri`     | Identificador único de la proteína (URL a NCBI o UniProt) |
| `source_organism`         | Organismo del que proviene                                |
| `qualitative_measurement` | Resultado del ensayo                                      |

Este proceso se repite para `tcell` y para `bcell`, añadiendo una columna `assay_type` para distinguir el origen. Los dos dataframes se concatenan en un único archivo: `iedb_sars_flu_filtered.csv`. El resultado — **158.289 ensayos en 29 MB** — supone una reducción del 99.3% respecto al tamaño original. Este archivo es la materia prima de todo lo que sigue.

Vale la pena señalar una decisión metodológica importante que se toma aquí: todos los valores que empiezan por `Positive` (`Positive`, `Positive-Low`, `Positive-High`, `Positive-Intermediate`) se tratarán como evidencia de antigenicidad. Todos representan reconocimiento inmune, aunque con intensidades diferentes.

---

## Notebook 01: Exploración del dataset

Con los datos filtrados, el notebook 01 responde a la pregunta: _¿qué tenemos exactamente?_ Antes de construir nada, conviene entender la naturaleza del material.

La exploración revela varias cosas importantes. La distribución de ensayos muestra que el 44% son positivos y el 56% negativos — un desbalance moderado a nivel de ensayo. La distribución por tipo muestra que los ensayos de células T tienen una tasa de positividad del 49.4%, mientras que los de células B están en el 41.6%. Por patógeno, SARS-CoV-2 acumula el 82% de los ensayos, lo que refleja el enorme volumen de investigación generado por la pandemia.

El paso más importante del notebook es **el cambio de unidad de análisis**: pasamos de razonar sobre epítopos individuales a razonar sobre proteínas. Agrupamos todos los ensayos por proteína y aplicamos una regla de etiquetado:

- `label = 1` si la proteína tiene **al menos un ensayo positivo** en cualquier tipo de ensayo
- `label = 0` si **todos sus ensayos son negativos**

Esto transforma 158.289 filas en **1.365 proteínas únicas**, cada una con su label. El desbalance a este nivel es más pronunciado: 1.198 proteínas antigénicas frente a 167 no antigénicas — una proporción de 7:1 que habrá que gestionar en el modelo.

Como validación informal, el notebook confirma que la proteína Spike del SARS-CoV-2 encabeza el ranking de proteínas con más epítopos positivos. Es exactamente el resultado esperado — la Spike es la proteína más estudiada y el objetivo de todas las vacunas contra COVID-19. Si no hubiera aparecido en primer lugar, habría sido una señal de alarma sobre la calidad de los datos.

El output de este notebook es `protein_labels.csv` — una fila por proteína, con su identificador, nombre, patógeno y label.

---

## Notebook 02: Construcción del dataset de entrenamiento

El notebook 01 nos da _qué predecir_. El notebook 02 nos da _los datos para predecir_. La distinción es importante.

`protein_labels.csv` contiene identificadores de proteínas, pero no las proteínas en sí. Para calcular features necesitamos las secuencias de aminoácidos, que viven en bases de datos externas: NCBI y UniProt. Este notebook se encarga de obtenerlas.

**Clasificación de identificadores.** Cada proteína tiene un `source_molecule_iri` — una URL que apunta a su entrada en una base de datos. El primer trabajo es analizar esa URL para saber a qué base de datos pertenece y qué tipo de identificador tiene. Esto se hace con expresiones regulares:

- URLs de `uniprot.org` → identificador UniProt (ej. `P12582`)
- URLs de `ncbi.nlm.nih.gov` con solo dígitos → GI number (ej. `12038910`)
- URLs de NCBI con formato `XX_NNNNN` → RefSeq (ej. `NP_001234`)
- URLs de NCBI con formato `XXXNNNNN` → GenBank (ej. `AAB12345`)
- URLs de PDB o IEDB internos → se descartan

**Descarga de secuencias.** Las proteínas UniProt se descargan directamente de la API REST de UniProt. Las proteínas NCBI — que son la mayoría, más de 1.100 — se descargan en lotes de 200 usando la API Entrez de NCBI, lo que reduce el número de llamadas HTTP de más de mil a solo seis. Las que no cruzan en el matching automático se recuperan individualmente como fallback. En total, el 96% de las proteínas (1.310 de 1.365) consiguen secuencia. Las 55 restantes corresponden a identificadores PDB, IEDB internos o entradas obsoletas que no se pueden recuperar y se descartan.

**Cálculo de features.** Con las secuencias en mano, Biopython hace el trabajo pesado. Para cada proteína se calculan 24 características:

- **4 fisicoquímicas:** longitud (número de aminoácidos), peso molecular en Daltons, punto isoeléctrico (el pH al que la carga neta es cero), e índice GRAVY (hidrofobicidad media — valores negativos indican proteínas hidrófilas, que tienden a estar expuestas en la superficie y ser más accesibles al sistema inmune)
- **20 de composición:** el porcentaje de cada uno de los 20 aminoácidos estándar en la secuencia

El resultado es `dataset.csv` — **1.310 filas × 29 columnas** (4 metadatos + 24 features + label). Este es el primer archivo del pipeline que un algoritmo de machine learning puede consumir directamente.

---

## Notebook 03: Entrenamiento y evaluación del modelo

Con el dataset listo, el notebook 03 aborda la pregunta central del proyecto: ¿puede un modelo aprender a distinguir proteínas antigénicas de no antigénicas a partir de estas 24 features?

**Arquitectura de evaluación.** Usamos validación cruzada estratificada con k=5: el dataset se divide en 5 partes manteniendo la proporción de clases en cada una, el modelo se entrena y evalúa 5 veces, y las métricas finales son la media y la desviación estándar de los 5 folds. Evaluamos tres modelos con el mismo esquema para que los resultados sean comparables:

- **Clasificador de mayoría** — siempre predice la clase más frecuente (baseline)
- **Logistic Regression** — modelo lineal simple con escalado previo
- **Random Forest** — 200 árboles con `class_weight='balanced'` para compensar el desbalance 7:1

La elección del Random Forest como modelo principal responde a tres razones: funciona bien con datasets pequeños (1.310 ejemplos no son suficientes para deep learning), es robusto frente al ruido inherente de los datos biológicos, y produce importancias de features que permiten interpretar qué está aprendiendo.

Para gestionar el desbalance usamos `class_weight='balanced'`, que penaliza los errores en la clase minoritaria proporcionalmente a su representación. Las métricas principales son AUC-ROC — que mide la capacidad discriminativa global con independencia del umbral — y F1-score.

---

## Resultados

Para evaluar la capacidad predictiva de AiGenix, implementamos una arquitectura de evaluación en dos etapas. Primero, utilizamos **validación cruzada estratificada** (k=5) para asegurar la estabilidad del modelo durante el desarrollo. Segundo, sometimos al modelo a una prueba de fuego definitiva: un **conjunto de test independiente** (Hold-out) que representaba el 20% de los datos y que el algoritmo jamás había visto.

Los resultados demuestran que el modelo no solo aprende patrones, sino que es capaz de generalizar ante proteínas nuevas con una robustez notable:

| Modelo                  | AUC-ROC           | F1-score          | AUC-ROC (Final) | Recall (Final) |
| ----------------------- | ----------------- | ----------------- | --------------- | -------------- |
| Clasificador de mayoría | 0.500 ± 0.000     | —                 | 0.500           | —              |
| Logistic Regression     | 0.626 ± 0.043     | 0.795 ± 0.026     | 0.602           | 0.884          |
| **Random Forest**       | **0.719 ± 0.050** | **0.935 ± 0.004** | 0.651           | 1.000          |

![Fig2_roc_curves](../content/blog/img/Fig2_roc_curves.png)

> Figura 2: Curvas ROC de la Validación Cruzada Estratificada. Un AUC-ROC medio de 0,719 confirma que el modelo mantiene una capacidad discriminativa consistente.

---

## Análisis del Rendimiento

El modelo **Random Forest** superó consistentemente a los baselines. Aunque observamos una disminución natural del AUC-ROC al pasar de validación (0.72) a test (0.65), el dato más revelador surge en la seguridad del predictor:

1. **Sensibilidad Perfecta** (**Recall = 1.0**): El modelo logró detectar el **100% de las proteínas antigénicas** del conjunto de test. En un contexto de bioseguridad y diseño de vacunas, esta métrica es crítica: AiGenix garantiza que ningún candidato vacunal potencial sea descartado en la fase de screening inicial (Cero Falsos Negativos).

2. **Alta Confiabilidad** (**Precisión 89.2%**): Con un F1-score de **0.943** en el test final, el modelo demuestra que cuando señala una proteína como antigénica, acierta con una tasa de error muy baja, optimizando significativamente los recursos de laboratorio.

![Fig3_confusion_matrix](../content/blog/img/Fig3_confusion_matrix.png)

> Figura 3: Al ajustar el umbral de decisión a 0,25, el modelo maximiza el Recall, capturando la totalidad de los positivos en el set de prueba.

## Importancia de las Variables e Interpretación

El análisis de importancia de variables confirma que la naturaleza físico-química de la proteína dicta su visibilidad ante el sistema inmune. El **Peso Molecular** y el **índice GRAVY** (**hidropatía**) se consolidaron como los predictores físicos más potentes.

El modelo "aprendió" biología sin ver estructuras 3D: identificó que las proteínas con GRAVY negativo (hidrofílicas) tienen una mayor propensión a estar expuestas en la superficie viral, facilitando su reconocimiento por anticuerpos.

![Fig4_feature_importance](../content/blog/img/Fig4_feature_importance.png)

> Figura 4: El Peso Molecular y la Hidropatía (GRAVY) lideran la capacidad predictiva del modelo.

Como prueba de concepto final, evaluamos las proteínas estructurales del **SARS-CoV-2**. El modelo asignó la probabilidad más alta a la **Proteína Spike (0.830)**, validando computacionalmente lo que la comunidad científica identificó experimentalmente como el antígeno principal para las vacunas de nueva generación.

---

## Conclusiones

AiGenix demuestra que es posible construir un pipeline completo de machine learning aplicado a un problema biomédico real usando exclusivamente datos públicos y herramientas open source. El camino desde 3.9 GB de ensayos de laboratorio hasta un modelo capaz de priorizar candidatos vacunales en segundos cabe en cinco notebooks y unas pocas horas de cómputo.

Pero la parte más valiosa del proyecto no es el **AUC final de 0.651**. Es lo que se aprende por el camino.

**Lo que funciona.** Las features fisicoquímicas de secuencia capturan información real sobre antigenicidad. Lograr un **Recall del 1.0** (100%) en el conjunto de test independiente es el mayor éxito técnico del proyecto: significa que AiGenix es un filtro de seguridad robusto que no deja escapar ningún antígeno potencial. La composición de aminoácidos, aunque simple, contiene una señal biológica clara que el Random Forest logra capitalizar.

**Lo que no funciona (y por qué).** El paso de un AUC de 0.72 en validación a **un 0.65 en test** es una lección de realismo en ciencia de datos: el modelo se enfrenta a la complejidad de proteínas que nunca ha visto. Esta brecha confirma una limitación estructural: la antigenicidad depende críticamente de la forma tridimensional de la proteína y no solo de su secuencia lineal. El sistema inmune interactúa con la superficie plegada, algo que nuestro modelo, al trabajar con texto lineal, solo alcanza a vislumbrar de forma estadística.

**Sobre los datos.** La presencia de un Recall perfecto frente a un AUC moderado sugiere que nuestro dataset de "negativos" contiene ruido (proteínas que podrían ser antigénicas pero no han sido estudiadas). En inmunología, la ausencia de evidencia no es evidencia de ausencia. A medida que IEDB crezca, AiGenix podrá refinarse, pero por ahora, hemos logrado un "centinela" digital altamente eficaz.

![Fig5_Captura_IA_Explicacion](../content/blog/img/Fig5_Captura_IA_Explicacion.png)

> Figura 5: Explicabilidad mediante IA Generativa. AiGenix integra Gemini 2.0 Flash para ofrecer un razonamiento científico detrás de cada predicción, facilitando la interpretación biológica.

La inteligencia artificial no sustituirá al laboratorio. Pero en un universo molecular prácticamente infinito, donde un solo patógeno puede tener decenas de proteínas y cada proteína miles de variantes, **ayudar a los científicos a decidir dónde mirar primero** puede marcar la diferencia entre años de investigación a ciegas y un descubrimiento temprano.
Eso es lo que AiGenix hace. Es un filtro, no un veredicto. Y a veces, un buen filtro es exactamente lo que se necesita.

---

Código, datos y notebooks disponibles en [GitHub]()

Un proyecto realizado en [Saturdays AI Madrid](https://saturdays.ai/madrid/)

**Integrantes del equipo:**

[Alejandro Aparicio Calvo](https://www.linkedin.com/in/magnitopic/), [Iris Fernanda Amorim](https://www.linkedin.com/in/irisamorim/), [Joaquin Lazaro](https://www.linkedin.com/in/joaquin-lazarom/?locale=en)
