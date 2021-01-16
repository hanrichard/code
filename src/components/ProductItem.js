import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AddCartButton from './AddCartButton';

const ProductItemWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 0 10px 10px;

  @media (min-width: 768px) {
    width: 33%;
    min-height: 300px;
  }

  @media (min-width: 1024px) {
    width: 25%;
  }
`;

const ProductItemInner = styled.div`
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductItemImage = styled.img`
  margin-bottom: 10px;
  width: 100%;
`;

const ProductItemGroup = styled.div`
  margin-bottom: 10px;
  padding: 10px;
`;

const ProductItemName = styled.div`
  margin-bottom: 10px;
`;

const ProductItemPrice = styled.div`
  margin-bottom: 10px;
`;

const ProductItemDescription = styled.div`
  margin-bottom: 10px;
`;

const ProductItemCartButtonGroup = styled.div`
  padding: 10px;
`;

const ProductItem = ({ product }) => {
  const productPrice = () => (
    <span>
      <span>$</span>
      {product.audPrice}
    </span>
  );

  return (
    <ProductItemWrapper>
      <ProductItemInner>
        <ProductItemGroup>
          <ProductItemImage src="https://via.placeholder.com/300x100?text=Image+Placeholder" alt="img placeholder" />
          <ProductItemName>
            {product.name}
          </ProductItemName>
          <ProductItemPrice>
            {product.stockOnHand !== 0 ? productPrice() : 'Out of stock'}
          </ProductItemPrice>
          <ProductItemDescription>
            {product.description}
          </ProductItemDescription>
        </ProductItemGroup>
        <ProductItemCartButtonGroup>
          <AddCartButton product={product} />
        </ProductItemCartButtonGroup>
      </ProductItemInner>
    </ProductItemWrapper>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

ProductItem.defaultProps = {
  product: {},
};

export default ProductItem;
