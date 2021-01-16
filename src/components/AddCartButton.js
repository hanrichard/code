import React from 'react';
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

  return (
    <AddCartButtonWrapper>
      <CustomButton
        variant="contained"
        startIcon={<RemoveIcon />} />
      <AddCartQuantity>
        {stockOnHandNum}
      </AddCartQuantity>
      <CustomButton
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
