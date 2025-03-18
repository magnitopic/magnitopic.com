import React from "react";
import { useState } from 'react';

const ContactForm = () => {
	const [status, setStatus] = useState(null)
	const [error, setError] = useState(null)

	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormValues({
			...formValues,
			[name]: value
		});
	};

	const resetForm = () => {
		setFormValues({
			name: '',
			email: '',
			message: ''
		});
	};

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
				resetForm();
			} else {
				setStatus('error');
				setError(`${res.status} ${res.statusText}`);
				console.error(res.status);
			}
		} catch (e) {
			setStatus('error');
			setError(`${e}`);
			console.error(e);
		}
	};

	return (
		<form name="contact" method="POST" data-netlify="true" onSubmit={handleFormSubmit}>
			<input type="hidden" name="form-name" value="contact" />

			{/* Name field */}
			<div className="mb-4">
				<label htmlFor="name" className="block text-white font-medium mb-2">
					Name *
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formValues.name}
					onChange={handleInputChange}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					required
				/>
			</div>

			{/* Email field */}
			<div className="mb-4">
				<label htmlFor="email" className="block text-white font-medium mb-2">
					Email *
				</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formValues.email}
					onChange={handleInputChange}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					required
				/>
			</div>

			{/* Message field */}
			<div className="mb-4">
				<label htmlFor="message" className="block text-white font-medium mb-2">
					Message *
				</label>
				<textarea
					id="message"
					name="message"
					rows="4"
					value={formValues.message}
					onChange={handleInputChange}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					required
				></textarea>
			</div>

			{/* Submit button */}
			<button
				type="submit"
				className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
				disabled={status === 'pending'}
			>
				{status === 'pending' ? 'Sending...' : 'Send Message'}
			</button>
		</form>
	)
}

export default ContactForm;