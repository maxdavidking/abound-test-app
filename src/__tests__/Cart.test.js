import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart';

it('renders the Cart header content', () => {
  render(<Cart cartContents={[]} removeFromCart={() => {}} />);
  const element = screen.getByText(/Cart is empty!/i);
  expect(element).toBeInTheDocument();
});
