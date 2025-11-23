```javascript
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../src/components/Hero.jsx';

describe('Hero Component', () => {
  it('renders without crashing', () => {
    render(<Hero />);
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
  });

  it('displays main heading', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/devready|academy/i);
  });

  it('displays hero description', () => {
    render(<Hero />);
    const description = screen.getByText(/learn|develop|skills/i);
    expect(description).toBeInTheDocument();
  });

  it('contains call-to-action button', () => {
    render(<Hero />);
    const ctaButton = screen.getByRole('button', { name: /get started|learn more/i });
    expect(ctaButton).toBeInTheDocument();
  });

  it('handles CTA button click', () => {
    const mockClick = jest.fn();
    render(<Hero onCtaClick={mockClick} />);
    
    const ctaButton = screen.getByRole('button', { name: /get started|learn more/i });
    fireEvent.click(ctaButton);
    
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  it('displays hero image or video', () => {
    render(<Hero />);
    const media = screen.getByTestId('hero-media');
    expect(media).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<Hero />);
    const section = screen.getByTestId('hero-section');
    expect(section).toHaveAttribute('role', 'main');
  });

  it('contains social proof elements', () => {
    render(<Hero />);
    const socialProof = screen.getByTestId('social-proof');
    expect(socialProof).toBeInTheDocument();
  });

  it('is responsive and mobile-friendly', () => {
    render(<Hero />);
    const heroSection = screen.getByTestId('hero-section');
    expect(heroSection).toHaveClass('responsive');
  });
});
```