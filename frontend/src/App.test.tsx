import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Customer from '@/pages/Customer';
import Dashboard from '@/pages/Dashboard';
import Products from '@/pages/Products';
import Product from '@/pages/Product';

import { createRoutesStub } from 'react-router';

jest.mock('util', () => ({
  TextEncoder: class {},
  TextDecoder: class {},
}));

it('renders app', () => {
  const Stub = createRoutesStub([
    {
      path: '/',
      Component: Dashboard,
    },
    {
      path: '/about',
      Component: About,
    },
    {
      path: '/customer',
      Component: Customer,
    },
    {
      path: '/contact',
      Component: Contact,
    },
    {
      path: '/products',
      Component: Products,
    },
    {
      path: '/products/:id',
      Component: Product,
    },
  ]);

  render(<Stub initialEntries={['/']} />);
  const linkElement = screen.getByText(/users/i);
  expect(linkElement).toBeInTheDocument();
});
