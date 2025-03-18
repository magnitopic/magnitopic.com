'use client';
import BgCanvas from "../../components/BgCanvas";
import ContactForm from "./ContactForm";

const page = () => {
	return (
		<>
			<BgCanvas />
			<main className="flex flex-1 justify-around items-center flex-col z-10 relative">
				<section className="container max-w-7xl px-4 pt-32 pb-16">
					<div className="bg-blue-900 rounded-lg p-10">
						<h2 className="text-lg font-semibold">Get in touch</h2>
						<div className="p-10 max-w-3xl m-auto">
							<ContactForm />
						</div>
					</div>

				</section>

			</main>
		</>
	);
};

export default page;
