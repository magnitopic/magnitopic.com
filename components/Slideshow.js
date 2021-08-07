import styles from '../styles/Slideshow.module.css';
import Image from 'next/image';

function Slideshow() {
	
	return (
		<div className={styles.slideshow}>
			<div className={styles.slideshowSlider}>
				<div className={styles.transitors}>
					<a>&#10094;</a>
				</div>
				<div className={styles.slide}>
				<Image src="/../public/tech_icons/js.png" height="100" width="100"/>
				</div>
				<div className={styles.transitors}>
					<a>&#10095;</a>
				</div>
			</div>
		</div>
	)
}


export default Slideshow