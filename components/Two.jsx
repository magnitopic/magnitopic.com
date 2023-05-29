import styles from '../styles/Two.module.css';
import React, {useState} from 'react';
import Slideshow from './Slideshow';
import Repos from './Repos';
import CircleButton from './ui/CircleButton.jsx';

function test() {
	console.log("Cliked");
}

const Two= () => {


	return (
		<>
		<div
		onClick={() => {
			window.scrollBy({top: (window.innerHeight*0.9), behavior: 'smooth'});
		}}>
			{/* <div className={styles.downArow}>&#129047;</div> */}
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