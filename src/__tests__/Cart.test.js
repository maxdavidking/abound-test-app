import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart';

it('renders the header content', () => {
  render(<Cart />);
  const element = screen.getByText(/cart/i);
  expect(element).toBeInTheDocument();
});
