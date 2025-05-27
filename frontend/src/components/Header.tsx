import React from 'react';
import { NavLink } from 'react-router';

type HeaderProps = {
  classname: string;
  logoSrc: string;
  imgClassname: string;
};

const navItems = ['Products', 'Customer', 'Contact', 'About'];

export function Header({ classname, logoSrc, imgClassname }: HeaderProps) {
  return (
    <header className={classname}>
      <NavLink to="/">
        <img src={logoSrc} alt="Dash Logo" className={imgClassname} />
      </NavLink>

      <nav className="nav-item">
        {navItems.map((ni) => {
          const exactPath = ni.toLowerCase();

          return (
            <NavLink to={`/${exactPath}`} key={ni}>
              {ni}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}
