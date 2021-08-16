import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header= () => {
	return (
		<div id={styles.mainHeader}>
			<Link href="/" >
				<a id={styles.logo}>
					<Image src='/tierra_transparente.png' alt="Picture of the author"width="45" height="45"/>
					<h3 id={styles.pageName} >Magnitopic</h3>
				</a>
			</Link>
			<div id={styles.links}>
				<Link href=""><p className={styles.links}>My work</p></Link>
				<Link href=""><p className={styles.links}>Contact</p></Link>
				<Link href="https://altocodigo.blogspot.com/"><h4 className={styles.links}>Blogs</h4></Link>
			</div>
		</div>
	)
}

export default Header