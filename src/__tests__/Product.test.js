import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from '../components/Product';

it('renders the header content', () => {
  render(<Product />);
  const element = screen.getByText(/product/i);
  expect(element).toBeInTheDocument();
});
