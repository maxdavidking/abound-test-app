import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../styles/styleVars';

// Availability should control different CSS props
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.lightBlue};
  margin: 1rem;
  padding: 1rem;
  border-radius: 30px;
`;

const ProductInformation = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 75%;
`;

const Button = styled.button`
  background-color: ${colors.lightPink};
  border: 1px solid ${colors.black};
  border-radius: 3px;
  flex: 0 1 auto;
  align-self: center;
  height: 3rem;
`;

const Product = ({ data, addToCart }) => (
  <Container>
    <ProductInformation>
      <h2>{data.gsx$name.$t}</h2>
      <div>{data.gsx$description.$t}</div>
      {/* Price should be displayed in format $xx.xx */}
      <div>{data.gsx$priceincents.$t}</div>
      {/* Availability should determine if an item can be added to cart */}
      <div>{data.gsx$availability.$t}</div>
    </ProductInformation>
    <Button onClick={addToCart()}> Add to Cart </Button>
  </Container>
);

Product.propTypes = {
  data: PropTypes.instanceOf(Array),
  addToCart: PropTypes.func.isRequired
};

Product.defaultProps = {
  data: []
};

export default Product;
