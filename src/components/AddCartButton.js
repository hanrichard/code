import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

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

const AddCartButton = ({ product }) => {
  const stockOnHandNum = product.stockOnHand;
  const [number, setNumber] = useState(0);
  const [buttonMinusDisabled, setButtonMinusDisabled] = useState(false);
  const [buttonPlusDisabled, setButtonPlusDisabled] = useState(false);

  useEffect(() => {
    if (stockOnHandNum === 0) {
      setButtonMinusDisabled(true);
      setButtonPlusDisabled(true);
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

  return (
    <AddCartButtonWrapper>
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
    </AddCartButtonWrapper>
  );
};

AddCartButton.propTypes = {
  product: PropTypes.object,
};

AddCartButton.defaultProps = {
  product: {},
};

export default AddCartButton;
