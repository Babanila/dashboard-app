import { useState } from "react";
import { NavLink } from "react-router";
import logo from "../assets/dash-logo.webp";
import hamburger from "../assets/hamburger.svg";
import cartLogo from "../assets/shopping-cart.svg";
import Button from "./Button";
import NavLinks from "./NavLinks";

const headerNavItems = ["Products", "Contact", "About"];

function Header() {
	const [itemCount, setItemCount] = useState(22);
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen((prev) => !prev);

	return (
		<header className="fixed top-0 z-[1000] w-full min-w-[20rem] max-w-[80rem] flex items-center justify-between px-4 py-4 text-secondary bg-primary border-b-1 border-light-gray5 ">
			<NavLink to="/" className="shrink-0">
				<img src={logo} alt="Dash Logo" className="w-20 md:w-30 h-auto" />
			</NavLink>

			<div className="flex items-center space-x-8 md:space-x-0">
				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-4">
					<NavLinks navItems={headerNavItems} />
				</nav>

				<NavLink to="/cart" className="relative shrink-0 md:mr-4 md:ml-20">
					<img src={cartLogo} alt="Cart Logo" className="w-8 h-auto md:w-10" />
					{itemCount > 0 && (
						<span className="absolute -top-1 -right-1 bg-bred text-secondary rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold md:w-6 md:h-6 transition-all">
							{itemCount}
						</span>
					)}
				</NavLink>

				{/* Mobile Navigation */}
				<div className="flex items-center md:hidden relative">
					<Button onClick={toggleMenu} aria-label="Toggle menu">
						<img src={hamburger} alt="Menu Icon" className="w-10 h-auto" />
					</Button>

					{menuOpen && (
						<nav className="absolute right-[-1rem] top-[3.2rem] flex flex-col items-center p-4 space-y-4 bg-primary shadow-lg z-50">
							<NavLinks navItems={headerNavItems} />
						</nav>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
