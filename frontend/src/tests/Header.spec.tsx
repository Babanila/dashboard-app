import { MemoryRouter } from "react-router";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/Header";
import type { NavLinksProps } from "@/components/NavLinks";

jest.mock("@/assets/dash-logo.webp", () => "logo.png");
jest.mock("@/assets/hamburger.svg", () => "hamburger.svg");
jest.mock("@/components/NavLinks", () => ({ navItems }: NavLinksProps) => (
	<ul>
		{navItems.map((item: string) => (
			<li key={item}>{item}</li>
		))}
	</ul>
));

describe("Header Component", () => {
	it("renders logo and basic structure", () => {
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>,
		);

		expect(screen.getByAltText(/dash logo/i)).toBeInTheDocument();
	});

	it("renders desktop nav items when in md view", () => {
		window.innerWidth = 1024;
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>,
		);
		expect(screen.getByText(/products/i)).toBeInTheDocument();
		expect(screen.getByText(/contact/i)).toBeInTheDocument();
		expect(screen.getByText(/about/i)).toBeInTheDocument();
	});

	it("toggles mobile menu on button click", () => {
		const handleClick = jest.fn();

		window.innerWidth = 375;
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>,
		);

		const toggleBtn = screen.getByRole("button", { name: /menu icon/i });
		fireEvent.click(toggleBtn);

		expect(screen.getAllByText(/products/i)).toHaveLength(2);
		expect(screen.getAllByText(/contact/i)).toHaveLength(2);
		expect(screen.getAllByText(/about/i)).toHaveLength(2);
		expect(handleClick).not.toHaveBeenCalled();
	});
});
