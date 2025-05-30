import React, { useState } from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/dash-logo.webp';
import hamburger from '../assets/hamburger.svg';
import Button from './Button';
import NavLinks from './NavLinks';

const headerNavItems = ['Products', 'Customer', 'Contact', 'About'];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 z-[1000] w-full min-w-[20rem] max-w-[80rem] flex items-center justify-between px-8 py-4 text-secondary bg-primary">
      <NavLink to="/" className="shrink-0">
        <img src={logo} alt="Dash Logo" className="w-20 md:w-30 h-auto" />
      </NavLink>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4">
        <NavLinks navItems={headerNavItems} />
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden relative">
        <Button onClick={toggleMenu} aria-label="Toggle menu">
          <img src={hamburger} alt="Menu Icon" className="w-10 h-auto" />
        </Button>

        {menuOpen && (
          <nav className="absolute right-[-2rem] top-[3.2rem] flex flex-col items-center p-4 space-y-4 bg-primary shadow-lg z-50">
            <NavLinks navItems={headerNavItems} />
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
