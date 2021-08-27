import React, { useState, useEffect } from 'react';
import styles from '../styles/Slideshow.module.css';
import Image from 'next/image'

const Test= ({images}) =>  {
const [index, setIndex] = React.useState(0);
const timeoutRef = React.useRef(null);
const delay = 5000;


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
          prevIndex === 2 - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);	

return (
	<>
	<div
	className={styles.transitors} 
	onClick={() => {
		let result=index-1?(1):(index-1);
		setIndex(result);
	}}>
		<a className={styles.arow}>&#10094;</a>
	</div>

	<div className={styles.inerSlideshow}>
		<div
			className={styles.slideshowImages}
			style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
			{images.map((images) => (
			<Image key={images.id} title={images.name} src={images.url} alt={images.name} height={images.height} width={images.width}/>
			))}
		</div>
	</div>
	
	<div
	className={styles.transitors} 
	onClick={() => {
		let result=index+1>=2?0:index+1
		setIndex(result);
	}}>
		<a className={styles.arow}>&#10095;</a>
	</div>
	</>
);
}

export default Test