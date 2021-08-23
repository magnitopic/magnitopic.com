import styles from '../styles/Slideshow.module.css';
import Image from 'next/image';
import SlideshowImage from './SlideshowImage';
import Test from './Test';

const images=[
		{name:'Python',url:'/tech_icons/python.png',height:100,width:100},
		{name:'Java',url:'/tech_icons/java.png',height:120,width:120},
		{name:'HTML',url:'/tech_icons/html.png',height:100,width:100},
		{name:'CSS',url:'/tech_icons/css.png',height:100,width:100},
		{name:'Java Script',url:'/tech_icons/JS.png',height:100,width:100},
		{name:'jQuery',url:'/tech_icons/jquery.png',height:100,width:100},
		{name:'Sass',url:'/tech_icons/sass.png',height:100,width:140},
		{name:'React',url:'/tech_icons/react.png',height:100,width:100},
		{name:'Node',url:'/tech_icons/node.png',height:100,width:100},
		{name:'Express',url:'/tech_icons/express.png',height:100,width:300},
		{name:'npm',url:'/tech_icons/npm.png',height:80,width:160},
		{name:'Mongo DB',url:'/tech_icons/mongodb.png',height:100,width:300},
		{name:'Markdown',url:'/tech_icons/markdown.png',height:90,width:120},
		{name:'Raspberry Pi',url:'/tech_icons/rbpi.png',height:100,width:80},
		{name:'Linux',url:'/tech_icons/linux.png',height:100,width:90},
		{name:'Windows',url:'/tech_icons/windows.png',height:100,width:100},
		{name:'Git',url:'/tech_icons/git.png',height:100,width:100},
		{name:'Docker',url:'/tech_icons/docker.png',height:100,width:120},
		{name:'Arduino',url:'/tech_icons/arduino.png',height:90,width:120},
	];

function Slideshow() {
		return (
		<div className={styles.slideshow}>
			<div className={styles.slideshowSlider}>
				{/* <SlideshowImage icons={images}/> */}
				<Test/>
			</div>
		</div>
	)
}


export default Slideshow