import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header= () => {
	return (
		<div id={styles.mainHeader}>
			<Link href="/" >
				<a id={styles.logo}>
					<Image src='/../public/tierra_transparente.png' alt="Picture of the author"width="37" height="37"/>
					<h3 id={styles.pageName} >Magnitopic</h3>
				</a>
			</Link>
			<div id={styles.links}>
					<Link class={styles.links} href=""><p>My work</p></Link>
					<Link class={styles.links} href=""><p>Contact</p></Link>
					<Link class={styles.links} href="https://altocodigo.blogspot.com/"><h4>Blogs</h4></Link>
			</div>
		</div>
	)
}

export default Header