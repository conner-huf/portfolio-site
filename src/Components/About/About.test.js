import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from './About';

describe('About component', () => {
  test('renders without crashing', () => {
    render(<About />);
  });
});