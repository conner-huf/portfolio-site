import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('About component', () => {
  test('renders without crashing', () => {
    render(<Footer />);
  });
});