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

const AddCartButton = ({ product, onAddToCart, cart }) => {
  console.log(cart);
  const stockOnHandNum = product.stockOnHand;
  const [number, setNumber] = useState(0);
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
  };

  const handlePlusClick = () => {
    const calcNum = number + 1 > stockOnHandNum ? stockOnHandNum : number + 1;
    setNumber(calcNum);
  };

  const handleAdd = () => {
    onAddToCart(product);
    setNumber(1);
  };

  return (
    <AddCartButtonWrapper>
      {number > 0 ? (
        <>
          <CustomButton
            disabled={buttonMinusDisabled}
            onClick={handleMinusClick}
            variant="contained"
            startIcon={<RemoveIcon />} />
          <AddCartQuantity>
            {number}
            {' '}
            - total
            {stockOnHandNum}
          </AddCartQuantity>
          <CustomButton
            disabled={buttonPlusDisabled}
            onClick={handlePlusClick}
            variant="contained"
            startIcon={<AddIcon />} />
        </>
      )
        : <CustomAddButton onClick={() => handleAdd(product)} disabled={buttonAddDisabled}>Add</CustomAddButton>}

    </AddCartButtonWrapper>
  );
};

AddCartButton.propTypes = {
  product: PropTypes.object,
  cart: PropTypes.object,
  onAddToCart: PropTypes.func,
};

AddCartButton.defaultProps = {
  product: {},
  cart: {},
  onAddToCart: (() => {}),
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  onAddToCart: (item) => dispatch(actions.addToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCartButton);
