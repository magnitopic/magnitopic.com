import Image from 'next/image';
import styles from '../styles/Two.module.css';
import React, {useEffect} from 'react';
import Slideshow from '../components/Slideshow'

const Two= () => {
	function doSomething(){
		console.log("Hello");
	}

	return (
		<div id={styles.two}>
			<h1>Technologies I&apos;ve worked with</h1>
			<Slideshow/>
		</div>
	)
}


export default Two