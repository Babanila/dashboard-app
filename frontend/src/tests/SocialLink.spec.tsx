import { render, screen } from '@testing-library/react';
import SocialLink from '@/components/SocialLink';

describe('SocialLink', () => {
  const props = {
    href: 'https://github.com/example',
    label: 'GitHub',
    path: 'M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12...',
    iconSize: 6,
  };

  it('renders the link with correct href and label', () => {
    render(<SocialLink {...props} />);
    const link = screen.getByRole('link', { name: props.label });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', props.href);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener');
  });

  it('renders the SVG icon with correct size and path', () => {
    render(<SocialLink {...props} />);
    const svg = screen.getByLabelText(props.label).querySelector('svg');

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svg?.getAttribute('class')).toContain(`w-${props.iconSize}`);
    expect(svg?.querySelector('path')).toHaveAttribute('d', props.path);
  });
});
