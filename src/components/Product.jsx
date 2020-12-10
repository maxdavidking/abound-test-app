import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.h2`
  font-size: 2rem;
`;

const Product = ({ data }) => (
  <>
    <Header>{data.gsx$name.$t}</Header>
    <div>{data.gsx$description.$t}</div>
    {/* Price should be displayed in format $xx.xx */}
    <div>{data.gsx$priceincents.$t}</div>
    {/* Availability should determine if an item can be added to cart */}
    <div>{data.gsx$availability.$t}</div>
  </>
);

Product.propTypes = {
  data: PropTypes.instanceOf(Array)
};

Product.defaultProps = {
  data: []
};

export default Product;
