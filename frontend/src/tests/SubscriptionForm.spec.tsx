import { render, screen, fireEvent } from '@testing-library/react';
import SubscriptionForm from '@/components/SubscriptionForm';

describe('SubscriptionForm', () => {
  it('renders heading and description', () => {
    render(<SubscriptionForm />);
    expect(screen.getByText(/Join the DASH Community/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Subscribe to our newsletter for the latest deals and trends/i),
    ).toBeInTheDocument();
  });

  it('renders email input and subscribe button', () => {
    render(<SubscriptionForm />);
    const input = screen.getByPlaceholderText(/Enter your email/i);
    const button = screen.getByRole('button', { name: /subscribe/i });

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'email');
    expect(button).toBeInTheDocument();
  });

  it('updates input value when typing', () => {
    render(<SubscriptionForm />);
    const input = screen.getByPlaceholderText(/Enter your email/i) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'test@example.com' } });

    expect(input.value).toBe('test@example.com');
  });

  it('clicks the Subscribe button without error', async () => {
    render(<SubscriptionForm />);
    const button = screen.getByRole('button', { name: /subscribe/i });

    fireEvent.click(button);

    expect(button).toBeEnabled();
  });
});
