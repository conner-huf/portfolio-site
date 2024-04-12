import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from './Logo';

describe('About component', () => {
  test('renders without crashing', () => {
    render(<Logo />);
  });
});