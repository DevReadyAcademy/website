```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pillars from '../src/components/Pillars.jsx';

describe('Pillars Component', () => {
  const mockPillars = [
    {
      id: 1,
      title: 'Innovation',
      description: 'Cutting-edge technology and methodologies',
      icon: 'innovation-icon'
    },
    {
      id: 2,
      title: 'Excellence',
      description: 'High-quality education and training',
      icon: 'excellence-icon'
    },
    {
      id: 3,
      title: 'Community',
      description: 'Collaborative learning environment',
      icon: 'community-icon'
    }
  ];

  it('renders without crashing', () => {
    render(<Pillars pillars={mockPillars} />);
    expect(screen.getByTestId('pillars-section')).toBeInTheDocument();
  });

  it('displays section heading', () => {
    render(<Pillars pillars={mockPillars} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/pillars|values|principles/i);
  });

  it('renders all pillar items', () => {
    render(<Pillars pillars={mockPillars} />);
    
    mockPillars.forEach(pillar => {
      expect(screen.getByText(pillar.title)).toBeInTheDocument();
      expect(screen.getByText(pillar.description)).toBeInTheDocument();
    });
  });

  it('displays pillar icons', () => {
    render(<Pillars pillars={mockPillars} />);
    
    mockPillars.forEach(pillar => {
      const icon = screen.getByTestId(`pillar-icon-${pillar.id}`);
      expect(icon).toBeInTheDocument();
    });
  });

  it('handles empty pillars array', () => {
    render(<Pillars pillars={[]} />);
    expect(screen.getByTestId('pillars-section')).toBeInTheDocument();
    expect(screen.getByText(/no pillars available/i)).toBeInTheDocument();
  });

  it('handles undefined pillars prop', () => {
    render(<Pillars />);
    expect(screen.getByTestId('pillars-section')).toBeInTheDocument();
  });

  it('has proper grid layout', () => {
    render(<Pillars pillars={mockPillars} />);
    const pillarsGrid = screen.getByTestId('pillars-grid');
    expect(pillarsGrid).toHaveClass('grid');
  });

  it('each pillar has correct structure', () => {
    render(<Pillars pillars={mockPillars} />);
    
    mockPillars.forEach(pillar => {
      const pillarElement = screen.getByTestId(`pil