import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import Product from './Product';
import Loading from './Loading';
import Error from './Error';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  flex: 0 1 75%;
`;

const Products = ({ addToCart, cartContents }) => {
  // TODO: Should put apiUrl into env var
  const apiUrl = 'https://spreadsheets.google.com/feeds/list/1Cp0owZ_71huZOBLiX57hKTvxKYEo4qZC1y_IAHV6rX4/od6/public/values?alt=json';
  // Default state in state machine is 'loading'
  const [status, setStatus] = useState('loading');
  const [products, setProducts] = useState([]);

  // Get data from endpoint provided by abound
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data.feed.entry);
        setStatus('');
      })
      .catch(() => {
        setStatus('error');
      });
  }, []);

  // Early return if loading
  if (status === 'loading') {
    return <Loading />;
  }

  // Early return if error
  if (status === 'error') {
    return <Error />;
  }

  // Map through array of content and render
  return (
    <Container>
      <h1>Products</h1>
      {products.map((product) => (
        <Product
          key={product.id.$t}
          data={product}
          addToCart={addToCart}
          cartContents={cartContents}
        />
      ))}
    </Container>
  );
};

Products.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cartContents: PropTypes.instanceOf(Array)
};

Products.defaultProps = {
  cartContents: []
};

export default Products;
