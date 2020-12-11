import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from '../components/Product';

it('renders the header content', () => {
  render(
    <Product
      data={{
        gsx$name: {},
        gsx$priceincents: {},
        gsx$description: {},
        gsx$availability: {}
      }}
      addToCart={() => {}}
      cartContents={[]}
    />
  );
  const element = screen.getByText(/add to cart/i);
  expect(element).toBeInTheDocument();
});
