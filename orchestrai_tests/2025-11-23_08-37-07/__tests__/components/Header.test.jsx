```javascript
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../src/components/Header.jsx';

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('displays the logo', () => {
    render(<Header />);
    const logo = screen.getByAltText(/logo|devready/i);
    expect(logo).toBeInTheDocument();
  });

  it('contains navigation menu', () => {
    render(<Header />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('has responsive mobile menu toggle', () => {
    render(<Header />);
    const menuToggle = screen.getByRole('button', { name: /menu|toggle/i });
    expect(menuToggle).toBeInTheDocument();
  });

  it('toggles mobile menu when clicked', () => {
    render(<Header />);
    const menuToggle = screen.getByRole('button', { name: /menu|toggle/i });
    
    fireEvent.click(menuToggle);
    
    // Assuming mobile menu becomes visible
    const mobileMenu = screen.getByTestId('mobile-menu');
    expect(mobileMenu).toHaveClass('open');
  });

  it('contains navigation links', () => {
    render(<Header />);
    
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/courses/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  it('has correct accessibility attributes', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveAttribute('role', 'banner');
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('role', 'navigation');
  });
});
```