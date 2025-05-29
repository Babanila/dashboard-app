import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/dash-logo.webp';

const Footer: React.FC = () => {
  const navItems = ['About', 'Products', 'Customer', 'Contact'];

  return (
    <footer className="w-full min-w-[20rem] flex flex-col items-center justify-between p-4 text-white text-base bg-primary fixed bottom-0 z-[1000] max-w-7xl">
      <div className="w-full flex flex-col md:flex-row justify-between items-center py-6 space-y-4 md:space-y-0">
        <NavLink to="/">
          <img src={logo} alt="Dash Logo" className="w-20 lg:w-30 h-auto text-white" />
        </NavLink>

        <nav className="mt-4 mb-4 flex flex-col lg:flex-row items-start justify-center space-y-4 lg:space-x-4 lg:space-y-0 text-base">
          {navItems.map((ni) => {
            const exactPath = ni.toLowerCase();

            return (
              <NavLink to={`/${exactPath}`} key={ni} className=" text-white hover:text-bgreen">
                {ni}
              </NavLink>
            );
          })}
        </nav>

        <div className="flex flex-row justify-center items-center space-x-6 space-y-0">
          <a href="#" className="text-white hover:text-bgreen" aria-label="Twitter">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-bgreen" aria-label="GitHub">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.33-1.3-1.69-1.3-1.69-1.07-.73.08-.72.08-.72 1.18.08 1.81 1.22 1.81 1.22 1.05 1.8 2.76 1.28 3.44.98.11-.76.41-1.28.75-1.58-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.18a11.16 11.16 0 012.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.6.23 2.78.11 3.07.75.81 1.2 1.85 1.2 3.11 0 4.45-2.7 5.43-5.27 5.71.42.37.8 1.1.8 2.22 0 1.6-.01 2.9-.01 3.29 0 .31.21.68.8.56C20.71 21.39 24 17.09 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="w-full lg:mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
