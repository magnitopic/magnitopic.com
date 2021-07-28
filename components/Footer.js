import styles from '../styles/Footer.module.css';

const Footer= () => {
	return (
		<div id={styles.footer}>
			<div id={styles.dMode}>
				<p id={styles.text} >Activate Dark Mode:</p>
				<input type="checkbox" id="check" onclick="changeStatus()"></input>
			</div>
		</div>
	)
}



export default Footer