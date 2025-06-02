import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Footer from '@/components/Footer';

jest.mock('@/assets/dash-logo.webp', () => 'logo.png');
jest.mock('@/assets/hamburger.svg', () => 'hamburger.svg');
jest.mock('@/components/NavLinks', () => ({ navItems }: string[]) => (
  <ul>
    {navItems.map((item: string) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
));

describe('Footer Component', () => {
  it('renders the logo', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    const logo = screen.getByAltText(/dash logo/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    ['About', 'Products', 'Contact'].forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it('renders social media links', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  });

  it('displays the current year', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument();
  });
});
