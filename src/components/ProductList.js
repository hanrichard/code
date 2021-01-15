import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Product from './ProductItem';

const ProductListWrapper = styled.div`
  border: 1px solid black;
`;

const ProductList = ({ products }) => {
  const displayList = products.products.map((product) => (<Product key={product.productId} product={product} />));

  return (
    <ProductListWrapper>
      {displayList}
    </ProductListWrapper>
  );
};

ProductList.propTypes = {
  products: PropTypes.object,
};

ProductList.defaultProps = {
  products: {},
};

export default ProductList;
