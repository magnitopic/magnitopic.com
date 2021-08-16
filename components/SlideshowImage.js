import Image from 'next/image';

function SlideshowImage(props){
	return (
		<>
			{props.icons.map((images)=>(
				<Image key={images.id} title={images.name} src={images.url} alt={images.name} height="100" width="100"/>
			))}
		</>
	)
}


export default SlideshowImage