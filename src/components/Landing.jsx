import React from 'react';
import styled from 'styled-components';
import Products from './Products';
import Cart from './Cart';

const Container = styled.div`
  display: flex;
`;

const Landing = () => (
  <Container>
    <Products />
    <Cart />
  </Container>
);

export default Landing;
