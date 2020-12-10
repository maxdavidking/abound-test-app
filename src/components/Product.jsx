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

  * {
    padding: 0.5rem;
  }
`;

const Button = styled.button`
  background-color: ${(props) => (props.outOfStock ? colors.lightRed : 'white')};
  color: ${(props) => (props.outOfStock ? 'white' : 'black')};
  flex: 0 1 auto;
  align-self: center;
  height: 3rem;
  cursor: ${(props) => (props.outOfStock ? 'not-allowed' : 'pointer')}; ;
`;

const Product = ({ data, addToCart, cartContents }) => {
  const outOfStock = data.gsx$availability.$t === 'out_of_stock';
  const formattedCurrency = `$ ${parseInt(data.gsx$priceincents.$t, 10)}`;
  const addItemToCart = () => {
    addToCart([
      ...cartContents,
      { name: data.gsx$name.$t, price: data.gsx$priceincents.$t }
    ]);
  };

  return (
    <Container>
      <ProductInformation outOfStock={outOfStock}>
        <h2>{data.gsx$name.$t}</h2>
        <div>{data.gsx$description.$t}</div>
        {/* Price should be displayed in format $xx.xx */}
        <div>{formattedCurrency}</div>
      </ProductInformation>
      <Button
        onClick={outOfStock ? () => {} : addItemToCart}
        outOfStock={outOfStock}
      >
        {outOfStock ? 'Out of Stock' : 'Add to Cart'}
      </Button>
    </Container>
  );
};

Product.propTypes = {
  data: PropTypes.instanceOf(Array),
  addToCart: PropTypes.func.isRequired,
  cartContents: PropTypes.instanceOf(Array)
};

Product.defaultProps = {
  data: [],
  cartContents: []
};

export default Product;
