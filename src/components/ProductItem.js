import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AddCartButton from './AddCartButton';

const ProductItemWrapper = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 33%;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`;

const ProductItemInner = styled.div`
  border: 1px solid black;
  padding: 10px;
`;

const ProductItemImage = styled.div`
  border: 1px solid black;
`;

const ProductItem = ({ product }) => (
  <ProductItemWrapper>
    <ProductItemInner>
      <ProductItemImage>
        this is image placeholder
      </ProductItemImage>
      <div>
        {product.name}
      </div>
      <div>
        {product.audPrice}
      </div>
      <div>
        {product.description}
      </div>
      <div>
        <AddCartButton />
      </div>
      <div />
    </ProductItemInner>
  </ProductItemWrapper>
);

ProductItem.propTypes = {
  product: PropTypes.object,
};

ProductItem.defaultProps = {
  product: {},
};

export default ProductItem;
