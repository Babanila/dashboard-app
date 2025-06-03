import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router';
import Layout from '@/components/Layout';

const TestComponent = () => <div data-testid="outlet-content">Test Content</div>;

describe('Layout Component', () => {
  it('renders the layout and its children via Outlet', () => {
    render(
      <MemoryRouter initialEntries={['/test']}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/test" element={<TestComponent />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByTestId('outlet-content')).toBeInTheDocument();
    expect(screen.getByText(/test content/i)).toBeInTheDocument();
  });
});
