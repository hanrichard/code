import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CartTableItem from './CartTableItem';

const CartTableWrapper = styled.div`
  width: 100%;
  padding: 10px;
`;

const CartTotal = styled.div`
  width: 100%;
  padding: 10px;
  text-align: right;
`;

const CartTable = ({ cart }) => {
  const displayCart = cart.cart.length > 0 && cart.cart.map((product) => <CartTableItem key={product.productId} product={product} />);
  const calcValue = cart.cart.reduce((total, currentItem) => total + (currentItem.audPrice * currentItem.quantity), 0);

  return (
    <CartTableWrapper>
      <div>
        {displayCart}
      </div>
      <CartTotal>
        {`Total: $${calcValue}`}
      </CartTotal>
    </CartTableWrapper>
  );
};

CartTable.propTypes = {
  cart: PropTypes.object,
};

CartTable.defaultProps = {
  cart: {},
};

export default CartTable;
