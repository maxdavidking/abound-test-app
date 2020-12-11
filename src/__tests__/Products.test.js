import React from 'react';
import { render, screen } from '@testing-library/react';
import Products from '../components/Products';

it('renders the header content', () => {
  render(<Products addToCart={() => {}} cartContents={[]} />);
  const element = screen.getByText(/loading/i);
  expect(element).toBeInTheDocument();
});
