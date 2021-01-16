import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// import AddCartButton from './AddCartButton';

const CartTableItemWrapper = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #126c34;
`;

const CartTableItemName = styled.div`
  width: 25%;
`;

const CartTableItemPrice = styled.div`
  width: 25%;
`;

const CartTableItemQuantity = styled.div`
  width: 25%;
`;

const CartTableItem = ({ product }) => (
  <CartTableItemWrapper>
    <CartTableItemName>
      {product.name}
    </CartTableItemName>
    <CartTableItemPrice>
      {product.audPrice}
    </CartTableItemPrice>
    <CartTableItemQuantity>
      {product.quantity}
    </CartTableItemQuantity>
    {/* <AddCartButton product={product} /> */}
  </CartTableItemWrapper>
);

CartTableItem.propTypes = {
  product: PropTypes.object,
};

CartTableItem.defaultProps = {
  product: {},
};

export default CartTableItem;
