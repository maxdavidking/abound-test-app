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
`;

const Products = ({ addToCart }) => {
  const apiUrl = 'https://spreadsheets.google.com/feeds/list/1Cp0owZ_71huZOBLiX57hKTvxKYEo4qZC1y_IAHV6rX4/od6/public/values?alt=json';
  const [status, setStatus] = useState('loading');
  const [products, setProducts] = useState({});

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

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'error') {
    return <Error />;
  }

  return (
    <Container>
      <h1>Products</h1>
      {products.map((product) => (
        <Product data={product} addToCart={addToCart} />
      ))}
    </Container>
  );
};

Products.propTypes = {
  addToCart: PropTypes.func.isRequired
};

export default Products;
