"use client";
import { useState } from "react";
import { PixelGlobe } from "../../components/ui";

const inputClass =
	"w-full border-0 border-b bg-transparent px-0 py-2 text-lg placeholder:text-graphite/60 focus:border-ink focus:outline-none focus-visible:outline-none transition-colors resize-none";
const labelClass = "block text-sm text-graphite mb-1";
const borderFor = (err) => (err ? "border-plum" : "border-ink/40");
const errClass = "mt-2 text-sm text-plum";

const ContactForm = () => {
	const [status, setStatus] = useState(null);
	const [error, setError] = useState(null);
	const [formErrors, setFormErrors] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		message: "",
	});

	const validateForm = (values) => {
		const nextErrors = {
			name: "",
			email: "",
			message: "",
		};
		const name = values.name.trim();
		const email = values.email.trim();
		const message = values.message.trim();

		if (!name) {
			nextErrors.name = "Please enter your name.";
		}

		if (!email) {
			nextErrors.email = "Please enter your email.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			nextErrors.email = "Please enter a valid email address.";
		}

		if (!message) {
			nextErrors.message = "Please enter a message.";
		}

		return nextErrors;
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValues((prev) => ({ ...prev, [name]: value }));
		setFormErrors((prev) => ({ ...prev, [name]: "" }));
	};

	const resetForm = () => {
		setFormValues({ name: "", email: "", message: "" });
		setFormErrors({ name: "", email: "", message: "" });
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const nextErrors = validateForm(formValues);
		setFormErrors(nextErrors);

		const hasErrors = Object.values(nextErrors).some(Boolean);
		if (hasErrors) {
			setStatus("error");
			setError("Please fix the highlighted fields and try again.");
			return;
		}

		try {
			setStatus("pending");
			setError(null);
			const formData = new FormData(e.target);
			const res = await fetch("/__contact.html", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
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

	const field = (id, label, extra, control) => (
		<div>
			<label htmlFor={id} className={labelClass}>
				{label} <span aria-hidden="true">*</span>
				<span className="sr-only">(required)</span>
			</label>
			{control}
			{formErrors[id] && (
				<p id={`${id}-error`} className={errClass}>
					{formErrors[id]}
				</p>
			)}
		</div>
	);

	const common = (id) => ({
		id,
		name: id,
		value: formValues[id],
		onChange: handleInputChange,
		required: true,
		"aria-invalid": Boolean(formErrors[id]),
		"aria-describedby": formErrors[id] ? `${id}-error` : undefined,
		className: `${inputClass} ${borderFor(formErrors[id])}`,
	});

	return (
		<form
			name="contact"
			method="POST"
			data-netlify="true"
			onSubmit={handleFormSubmit}
			className="space-y-8"
			aria-label="Contact form"
			noValidate
		>
			<input type="hidden" name="form-name" value="contact" />

			{field(
				"name",
				"Name",
				null,
				<input type="text" autoComplete="name" {...common("name")} />
			)}
			{field(
				"email",
				"Email",
				null,
				<input type="email" autoComplete="email" {...common("email")} />
			)}
			{field(
				"message",
				"Message",
				null,
				<textarea rows="5" {...common("message")} />
			)}

			<button
				type="submit"
				disabled={status === "pending"}
				aria-busy={status === "pending"}
				className="bg-ink px-8 py-3 text-paper transition-colors hover:bg-plum disabled:cursor-not-allowed disabled:opacity-50"
			>
				{status === "pending" ? "Sending…" : "Send message"}
			</button>

			{/* aria-live="polite": announced after the current sentence, without interrupting */}
			<div aria-live="polite" role="status" className="min-h-6 text-sm">
				{status === "ok" && (
					<p className="flex items-center gap-3">
						<PixelGlobe size={32} />
						Message sent. I&apos;ll get back to you soon.
					</p>
				)}
				{status === "error" && (
					<p className="text-plum">Something went wrong: {error}</p>
				)}
			</div>
		</form>
	);
};

export default ContactForm;
