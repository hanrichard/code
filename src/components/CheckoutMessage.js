import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@material-ui/lab';

const CheckoutWrapper = styled.div`
  width: 100%;
  background-color: #fff;
`;

const CheckoutMessage = ({ cart }) => {
  console.log('cart', cart);
  return cart.products.length > 0 && (
    <CheckoutWrapper>
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
