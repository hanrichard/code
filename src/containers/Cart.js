import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

import CheckoutMessage from '../components/CheckoutMessage';
import CartTable from '../components/CartTable';

const CartWrapper = styled.div`
`;

const Cart = ({ cart, onDeleteCart, onCheckout }) => (
  <CartWrapper>
    <CartTable
      cart={cart}
      onDeleteCart={(product) => onDeleteCart(product)}
      onCheckout={(product) => onCheckout(product)} />
    <CheckoutMessage cart={cart} />
  </CartWrapper>
);
Cart.propTypes = {
  cart: PropTypes.object,
  onDeleteCart: PropTypes.func,
  onCheckout: PropTypes.func,
};

Cart.defaultProps = {
  cart: {},
  onDeleteCart: (() => {}),
  onCheckout: (() => {}),
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteCart: (item) => dispatch(actions.deleteCart(item)),
  onCheckout: (item) => dispatch(actions.checkout(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
