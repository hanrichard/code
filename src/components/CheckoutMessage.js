import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ApiErrorMessage from './ApiErrorMessage';

const CheckoutWrapper = styled.div`
  width: 100%;
  background-color: #fff;
`;

const CheckoutMessage = ({ cart }) => {
  const showCheckoutSuccess = cart.checkout_success;
  const showCheckoutError = cart.checkout_error;
  return cart.products.length > 0 && (
    <CheckoutWrapper>
      {showCheckoutError && <ApiErrorMessage severity="error" title="Error" content="This is an error alert, your order has been declined!" /> }
      {showCheckoutSuccess && <ApiErrorMessage severity="success" title="success" content="This is a success alert, your order has been confirmed!" /> }
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
