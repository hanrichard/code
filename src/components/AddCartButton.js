import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import * as actions from '../store/actions/index';

const AddCartButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #c3c7c9;
  border-radius: 25px;
  height: 36px;
  overflow: hidden;
`;

const AddCartQuantity = styled.div`
  margin: 0 auto;
`;

const CustomButton = styled(Button)`
  && {
    background-color: #125430;
    color: #fff;

    span {
      margin: 0;
    }
  }
`;

const CustomAddButton = styled(Button)`
  && {
    background-color: #125430;
    color: #fff;
    width: 100%;

    &:disabled,
    &[disabled]{
      border: 1px solid #999999;
      background-color: #cccccc;
      color: #666666;
    }
  }
`;

const AddCartButton = ({
  product, onAddToCart, cart, onDecreaseQuantity, onIncreaseQuantity, onDeleteCart, onCheckoutReset,
}) => {
  const defaultNumber = cart.products.find(((item) => item.productId === product.productId))?.quantity || 0;
  const stockOnHandNum = product.stockOnHand;
  const [number, setNumber] = useState(defaultNumber);
  const [buttonMinusDisabled, setButtonMinusDisabled] = useState(false);
  const [buttonPlusDisabled, setButtonPlusDisabled] = useState(false);
  const [buttonAddDisabled, setButtonAddDisabled] = useState(false);

  useEffect(() => {
    if (stockOnHandNum === 0) {
      setButtonMinusDisabled(true);
      setButtonPlusDisabled(true);
      setButtonAddDisabled(true);
    } else if (number + 1 > stockOnHandNum) {
      setButtonPlusDisabled(true);
    } else if (number - 1 < 0) {
      setButtonMinusDisabled(true);
    } else {
      setButtonMinusDisabled(false);
      setButtonPlusDisabled(false);
    }
  }, [number, stockOnHandNum]);

  const handleMinusClick = () => {
    const calcNum = number - 1 < 0 ? 0 : number - 1;
    setNumber(calcNum);
    onDecreaseQuantity(product);
    onCheckoutReset();

    if (calcNum === 0) {
      onDeleteCart(product);
    }
  };

  const handlePlusClick = () => {
    const calcNum = number + 1 > stockOnHandNum ? stockOnHandNum : number + 1;
    setNumber(calcNum);
    onIncreaseQuantity(product);
    onCheckoutReset();
  };

  const handleAdd = () => {
    onAddToCart(product);
    setNumber(1);
    onCheckoutReset();
  };

  return (
    <AddCartButtonWrapper>
      {number > 0 ? (
        <>
          <CustomButton
            disabled={buttonMinusDisabled}
            onClick={() => handleMinusClick(product)}
            variant="contained"
            startIcon={<RemoveIcon />} />
          <AddCartQuantity>
            {number}
          </AddCartQuantity>
          <CustomButton
            disabled={buttonPlusDisabled}
            onClick={() => handlePlusClick(product)}
            variant="contained"
            startIcon={<AddIcon />} />
        </>
      )
        : (
          <CustomAddButton onClick={() => handleAdd(product)} disabled={buttonAddDisabled}>
            {buttonAddDisabled ? 'Out of stock' : 'Add'}
          </CustomAddButton>
        )}

    </AddCartButtonWrapper>
  );
};

AddCartButton.propTypes = {
  product: PropTypes.object,
  cart: PropTypes.object,
  onAddToCart: PropTypes.func,
  onDeleteCart: PropTypes.func,
  onDecreaseQuantity: PropTypes.func,
  onIncreaseQuantity: PropTypes.func,
  onCheckoutReset: PropTypes.func,
};

AddCartButton.defaultProps = {
  product: {},
  cart: {},
  onAddToCart: (() => {}),
  onDeleteCart: (() => {}),
  onDecreaseQuantity: (() => {}),
  onIncreaseQuantity: (() => {}),
  onCheckoutReset: (() => {}),
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  onAddToCart: (item) => dispatch(actions.addToCart(item)),
  onDeleteCart: (item) => dispatch(actions.deleteCart(item)),
  onDecreaseQuantity: (item) => dispatch(actions.decreaseQuantity(item)),
  onIncreaseQuantity: (item) => dispatch(actions.increaseQuantity(item)),
  onCheckoutReset: () => dispatch(actions.checkoutReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCartButton);
