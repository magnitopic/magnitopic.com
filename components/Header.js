import styles from '../styles/Header.module.css';

const Header= () => {
	return (
		<div id={styles.mainHeader}>
			<a href="/"><h3>Magnitopic</h3></a>
			<div id={styles.links}>
				<p class={styles.p}>About</p>
				<p class={styles.p}>My work</p>
				<p class={styles.p}>Contact</p>
			</div>
		</div>
	)
}

export default Header