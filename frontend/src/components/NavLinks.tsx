import React from 'react';
import { NavLink } from 'react-router';

type NavLinksProps = {
  navItems: string[];
};

const NavLinks: React.FC<NavLinksProps> = ({ navItems }) => {
  return (
    <>
      {navItems.map((ni) => {
        const exactPath = ni.toLowerCase();
        return (
          <NavLink
            to={`/${exactPath}`}
            key={ni}
            className="text-white hover:text-bgreen"
          >
            {ni}
          </NavLink>
        );
      })}
    </>
  );
};

export default NavLinks;
