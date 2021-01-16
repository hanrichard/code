import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CartTable from '../components/CartTable';

const CartWrapper = styled.div`
  background-color: #fff;
`;

const Cart = ({ cart }) => (
  <CartWrapper className="App">
    <CartTable cart={cart} />
  </CartWrapper>
);

Cart.propTypes = {
  cart: PropTypes.object,
};

Cart.defaultProps = {
  cart: {},
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(Cart);
