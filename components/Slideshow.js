import styles from '../styles/Slideshow.module.css';
import Image from 'next/image';
import SlideshowImage from './SlideshowImage';

const images=[
		{name:'Java Script',url:'/tech_icons/JS.png'},
		{name:'CSS',url:'/tech_icons/css.png'},
		{name:'Java',url:'/tech_icons/java.png'},
		{name:'HTML',url:'/tech_icons/html.png'},
		{name:'Docker',url:'/tech_icons/docker.png'},
		{name:'Arduino',url:'/tech_icons/arduino.png'},
		{name:'Express',url:'/tech_icons/express.png'},
		{name:'Git',url:'/tech_icons/git.png'},
		{name:'jQuery',url:'/tech_icons/jquery.png'}
	];

function Slideshow() {
		return (
		<div className={styles.slideshow}>
			<div className={styles.slideshowSlider}>
				<div className={styles.transitors}>
					<a className={styles.arow}>&#10094;</a>
				</div>
				<div className={styles.slide}>
					<SlideshowImage icons={images}/>
				</div>
				<div className={styles.transitors}>
					<a className={styles.arow}>&#10095;</a>
				</div>
			</div>
		</div>
	)
}


export default Slideshow