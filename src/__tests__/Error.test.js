import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from '../components/Error';

it('renders the header content', () => {
  render(<Error />);
  const element = screen.getByText(/error/i);
  expect(element).toBeInTheDocument();
});
