import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@material-ui/lab';

const CheckoutWrapper = styled.div`
  width: 100%;
  background-color: #fff;
`;

const CheckoutMessage = ({ cart }) => {
  const showCheckoutSuccess = cart.checkout_success;
  const showCheckoutError = cart.checkout_error;
  return cart.products.length > 0 && (
    <CheckoutWrapper>
      {showCheckoutError && (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert, your order has been declined!
      </Alert>
      )}
      {showCheckoutSuccess && (
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert, your order has been confirmed!
      </Alert>
      )}
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
