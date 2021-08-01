import styles from '../styles/One.module.css';

const One= () => {
	return (
		<div id={styles.intro}>
			<div id={styles.left}>
				Hello World
			</div>
			<div id={styles.right}>
				<p><b>Hey!</b> My name is Alejandro.<br/>I&apos;m a programmer, photographer and all-around tech lover.<br/>
				Mainly a web developer but also Java, Python and some Arduino.</p>
			</div>
		</div>
	)
}


export default One