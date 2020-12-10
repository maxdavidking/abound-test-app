import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

it('renders the header content', () => {
  render(<App />);
  const linkElement = screen.getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
