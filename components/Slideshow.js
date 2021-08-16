import styles from '../styles/Slideshow.module.css';
import Image from 'next/image';
import SlideshowImage from './SlideshowImage';

const images=[
		{name:'js',url:'/tech_icons/js.png'},
		{name:'css',url:'/tech_icons/css.png'},
		{name:'java',url:'/tech_icons/java.png'},
		{name:'html',url:'/tech_icons/html.png'},
		{name:'docker',url:'/tech_icons/docker.png'},
		{name:'arduino',url:'/tech_icons/arduino.png'},
		{name:'express',url:'/tech_icons/express.png'},
		{name:'git',url:'/tech_icons/git.png'},
		{name:'jquery',url:'/tech_icons/jquery.png'}
	];

function Slideshow() {
		return (
		<div className={styles.slideshow}>
			<div className={styles.slideshowSlider}>
				<div className={styles.transitors}>
					<a>&#10094;</a>
				</div>
				<div className={styles.slide}>
					<SlideshowImage icons={images}/>
				</div>
				<div className={styles.transitors}>
					<a>&#10095;</a>
				</div>
			</div>
		</div>
	)
}


export default Slideshow