import React, { useState } from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/dash-logo.webp';
import hamburger from '../assets/hamburger.svg';
import NavLinks from './NavLinks';

const headerNavItems = ['Products', 'Customer', 'Contact', 'About'];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full min-w-[20rem] max-w-[80rem] flex flex-row items-center justify-between p-4 text-white text-base uppercase bg-primary fixed top-0 z-[1000]">
      <NavLink to="/">
        <div>
          <img src={logo} alt="Dash Logo" className="w-20 md:w-30 h-auto" />
        </div>
      </NavLink>

      <nav className="flex flex-row items-start space-x-4 hidden md:block">
        <NavLinks navItems={headerNavItems} />
      </nav>

      <div className="relative flex flex-col items-start space-x-4 block md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          <img src={hamburger} alt="Menu Icon" className="w-10 h-auto" />
        </button>

        <nav
          className={`absolute top-[3.2rem] right-[-1rem] flex flex-col justify-center items-center p-4 space-y-4 bg-primary ${
            menuOpen ? 'flex' : 'hidden'
          }`}
        >
          <NavLinks navItems={headerNavItems} />
        </nav>
      </div>
    </header>
  );
}

export default Header;
