import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectDisplay } from './ProjectDisplay';

jest.mock('../../Assets/projects.json', () => [
  {
    link: "https://example.com",
    title: "Portfolio Site",
    tech: "React, JavaScript",
    description: "This is a test project"
  },
  {
    link: "https://example.com",
    title: "Another Project",
    tech: "React, JavaScript",
    description: "This is another test project"
  }
]);

window.HTMLElement.prototype.scrollTo = () => {};


describe('ProjectDisplay component', () => {
    test('renders without crashing', () => {
      const { container } = render(<ProjectDisplay />);
      expect(screen.queryAllByText("This is a test project").length).toBeGreaterThan(0);
      expect(screen.queryAllByText("This is another test project").length).toBeGreaterThan(0);
    });
  });