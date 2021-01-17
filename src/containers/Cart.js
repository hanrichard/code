import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

import CheckoutMessage from '../components/CheckoutMessage';
import CartTable from '../components/CartTable';
import AlterMessage from '../components/AlterMessage';

const Cart = ({
  cart, onDeleteCart, onCheckout, onCheckoutReset, apiStatus,
}) => (
  <>
    {apiStatus.error && <AlterMessage severity="error" title="Error" content="There is something wrong with your token." />}
    <CartTable
      cart={cart}
      onCheckoutReset={() => onCheckoutReset()}
      onDeleteCart={(product) => onDeleteCart(product)}
      onCheckout={(product) => onCheckout(product)} />
    <CheckoutMessage cart={cart} />
  </>
);
Cart.propTypes = {
  apiStatus: PropTypes.object,
  cart: PropTypes.object,
  onDeleteCart: PropTypes.func,
  onCheckout: PropTypes.func,
  onCheckoutReset: PropTypes.func,
};

Cart.defaultProps = {
  cart: {},
  apiStatus: {},
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
