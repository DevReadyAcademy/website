```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App.jsx';

// Mock child components
jest.mock('../src/components/Header.jsx', () => {
  return function MockHeader() {
    return <div data-testid="header">Header Component</div>;
  };
});

jest.mock('../src/components/Hero.jsx', () => {
  return function MockHero() {
    return <div data-testid="hero">Hero Component</div>;
  };
});

jest.mock('../src/components/Pillars.jsx', () => {
  return function MockPillars() {
    return <div data-testid="pillars">Pillars Component</div>;
  };
});

jest.mock('../src/components/CallToAction.jsx', () => {
  return function MockCallToAction() {
    return <div data-testid="cta">Call To Action Component</div>;
  };
});

jest.mock('../src/components/Footer.jsx', () => {
  return function MockFooter() {
    return <div data-testid="footer">Footer Component</div>;
  };
});

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders all main components', () => {
    render(<App />);
    
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('pillars')).toBeInTheDocument();
    expect(screen.getByTestId('cta')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('has correct component structure', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toHaveClass('App');
  });

  it('renders components in correct order', () => {
    render(<App />);
    
    const components = screen.getAllByTestId(/header|hero|pillars|cta|footer/);
    expect(components).toHaveLength(5);
    
    expect(components[0]).toHaveAttribute('data-testid', 'header');
    expect(components[1]).toHaveAttribute('data-testid', 'hero');
    expect(components[2]).toHaveAttribute('data-testid', 'pillars');
    expect(components[3]).toHaveAttribute('data-testid', 'cta');
    expect(components[4]).toHaveAttribute('data-testid', 'footer');
  });
});
```