import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

import Checkout from '../components/Checkout';
import CartTable from '../components/CartTable';

const CartWrapper = styled.div`
`;

const Cart = ({ cart, onDeleteCart }) => (
  <CartWrapper>
    <CartTable cart={cart} onDeleteCart={(product) => onDeleteCart(product)} />
    <Checkout cart={cart} />
  </CartWrapper>
);
Cart.propTypes = {
  cart: PropTypes.object,
  onDeleteCart: PropTypes.func,
};

Cart.defaultProps = {
  cart: {},
  onDeleteCart: (() => {}),
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteCart: (item) => dispatch(actions.deleteCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
