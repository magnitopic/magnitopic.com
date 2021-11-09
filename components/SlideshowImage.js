import React, { useState, useEffect } from 'react';
import styles from '../styles/Slideshow.module.css';
import CircleButton from './ui/CircleButton';
import Image from 'next/image'

const Test= ({images}) =>  {


// State should be added to calculate how wide the slideshow
// component is and calculate how many indexes it needs

const [index, setIndex] = React.useState(0);
const timeoutRef = React.useRef(null);
const delay = 5000;

//React functions to change the state of the Slider
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
          prevIndex === 3 - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);


//Actual rendered page
return (
	<>
	<div
	className={styles.transitors} 
	onClick={() => {
		let result=index-1<0?2:index-1;
		setIndex(result);
	}}>
		<CircleButton icon={"8249"}/>
	</div>

	<div className={styles.inerSlideshow}>
		<div
			className={styles.slideshowImages}
			style={{ transform: `translate3d(${-index * 35}%, 0, 0)` }}>
			{images.map((images) => (
			<Image key={images.id} title={images.name} src={images.url} alt={images.name} height={images.height} width={images.width}/>
			))}
		</div>
	</div>
	
	<div
	className={styles.transitors} 
	onClick={() => {
		let result=index+1>=3?0:index+1
		setIndex(result);
	}}>
		<CircleButton icon={"8250"}/>
	</div>
	</>
);
}

export default Test