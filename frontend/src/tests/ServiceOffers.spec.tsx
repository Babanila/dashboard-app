import ServiceOffers from "@/components/ServiceOffers";
import { render, screen } from "@testing-library/react";

describe("ServiceOffers", () => {
	it("renders all service offers with title and description", () => {
		render(<ServiceOffers />);

		const offers = [
			{ title: "Free Shipping", description: "On all orders over €50" },
			{ title: "24/7 Support", description: "We’re here whenever you need us" },
			{ title: "Secure Payments", description: "Your data is safe with us" },
		];

		for (const { title, description } of offers) {
			expect(screen.getByText(title)).toBeInTheDocument();
			expect(screen.getByText(description)).toBeInTheDocument();
		}
	});

	it("renders exactly three offer blocks", () => {
		render(<ServiceOffers />);
		const headings = screen.getAllByRole("heading", { level: 3 });
		expect(headings).toHaveLength(3);
	});
});
