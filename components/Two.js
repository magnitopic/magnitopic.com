import styles from '../styles/Two.module.css';
import React, {useEffect} from 'react';
import Slideshow from './Slideshow'


const Two= () => {
	return (
		<div id={styles.two}>
			<h1>Technologies I&apos;ve worked with</h1>
			<Slideshow/>
		</div>
	)
}


export default Two