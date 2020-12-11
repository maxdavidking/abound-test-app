import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar';

it('renders the navbar content', () => {
  render(<NavBar />);
  const element = screen.getByText(/abound/i);
  expect(element).toBeInTheDocument();
});
