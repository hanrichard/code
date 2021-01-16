import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: #fff;
  padding: 5px 15px;
`;

const CartInfo = styled.div`
  padding: 0 20px;
`;

const CartLink = styled(Link)`
  color: #fff;
  font-size: 14px;
  border-radius: 20px;
  background-color: #125430;
  padding: 10px 15px;
`;

const Cart = ({ cart }) => {
  const calcValue = cart.cart.reduce((total, currentItem) => total + (currentItem.audPrice * currentItem.quantity), 0);
  const amout = cart.cart.length > 0 ? `$${calcValue.toFixed(2)}` : 0;

  return (
    <CartWrapper>
      <ShoppingCartIcon />
      <CartInfo>
        <div>Your cart</div>
        <div>
          {amout}
        </div>
      </CartInfo>
      <CartLink to="/cart">
        View cart
      </CartLink>
    </CartWrapper>
  );
};

Cart.propTypes = {
  cart: PropTypes.object,
};

Cart.defaultProps = {
  cart: {},
};

export default Cart;
