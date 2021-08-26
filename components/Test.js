import React, { useState, useEffect } from 'react';
import styles from '../styles/Test.module.css';
import Image from 'next/image'

const colors = ["#0088FE", "#00C49F"];
const delay = 3000;

const Test= ({images}) =>  {
const [index, setIndex] = React.useState(0);
const timeoutRef = React.useRef(null);

function resetTimeout() {
	if (timeoutRef.current) {
	clearTimeout(timeoutRef.current);
	}
}

React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);	

return (

	// This is a temporary fix, the final version should be more spaced and have the trasitors to move bettwen the stages
	<>
	<div
	className={styles.transitors} 
	onClick={() => {
		let result=index-1?(1):(index-1);
		setIndex(result);
	}}>
		<a className={styles.arow}>&#10094;</a>
	</div>
	<div className={styles.slideshow}>
		<div
			className={styles.slideshowSlider}
			style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
			{images.map((images) => (
			<Image key={images.id} title={images.name} src={images.url} alt={images.name} height={images.height} width={images.width}/>
			))}
		</div>
	</div>
	<div
	className={styles.transitors} 
	onClick={() => {
		let result=index+1>==2?0:index+1
		setIndex(result);
	}}>
		<a className={styles.arow}>&#10095;</a>
	</div>
	</>
);
}

export default Test