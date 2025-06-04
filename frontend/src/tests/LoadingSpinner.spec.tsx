import LoadingSpinner from "@/components/LoadingSpinner";
import { render, screen } from "@testing-library/react";

describe("LoadingSpinner", () => {
	it("renders with default props", () => {
		render(<LoadingSpinner />);

		const spinner = screen.getByRole("status", { name: /loading/i });

		expect(spinner).toBeInTheDocument();
		expect(spinner).toHaveClass("animate-spin");
		expect(spinner).toHaveClass("w-6");
		expect(spinner).toHaveClass("h-6");
		expect(spinner).toHaveClass("text-bgreen");
	});

	it("applies custom size and color props", () => {
		render(<LoadingSpinner size="w-10 h-10" color="text-red-500" />);

		const spinner = screen.getByRole("status", { name: /loading/i });

		expect(spinner).toHaveClass("w-10");
		expect(spinner).toHaveClass("h-10");
		expect(spinner).toHaveClass("text-red-500");
	});
});
