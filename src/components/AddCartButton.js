import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const AddCartButtonWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const AddCartQuantity = styled.div`
  margin: 0 10px;
`;

const AddCartButton = ({ product }) => {
  console.log('product', product.stockOnHand);

  return (
    <AddCartButtonWrapper>
      <Button
        variant="contained"
        startIcon={<RemoveIcon />} />
      <AddCartQuantity>total</AddCartQuantity>
      <Button
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
