import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import NavLinks from '@/components/NavLinks';

describe('NavLinks', () => {
  const navItems = ['About', 'Products', 'Contact'];

  it('renders all nav items as links', () => {
    render(
      <MemoryRouter>
        <NavLinks navItems={navItems} />
      </MemoryRouter>,
    );

    navItems.forEach((item) => {
      const link = screen.getByText(item);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `/${item.toLowerCase()}`);
    });
  });

  it('applies correct classes for inactive links', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NavLinks navItems={['About']} />
      </MemoryRouter>,
    );

    const link = screen.getByText('About');
    expect(link).toHaveClass('text-secondary font-normal');
  });

  it('applies active class if route matches', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <NavLinks navItems={['About']} />
      </MemoryRouter>,
    );

    const link = screen.getByText('About');
    expect(link).toHaveClass('text-bgreen font-semibold');
  });
});
