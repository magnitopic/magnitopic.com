import Head from 'next/head';
import Header from '../components/Header';
import One from '../components/One';
import Two from '../components/Two';
import styles from '../styles/index.module.css'

export default function index() {
	return (
		<div id={styles.beginning}>
			<Head>
			<title>Magnitopic</title>
			</Head>
			<Header/>
			<One/>
			<Two/>
		</div>
	)
}