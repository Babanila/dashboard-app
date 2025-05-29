import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

import { createRoutesStub } from 'react-router';

jest.mock('util', () => ({
  TextEncoder: class {},
  TextDecoder: class {},
}));

describe('Header Component', () => {
  it('renders about on header', () => {
    const Stub = createRoutesStub([
      {
        path: '/',
        Component: Header,
      },
    ]);

    render(<Stub initialEntries={['/']} />);
    const linkElement = screen.getByText(/about/i);
    expect(linkElement).toBeInTheDocument();
  });
});
