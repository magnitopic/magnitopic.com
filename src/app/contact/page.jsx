'use client';

import { useState } from 'react';
import BgCanvas from "../../components/BgCanvas";

const page = () => {
	const [status, setStatus] = useState(null)
	const [error, setError] = useState(null)

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			setStatus('pending');
			setError(null);
			const myForm = event.target;
			const formData = new FormData(myForm);
			const res = await fetch('/__contact.html', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(formData).toString()
			});
			if (res.status === 200) {
				setStatus('ok');
			} else {
				setStatus('error');
				setError(`${res.status} ${res.statusText}`);
				console.error(error);
			}
		} catch (e) {
			setStatus('error');
			setError(`${e}`);
			console.error(error);
		}
	};

	return (
		<>
			<BgCanvas />
			<main className="flex flex-1 justify-around items-center flex-col z-10 relative">
				<section className="container max-w-7xl px-4 pt-32 pb-16">
					<div className="bg-blue-900 rounded-lg p-10">
						<h2 className="text-lg font-semibold">Get in touch</h2>
						<div className="p-10 max-w-3xl m-auto">
							<form name="contact" method="POST" data-netlify="true" onSubmit={handleFormSubmit}>

								<input type="hidden" name="form-name" value="contact" />

								{/* Name field */}
								<div className="mb-4">
									<label htmlFor="name" className="block text-white font-medium mb-2">
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
									/>
								</div>

								{/* Email field */}
								<div className="mb-4">
									<label htmlFor="email" className="block text-white font-medium mb-2">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
									/>
								</div>

								{/* Message field */}
								<div className="mb-4">
									<label htmlFor="message" className="block text-white font-medium mb-2">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										rows="4"
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
									></textarea>
								</div>

								{/* Submit button */}
								<button
									type="submit"
									className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
								>
									Send Message
								</button>

							</form>
						</div>
					</div>

				</section>

			</main>
		</>
	);
};

export default page;
