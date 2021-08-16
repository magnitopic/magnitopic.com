import Image from 'next/image';

function SlideshowImage(props){
	return (
		<div>
			{props.icons.map((images)=>(
				<Image title={images.name} src={images.url} alt={images.name} height="100" width="100"/>
			))}
		</div>
	)
}


export default SlideshowImage