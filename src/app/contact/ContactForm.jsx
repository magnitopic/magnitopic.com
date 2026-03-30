"use client";
import { useState } from "react";

const inputClass =
	"w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white/85 text-sm placeholder-white/25 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all resize-none";
const labelClass =
	"block text-xs font-mono text-white/50 uppercase tracking-widest mb-2";

const ContactForm = () => {
	const [status, setStatus] = useState(null);
	const [error, setError] = useState(null);
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValues((prev) => ({ ...prev, [name]: value }));
	};

	const resetForm = () =>
		setFormValues({ name: "", email: "", message: "" });

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			setStatus("pending");
			setError(null);
			const formData = new FormData(e.target);
			const res = await fetch("/__contact.html", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: new URLSearchParams(formData).toString(),
			});
			if (res.status === 200) {
				setStatus("ok");
				resetForm();
			} else {
				setStatus("error");
				setError(`${res.status} ${res.statusText}`);
			}
		} catch (err) {
			setStatus("error");
			setError(`${err}`);
		}
	};

	return (
		<form
			name="contact"
			method="POST"
			data-netlify="true"
			onSubmit={handleFormSubmit}
			className="space-y-5"
			aria-label="Contact form"
			noValidate
		>
			<input type="hidden" name="form-name" value="contact" />

			<div>
				<label htmlFor="name" className={labelClass}>
					Name <span aria-hidden="true">*</span>
					<span className="sr-only">(required)</span>
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formValues.name}
					onChange={handleInputChange}
					className={inputClass}
					placeholder="Your name"
					required
					autoComplete="name"
				/>
			</div>

			<div>
				<label htmlFor="email" className={labelClass}>
					Email <span aria-hidden="true">*</span>
					<span className="sr-only">(required)</span>
				</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formValues.email}
					onChange={handleInputChange}
					className={inputClass}
					placeholder="you@example.com"
					required
					autoComplete="email"
				/>
			</div>

			<div>
				<label htmlFor="message" className={labelClass}>
					Message <span aria-hidden="true">*</span>
					<span className="sr-only">(required)</span>
				</label>
				<textarea
					id="message"
					name="message"
					rows="5"
					value={formValues.message}
					onChange={handleInputChange}
					className={inputClass}
					placeholder="What's on your mind?"
					required
				/>
			</div>

			<button
				type="submit"
				disabled={status === "pending"}
				aria-busy={status === "pending"}
				className="w-full py-2.5 px-6 rounded-lg border border-blue-500/40 text-blue-300/90 hover:bg-blue-500/10 hover:border-blue-400/60 hover:text-blue-200 transition-all font-mono text-sm disabled:opacity-40 disabled:cursor-not-allowed"
			>
				{status === "pending" ? "Sending…" : "Send message →"}
			</button>

			{/*
			  aria-live="polite" — screen readers announce the message after the
			  current sentence finishes, without interrupting.
			  role="status" reinforces that this is a live region.
			*/}
			<div aria-live="polite" role="status">
				{status === "ok" && (
					<p className="text-xs font-mono text-green-400/80">
						Message sent! I&apos;ll get back to you soon.
					</p>
				)}
				{status === "error" && (
					<p className="text-xs font-mono text-red-400/70">
						Something went wrong: {error}
					</p>
				)}
			</div>
		</form>
	);
};

export default ContactForm;
