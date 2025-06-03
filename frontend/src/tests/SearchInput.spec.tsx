import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from '@/components/SearchInput';

describe('SearchInput', () => {
  const setup = () => {
    const handleChange = jest.fn();
    const handleSearch = jest.fn();

    render(<SearchInput value="test" onChange={handleChange} onSearch={handleSearch} />);

    const input = screen.getByPlaceholderText(/search with product name/i) as HTMLInputElement;
    const button = screen.getByRole('button', { name: /search/i });

    return { input, button, handleChange, handleSearch };
  };

  it('renders input and button correctly', () => {
    const { input, button } = setup();

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input.value).toBe('test');
  });

  it('calls onChange when input value changes', () => {
    const { input, handleChange } = setup();

    fireEvent.change(input, { target: { value: 'updated' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('calls onSearch when button is clicked', () => {
    const { button, handleSearch } = setup();

    fireEvent.click(button);
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});
