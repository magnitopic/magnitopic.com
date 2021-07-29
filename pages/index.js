import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/index.module.css'

export default function index() {
	return (
		<div id={styles.one}>
			<Head>
			<title>Magnitopic</title>
			</Head>
			<Header/>
			<div id={styles.intro}>
				<div id={styles.left}>
					Hello World
				</div>
				<div id={styles.right}>
					<p><b>Hey!</b> My name is Alejandro Aparicio.<br/>I'm a programer, photographer and all-around tech lover.<br/>
					Mainly a web developer but also Java, Python and some Arduino.</p>
				</div>
			</div>
		</div>
	)
}