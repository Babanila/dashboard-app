import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "@/components/TextInput";

describe("TextInput", () => {
	it("renders input with placeholder and value", () => {
		render(
			<TextInput
				placeholder="Enter your name"
				value="John Doe"
				onChange={() => {}}
			/>,
		);

		const input = screen.getByPlaceholderText(/enter your name/i);
		expect(input).toBeInTheDocument();
		expect((input as HTMLInputElement).value).toBe("John Doe");
	});

	it("calls onChange handler when typing in input", () => {
		const handleChange = jest.fn();
		render(
			<TextInput placeholder="Type here" value="" onChange={handleChange} />,
		);

		const input = screen.getByPlaceholderText(/type here/i);
		fireEvent.change(input, { target: { value: "Hello" } });

		expect(handleChange).toHaveBeenCalledTimes(1);
	});

	it("renders a label when provided", () => {
		render(
			<TextInput
				label="Your Email"
				name="email"
				value=""
				onChange={() => {}}
			/>,
		);

		expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
	});

	it("displays an error message when error is present", () => {
		render(
			<TextInput error="This field is required" value="" onChange={() => {}} />,
		);

		expect(screen.getByText(/this field is required/i)).toBeInTheDocument();
	});

	it("renders textarea if multiline is true", () => {
		render(<TextInput multiline value="multiline text" onChange={() => {}} />);

		expect(screen.getByRole("textbox")).toBeInTheDocument();
		expect(screen.getByDisplayValue(/multiline text/i)).toBeInTheDocument();
	});
});
