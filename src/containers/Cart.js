import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

import CheckoutMessage from '../components/CheckoutMessage';
import CartTable from '../components/CartTable';

const CartWrapper = styled.div`
`;

const Cart = ({
  cart, onDeleteCart, onCheckout, onCheckoutReset,
}) => (
  <CartWrapper>
    <CartTable
      cart={cart}
      onCheckoutReset={() => onCheckoutReset()}
      onDeleteCart={(product) => onDeleteCart(product)}
      onCheckout={(product) => onCheckout(product)} />
    <CheckoutMessage cart={cart} />
  </CartWrapper>
);
Cart.propTypes = {
  cart: PropTypes.object,
  onDeleteCart: PropTypes.func,
  onCheckout: PropTypes.func,
  onCheckoutReset: PropTypes.func,
};

Cart.defaultProps = {
  cart: {},
  onDeleteCart: (() => {}),
  onCheckout: (() => {}),
  onCheckoutReset: (() => {}),
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteCart: (item) => dispatch(actions.deleteCart(item)),
  onCheckout: (item) => dispatch(actions.checkout(item)),
  onCheckoutReset: (item) => dispatch(actions.checkoutReset(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
