import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CartTableItem from './CartTableItem';
import { priceFormat } from '../utility/priceFormat';

const CartTableWrapper = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 20px;
`;

const CartTotal = styled.div`
  width: 100%;
  padding: 10px;
  text-align: right;
`;

const CartInfo = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #126c34;
`;

const CartInfoItem = styled.div`
  width :25%;
`;

const CartTableItemDelete = styled.div`
  width: 10%;
`;

const CartTableItemButtonGroup = styled.div`
  width: 15%;
`;

const CartCheckoutButton = styled.div`
  text-align: right;
  margin-top: 50px;
`;

const CartTable = ({
  cart, onDeleteCart, onCheckout,
}) => {
  const displayCart = cart.products.length > 0 && cart.products.map((product) => <CartTableItem key={product.productId} product={product} onDeleteCart={onDeleteCart} />);
  const calcValue = cart.products.reduce((total, currentItem) => total + (currentItem.audPrice * currentItem.quantity), 0);

  const handleClick = () => {
    onCheckout(cart.products);
  };
  return (
    <CartTableWrapper>
      {cart.products.length > 0 ? (
        <>
          <CartInfo>
            <CartTableItemDelete />
            <CartInfoItem>Name</CartInfoItem>
            <CartInfoItem>Price</CartInfoItem>
            <CartInfoItem>Quantity</CartInfoItem>
            <CartTableItemButtonGroup>Update</CartTableItemButtonGroup>
          </CartInfo>
          {displayCart}
          <CartTotal>
            {`Total: ${priceFormat(calcValue)}`}
          </CartTotal>
          <CartCheckoutButton>
            <Button variant="contained" onClick={handleClick}>Checkout</Button>
          </CartCheckoutButton>
        </>
      ) : (
        <Typography variant="body1">
          Please add products, go to
          {' '}
          <Link to="/">product page</Link>
        </Typography>
      )}

    </CartTableWrapper>
  );
};

CartTable.propTypes = {
  cart: PropTypes.object,
  onDeleteCart: PropTypes.func,
  onCheckout: PropTypes.func,
};

CartTable.defaultProps = {
  cart: {},
  onDeleteCart: (() => {}),
  onCheckout: (() => {}),
};

export default CartTable;
