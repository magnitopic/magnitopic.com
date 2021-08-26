import Image from 'next/image';
import styles from '../styles/Slideshow.module.css';

function SlideshowImage({images}){
	function prev(){

	}

	function next(){

	}

	return (
		<>
		<div className={styles.transitors}>
			<a className={styles.arow} onClick={prev}>&#10094;</a>
		</div>
		<div className={styles.slide}>
		{images.map((images)=>(
			<div key={images}>
				<Image key={images.id} title={images.name} src={images.url} alt={images.name} height={images.height} width={images.width}/>
			</div>
		))}
		</div>
		<div className={styles.transitors}>
			<a className={styles.arow} onClick={next}>&#10095;</a>
		</div>
		</>
	)
}

export default SlideshowImage