import styles from '../styles/Two.module.css';
import React, {useEffect} from 'react';
import Slideshow from './Slideshow';
import Repos from './Repos';
import CircleButton from './ui/CircleButton';


const Two= () => {
	return (
		<>
		<div
		className={styles.downArow}
		onClick={() => {
			window.scrollTo({top: 1200,behavior: 'smooth'});
		}}>
			<CircleButton icon={"8595"} />
		</div>
		<div id={styles.two}>
			<h1>Technologies I&apos;ve worked with</h1>
			<Slideshow/>
			<Repos/>
		</div>
		</>
	)
}


export default Two