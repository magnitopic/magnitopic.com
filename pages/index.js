import Header from '../components/Header';
import One from '../components/One';
import Two from '../components/Two';
import styles from '../styles/index.module.css'

export default function index() {
	return (
		<>
		<div id={styles.beginning}>
			<Header/>
			<One/>
			<Two/>
		</div>
		</>
	)
}