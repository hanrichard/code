import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CartWrapper = styled.div`
  border: 1px solid black;
`;

const Cart = () => (
  <CartWrapper>
    <Link to="/cart">
      cart
    </Link>
  </CartWrapper>
);

export default Cart;
