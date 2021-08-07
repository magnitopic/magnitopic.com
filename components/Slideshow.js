import styles from '../styles/Slideshow.module.css';
import Image from 'next/image';

function Slideshow() {
	return (
		<div className={styles.slideshow}>
			<div className={styles.slideshowSlider}>
				<div className={styles.slide}>
				</div>
			</div>
		</div>
	)
}


export default Slideshow