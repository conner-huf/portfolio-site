import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('About component', () => {
  test('renders without crashing', () => {
    render(<Hero />);
  });
});