import Image from 'next/image';

function SlideshowImage(props){
	return (
		<>
			{props.icons.map((images)=>(
				<Image key={images.id} title={images.name} src={images.url} alt={images.name} height={images.height} width={images.width}/>
			))}
		</>
	)
}

export default SlideshowImage