import styles from '../styles/Header.module.css';

const Header= () => {
	return (
		<div id={styles.mainHeader}>
			<a href="/"><h3>Magnitopic</h3></a>
			<div id={styles.links}>
					<a class={styles.links} href=""><p>My work</p></a>
					<a class={styles.links} href="/#contact"><p>Contact</p></a>
					<a class={styles.links} href="https://altocodigo.blogspot.com/"><h4>Blogs</h4></a>
			</div>
		</div>
	)
}

export default Header