function Card({ title, text, image, link }) {
	return (
		<div className="bg-gray-900 rounded-md p-4 gap-4 flex flex-col flex-1 max-w-32">
			<h1 className="text-3xl">{title}</h1>
			<p>{text}</p>
		</div>
	);
}

export default Card;
