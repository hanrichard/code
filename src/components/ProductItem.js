import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProductItemWrapper = styled.div`
  border: 1px solid black;
`;

const ProductItem = ({ product }) => (
  <ProductItemWrapper>
    <div>
      {product.name}
    </div>
    <div>
      {product.audPrice}
    </div>
    <div>
      {product.description}
    </div>
    <div />
  </ProductItemWrapper>
);

ProductItem.propTypes = {
  product: PropTypes.object,
};

ProductItem.defaultProps = {
  product: {},
};

export default ProductItem;
