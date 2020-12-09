import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Product from './Product';
import Loading from './Loading';
import Error from './Error';

const Header = styled.h2`
  font-size: 2rem;
`;

const Products = () => {
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
      })
      .then(() => {
        // always executed
      });
  }, []);

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'error') {
    return <Error />;
  }

  return (
    <>
      <Header>Products</Header>
      {products.map((product) => (
        <Product data={product} />
      ))}
    </>
  );
};

export default Products;
