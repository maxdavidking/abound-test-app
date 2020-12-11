import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '../components/Loading';

it('renders the header content', () => {
  render(<Loading />);
  const element = screen.getByText(/loading/i);
  expect(element).toBeInTheDocument();
});
