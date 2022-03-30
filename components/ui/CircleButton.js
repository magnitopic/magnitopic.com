import styles from '../../styles/CircleButton.module.css';

const CircleButton= ({icon}) => {
	return (
		<>
			<div className={styles.arow}>{String.fromCharCode(icon)}</div>
		</>
	)
}


export default CircleButton