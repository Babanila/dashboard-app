import { render, screen } from '@testing-library/react';
import Tile from '@/components/Tile';

describe('Tile', () => {
  it('renders the title and description', () => {
    render(<Tile title="Test Title" description="This is a test description." />);

    expect(screen.getByText(/test title/i)).toBeInTheDocument();
    expect(screen.getByText(/this is a test description/i)).toBeInTheDocument();
  });

  it('renders custom ReactNode elements as title and description', () => {
    render(
      <Tile
        title={<h3 data-testid="custom-title">My Custom Title</h3>}
        description={<p data-testid="custom-desc">Detailed description here</p>}
      />,
    );

    expect(screen.getByTestId('custom-title')).toHaveTextContent('My Custom Title');
    expect(screen.getByTestId('custom-desc')).toHaveTextContent('Detailed description here');
  });
});
