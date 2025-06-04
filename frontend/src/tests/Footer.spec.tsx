import Footer from "@/components/Footer";
import type { NavLinksProps } from "@/components/NavLinks";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

jest.mock("@/assets/dash-logo.webp", () => "logo.png");
jest.mock("@/assets/hamburger.svg", () => "hamburger.svg");
jest.mock("@/components/NavLinks", () => ({ navItems }: NavLinksProps) => (
	<ul>
		{navItems.map((item: string) => (
			<li key={item}>{item}</li>
		))}
	</ul>
));

describe("Footer Component", () => {
	it("renders the logo", () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>,
		);
		const logo = screen.getByAltText(/dash logo/i);
		expect(logo).toBeInTheDocument();
	});

	it("renders navigation links", () => {
		const menu = ["About", "Products", "Contact"];
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>,
		);
		for (const text of menu) {
			expect(screen.getByText(text)).toBeInTheDocument();
		}
	});

	it("renders social media links", () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>,
		);

		expect(screen.getByRole("link", { name: /twitter/i })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
	});

	it("displays the current year", () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>,
		);
		const year = new Date().getFullYear().toString();
		expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument();
	});
});
