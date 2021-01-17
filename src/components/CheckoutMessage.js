import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AlterMessage from './AlterMessage';

const CheckoutWrapper = styled.div`
  width: 100%;
  background-color: #fff;
`;

const CheckoutMessage = ({ cart }) => {
  console.log(cart);
  const showCheckoutSuccess = cart.checkout_success;
  const showCheckoutError = cart.checkout_error;
  return (showCheckoutSuccess || showCheckoutError) && (
    <CheckoutWrapper>
      {showCheckoutError && <AlterMessage severity="error" title="Error" content="Your order has been declined!" /> }
      {showCheckoutSuccess && <AlterMessage severity="success" title="success" content="You have successfully checked out, and your order has been confirmed!" /> }
    </CheckoutWrapper>
  );
};

CheckoutMessage.propTypes = {
  cart: PropTypes.object,
};

CheckoutMessage.defaultProps = {
  cart: {},
};

export default CheckoutMessage;
