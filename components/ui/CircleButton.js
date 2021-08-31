import styles from '../../styles/CircleButton.module.css';

const CircleButton= ({icon}) => {
	return (
		<>
			<a className={styles.arow}>{String.fromCharCode(icon)}</a>
		</>
	)
}


export default CircleButton