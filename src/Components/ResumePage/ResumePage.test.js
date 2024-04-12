import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ResumePage } from './ResumePage';

describe('ResumePage', () => {
  test('renders without crashing', () => {
    render(<ResumePage />);
    expect(screen.getByText('Technical Skills')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Work Experience')).toBeInTheDocument();
  });

  test('download button is present and has correct href', () => {
    render(<ResumePage />);
    const downloadButton = screen.getByText('Download My Resume');
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton).toHaveAttribute('href', 'Resume.pdf');
  });
  
  test('hovering over sections changes the hoveredSection state', () => {
    render(<ResumePage />);
    fireEvent.mouseEnter(screen.getByTestId('tech-skill'));
    expect(screen.getByTestId('tech-skill-desc')).toHaveClass('unhovered');
    fireEvent.mouseLeave(screen.getByTestId('tech-skill'));
    expect(screen.getByTestId('tech-skill-desc')).toHaveClass('hovered');
  });

  test('hovering over sections changes the hoveredSection state', () => {
    render(<ResumePage />);
    fireEvent.mouseEnter(screen.getByTestId('edu-exp'));
    expect(screen.getByTestId('edu-exp-desc')).toHaveClass('unhovered');
    fireEvent.mouseLeave(screen.getByTestId('edu-exp'));
    expect(screen.getByTestId('edu-exp-desc')).toHaveClass('hovered');
  });

  test('hovering over sections changes the hoveredSection state', () => {
    render(<ResumePage />);
    fireEvent.mouseEnter(screen.getByTestId('work-exp'));
    expect(screen.getByTestId('work-exp-desc')).toHaveClass('unhovered');
    fireEvent.mouseLeave(screen.getByTestId('work-exp'));
    expect(screen.getByTestId('work-exp-desc')).toHaveClass('hovered');
  });
});