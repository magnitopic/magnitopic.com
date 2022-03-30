import Image from "next/image";

const Test = ({ images }) => {
	return (
		<>
			{images.map((images) => (
				<Image
					key={images.id}
					title={images.name}
					src={images.url}
					alt={images.name}
					height={images.height}
					width={images.width}
				/>
			))}
		</>
	);
};

export default Test;
