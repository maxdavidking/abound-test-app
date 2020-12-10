import React from 'react';
import { render, screen } from '@testing-library/react';
import Landing from '../components/Landing';

it('renders the header content', () => {
  render(<Landing />);
  const element = screen.getByText(/loading/i);
  expect(element).toBeInTheDocument();
});
