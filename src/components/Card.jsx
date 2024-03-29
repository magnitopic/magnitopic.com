
function Card({ title, text, image, link }) {
	return (
		<div className="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-900 hover:-translate-y-2 hover:shadow-xl shadow-gray-800">
			<div
				alt="image here"
				className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-gray-800"
			>
				<img
					src={image}
					alt="project image"
					className="rounded-lg w-full h-full object-cover object-top"
				/>
			</div>

			<div className="">
				<h2 className="text-2xl font-bold mb-2 text-gray-100">{title}</h2>
				<p className="text-gray-200 line-clamp-3">
					{text}
				</p>
			</div>
			<button className="hover:bg-gray-700 bg-gray-800 text-gray-100 mt-6 rounded p-2 px-6">
				Go to project →
			</button>
		</div>
	);
}

export default Card;
