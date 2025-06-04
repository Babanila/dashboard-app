import { render, screen } from '@testing-library/react';
import Review, { DisplayReviews } from '@/components/Review';

describe('Review component', () => {
  const props = {
    reviewerName: 'John Doe',
    comment: 'Great product!',
    rating: 4,
    date: '2025-06-01',
  };

  it('renders reviewer name, comment and date correctly', () => {
    render(<Review {...props} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Great product!')).toBeInTheDocument();
    expect(screen.getByText('01/06/2025')).toBeInTheDocument(); // en-GB format
  });

  it('displays the correct number of filled stars', () => {
    render(<Review {...props} />);

    const stars = screen.getAllByRole('button');
    const filledStars = stars.filter((star) => star.className.includes('text-yellow-400'));
    const emptyStars = stars.filter((star) => star.className.includes('text-gray-300'));

    expect(filledStars.length).toBe(4);
    expect(emptyStars.length).toBe(1);
    expect(stars.length).toBe(5);
  });
});

describe('DisplayReviews', () => {
  const mockReviews = [
    {
      reviewerName: 'Alice',
      comment: 'Excellent!',
      rating: 5,
      date: '2025-06-01',
    },
    {
      reviewerName: 'Bob',
      comment: 'Pretty good',
      rating: 4,
      date: '2025-06-02',
    },
  ];

  it('renders the "Reviews" heading and all Review components', () => {
    render(<DisplayReviews reviews={mockReviews} />);

    expect(screen.getByText('Reviews')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });
});
