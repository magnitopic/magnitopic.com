'use client';
import BgCanvas from "../../components/BgCanvas";
import "font-awesome/css/font-awesome.min.css";
import ContactForm from "./ContactForm";
import Link from "next/link";

const page = () => {
	return (
		<>
			<BgCanvas />
			<main className="flex flex-1 justify-around items-center flex-col z-10 relative">
				<section className="container max-w-7xl px-4 pt-32 pb-16">
					<div className="bg-blue-900 rounded-lg p-10 flex flex-col gap-7">
						<div>
							<h3 className="uppercase text-xl text-[#fffffe]">Contact</h3>
							<h2 className="text-3xl font-semibold text-[#94aae9]">Get In Touch</h2>
						</div>
						<div className="flex flex-col md:flex-row p-2 gap-20 w-full xl:max-w-9/12 m-auto">
							<div className="flex-2">
								<ContactForm />
							</div>
							<div className="flex-1">
								<h3>You can also find me in these online spaces</h3>
								<div className="flex flex-row flex-wrap gap-5 text-3xl text-white mt-7">
									<Link
										href="https://www.linkedin.com/in/magnitopic/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fa fa-linkedin hover:text-blue-300 hover:scale-110" />
									</Link>
									<Link
										href="https://github.com/magnitopic"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fa fa-github hover:text-blue-300 hover:scale-110" />
									</Link>
									<Link
										href="https://www.youtube.com/@Magnitopic"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fa fa-youtube-play hover:text-blue-300 hover:scale-110" />
									</Link>
									<Link
										href="https://www.flickr.com/photos/magnitopic/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fa fa-flickr hover:text-blue-300 hover:scale-110" />
									</Link>
									<Link
										href="https://twitter.com/Magnitopic"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fa fa-twitter hover:text-blue-300 hover:scale-110" />
									</Link>
								</div>
							</div>
						</div>
					</div>

				</section>

			</main>
		</>
	);
};

export default page;
