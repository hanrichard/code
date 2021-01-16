import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Product from './ProductItem';

const ProductListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    width: calc(100% + 20px);
    margin-left: -10px;
    margin-right: -10px; 
  }
`;

const ProductList = ({ products }) => {
  console.log(products);
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
