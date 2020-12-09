import React from 'react';
import { render, screen } from '@testing-library/react';
import Products from '../components/Products';

it('renders the header content', () => {
  render(<Products />);
  const element = screen.getByText(/products/i);
  expect(element).toBeInTheDocument();
});
