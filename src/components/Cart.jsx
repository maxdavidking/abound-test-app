import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../styles/styleVars';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  flex: 0 1 25%;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.lightPink};
  margin: 1rem;
  padding: 1rem;
  border-radius: 30px;
`;

const Cart = ({ cartContents, removeFromCart }) => {
  const totalCost = () => {
    const allPrices = cartContents.map((item) => item.price);
    const totalPrice = allPrices.reduce((a, b) => a + parseInt(b, 10), 0);
    return ` $ ${totalPrice}`;
  };

  return (
    <Container>
      <h1>Cart</h1>
      {cartContents.map((item) => (
        <ItemContainer>
          <div>{item.name}</div>
          <div>{item.price}</div>
          <button
            type="button"
            onClick={() => removeFromCart([...cartContents, { name: '', price: '' }])}
          >
            X
          </button>
        </ItemContainer>
      ))}
      <div>
        Total:
        {totalCost()}
      </div>
    </Container>
  );
};

Cart.propTypes = {
  cartContents: PropTypes.instanceOf(Array),
  removeFromCart: PropTypes.func.isRequired
};

Cart.defaultProps = {
  cartContents: []
};

export default Cart;
