import styles from '../styles/Header.module.css';

const Header= () => {
	return (
		<div id={styles.mainHeader}>
			<a href="/"><h3>Magnitopic</h3></a>
			<div id={styles.links}>
				<a href="#"><p class={styles.p}>My work</p></a>
				<a href="#"><p class={styles.p}>Contact</p></a>
				<a href="https://altocodigo.blogspot.com/"><h4 class={styles.p}>Blogs</h4></a>
			</div>
		</div>
	)
}

export default Header