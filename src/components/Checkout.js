import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Alert, AlertTitle } from '@material-ui/lab';

const CheckoutWrapper = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #fff;
`;

const CheckoutMessage = styled.div`
  margin-top: 50px;
`;

const Checkout = ({ cart }) => {
  const handleClick = () => {
    console.log('xx');
  };
  return cart.cart.length > 0 && (
    <CheckoutWrapper>
      <Button variant="contained" onClick={handleClick}>Checkout</Button>
      <CheckoutMessage>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert —
          {' '}
          <strong>check it out!</strong>
        </Alert>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert —
          {' '}
          <strong>check it out!</strong>
        </Alert>
      </CheckoutMessage>
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
