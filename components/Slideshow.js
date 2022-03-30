import styles from "../styles/Slideshow.module.css";
import SlideshowImage from "./SlideshowImage";
import CircleButton from "./ui/CircleButton";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Slideshow = () => {
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
		
	return (
		<div className={styles.slideshow}>
			<CircleButton
				icon={"8249"}
				onClick={() => {
					let result = index - 1 < 0 ? 2 : index - 1;
					setIndex(result);
				}}
			/>

			<div
				className={styles.slideshowImages}
				style={{ transform: `translate3d(${-index * 35}%, 0, 0)` }}
			>
				<SlideshowImage images={images} />
			</div>

			<CircleButton
				icon={"8250"}
				onClick={() => {
					let result = index + 1 >= 3 ? 0 : index + 1;
					setIndex(result);
				}}
			/>
		</div>
	);
};

export default Slideshow;
