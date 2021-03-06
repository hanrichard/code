import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { priceFormat } from '../utility/priceFormat';

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
  const calcValue = cart.products.reduce((total, currentItem) => total + (currentItem.audPrice * currentItem.quantity), 0);
  const amout = cart.products.length > 0 ? priceFormat(calcValue) : '$0';

  return (
    <CartWrapper>
      <ShoppingCartIcon />
      <CartInfo>
        <Typography variant="body1" component="p">Your cart</Typography>
        <Typography variant="body1" component="span">
          {amout}
        </Typography>
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
