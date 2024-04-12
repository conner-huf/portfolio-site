import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './Navbar';

describe('Navbar component', () => {
  test('renders without crashing', () => {
    render(<Router><Navbar /></Router>);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Resume")).toBeInTheDocument();
  });
});