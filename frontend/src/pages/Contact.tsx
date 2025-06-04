import { useState, FC, ChangeEvent, FormEvent } from "react";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Tile from "@/components/Tile";

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

interface FormErrors {
	name?: string;
	email?: string;
	message?: string;
}

const Contact: FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [submitMessage, setSubmitMessage] = useState<string>("");

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));

		if (errors[name as keyof FormErrors]) {
			setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
		}
	};

	const validateForm = (): FormErrors => {
		const newErrors: FormErrors = {};

		if (!formData.name.trim()) newErrors.name = "Name is required.";
		if (!formData.email.trim()) {
			newErrors.email = "Email is required.";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email is invalid.";
		}
		if (!formData.message.trim()) newErrors.message = "Message is required.";
		return newErrors;
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitMessage("");
		const validationErrors = validateForm();
		setErrors(validationErrors);

		if (Object.keys(validationErrors).length === 0) {
			setIsSubmitting(true);
			// TODO: Add API call
			console.log("Form data submitted:", formData);
			try {
				// Simulate network delay
				await new Promise((resolve) => setTimeout(resolve, 1500));

				setSubmitMessage("Your message has been sent successfully!");
				setFormData({ name: "", email: "", subject: "", message: "" });
			} catch (error) {
				console.error("Submission error:", error);
				setSubmitMessage("Failed to send message. Please try again later.");
			} finally {
				setIsSubmitting(false);
			}
		} else {
			console.log("Validation errors:", validationErrors);
		}
	};

	return (
		<div className="h-full flex flex-col bg-secondary py-4 px-4 sm:px-6 lg:px-8 text-primary">
			<div className="max-w-3xl mx-auto">
				<Tile
					title={
						<h1 className="text-4xl font-extrabold text-center text-primary mb-4">
							Contact Us
						</h1>
					}
					description={
						<p className="text-lg text-center text-primary">
							Have a question or want to work together? Fill out the form below
							or reach out via other channels.
						</p>
					}
				/>

				<div className="w-80 bg-primary shadow-2xl mx-auto rounded-lg p-8 md:w-150 md:p-10">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col justify-center space-y-6"
					>
						<TextInput
							label="Full Name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Jane Doe"
							className={`block w-full px-3 py-2 bg-secondary border ${errors.name ? "border-bred" : "border-primary"} rounded-md shadow-sm placeholder-light-gray5 focus-visible:outline-1 sm:text-sm text-primary`}
							error={errors.name}
						/>
						<TextInput
							label="Email Address"
							name="email"
							type="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="you@example.com"
							className={`block w-full px-3 py-2 bg-secondary border ${errors.email ? "border-bred" : "border-primary"} rounded-md shadow-sm placeholder-light-gray5 focus-visible:outline-1 sm:text-sm text-primary`}
							error={errors.email}
						/>
						<TextInput
							label="Subject (Optional)"
							name="subject"
							value={formData.subject}
							onChange={handleChange}
							placeholder="Project Inquiry"
							className={`block w-full px-3 py-2 bg-secondary border border-primary rounded-md shadow-sm placeholder-light-gray5 focus-visible:outline-1 sm:text-sm text-primary`}
						/>
						<TextInput
							label="Message"
							name="message"
							multiline={true}
							rows={4}
							value={formData.message}
							onChange={handleChange}
							placeholder="Your detailed message here..."
							className={`block w-full px-3 py-2 bg-secondary border ${errors.message ? "border-bred" : "border-primary"} rounded-md shadow-sm placeholder-light-gray5 focus-visible:outline-1 sm:text-sm text-primary`}
							error={errors.message}
						/>

						<div className="flex justify-center">
							<Button
								type="submit"
								disabled={isSubmitting}
								className={`w-50 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary 
                  ${isSubmitting ? "bg-secondary cursor-not-allowed" : "bg-secondary hover:bg-bgreen hover:text-secondary"} transition duration-150 ease-in-out`}
							>
								{isSubmitting ? "Sending..." : "Send Message"}
							</Button>
						</div>

						{submitMessage && (
							<p
								className={`mt-4 text-sm text-center ${submitMessage.includes("successfully") ? "text-bgreen" : "text-bred"}`}
							>
								{submitMessage}
							</p>
						)}
					</form>
				</div>

				<Tile
					title={
						<h2 className="text-2xl font-semibold text-primary mb-4">
							Other Ways to Reach Us
						</h2>
					}
					description={
						<div className="w-content">
							<p className="w-fit text-primary">
								Email:{" "}
								<a
									href="mailto:info@dash.com"
									className="text-bblue hover:text-bgreen hover:underline"
								>
									info@example.com
								</a>
							</p>
							<p className="w-fit text-primary mt-1">
								Phone:{" "}
								<a
									href="tel:+4917630172022"
									className="text-bblue hover:text-bgreen hover:underline"
								>
									(+49) 176 3017 2022
								</a>
							</p>
						</div>
					}
				/>
			</div>
		</div>
	);
};

export default Contact;
