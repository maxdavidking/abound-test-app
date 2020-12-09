import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.h2`
  font-size: 2rem;
`;

const Product = ({ data }) => {
  // TODO check if empty array is falsey
  if (!data) {
    return null;
  }

  return (
    <>
      <Header>{data.gsx$name.$t}</Header>
      <div>{data.gsx$priceincents.$t}</div>
    </>
  );
};

Product.propTypes = {
  data: PropTypes.instanceOf(Array)
};

Product.defaultProps = {
  data: []
};

export default Product;
