import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CheckoutWrapper = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #fff;
`;

const Checkout = ({ cart }) => {
  console.log(123);
  return cart.cart.length > 0 && (
    <CheckoutWrapper>
      Check out
    </CheckoutWrapper>
  );
};

Checkout.propTypes = {
  cart: PropTypes.object,
};

Checkout.defaultProps = {
  cart: {},
};

export default Checkout;
