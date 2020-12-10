import React, { useState } from 'react';
import styled from 'styled-components';
import Products from './Products';
import Cart from './Cart';

const Container = styled.div`
  display: flex;
  margin: 2rem;
  justift-content: space-around;
`;

const Landing = () => {
  const [cartContents, setCartContents] = useState([]);
  return (
    <Container>
      <Products cartContents={cartContents} addToCart={setCartContents} />
      <Cart cartContents={cartContents} removeFromCart={setCartContents} />
    </Container>
  );
};

export default Landing;
