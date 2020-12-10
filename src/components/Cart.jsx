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

  > div {
    margin: 0.5rem;
  }
`;

const Cart = ({ cartContents, removeFromCart }) => {
  const totalCost = () => {
    const allPrices = cartContents.map((item) => item.price);
    const costInCents = allPrices.reduce((a, b) => a + parseInt(b, 10), 0);
    const costInDollars = (costInCents / 100).toFixed(2);
    const formattedCost = costInDollars ? ` $ ${costInDollars}` : ' N/A';
    return formattedCost;
  };

  const removeItemFromCart = (id) => removeFromCart(cartContents.filter((item) => item.id !== id));

  return (
    <Container>
      <h1>Cart</h1>
      {cartContents.map((item) => (
        <ItemContainer key={item.id}>
          <div>{item.name}</div>
          <div>{(item.price / 100).toFixed(2)}</div>
          <button type="button" onClick={() => removeItemFromCart(item.id)}>
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
