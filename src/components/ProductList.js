import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProductList = ({ products }) => {
  console.log('xxx', products);
  return (
    <div>ProductList</div>
  );
};

ProductList.propTypes = {
  products: PropTypes.object,
};

ProductList.defaultProps = {
  products: {},
};

export default ProductList;
