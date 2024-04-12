import React from 'react';
import { render, screen } from '@testing-library/react';
import { Main } from './Main';

describe('About component', () => {
  test('renders without crashing', () => {
    render(<Main />);
  });
});