import Image from 'next/image';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header= () => {
	return (
		<div id={styles.mainHeader}>
			<a href="/" id={styles.logo}>
				<Image src='/../public/tierra_transparente.png' alt="Picture of the author"width="37" height="37"/>
				<h3 id={styles.pageName} >Magnitopic</h3>
			</a>
			<div id={styles.links}>
					<a class={styles.links} href=""><p>My work</p></a>
					<a class={styles.links} href="/#contact"><p>Contact</p></a>
					<a class={styles.links} href="https://altocodigo.blogspot.com/"><h4>Blogs</h4></a>
			</div>
		</div>
	)
}

export default Header