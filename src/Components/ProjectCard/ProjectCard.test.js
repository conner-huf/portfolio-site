import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard component', () => {
  const mockProject = {
    link: "https://example.com",
    title: "Portfolio Site",
    tech: "React, JavaScript",
    description: "This is a test project"
  };

  test('renders without crashing', () => {
    render(<ProjectCard index={0} project={mockProject} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("This is a test project")).toBeInTheDocument();
    expect(screen.getByAltText("project")).toBeInTheDocument();
  });
});