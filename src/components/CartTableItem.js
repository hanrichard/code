import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCartButton from './AddCartButton';

const CartTableItemWrapper = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #126c34;
  align-items: center;
`;

const CartTableItemDelete = styled.div`
  width: 10%;
`;

const CartTableItemName = styled.div`
  width: 25%;
`;

const CartTableItemPrice = styled.div`
  width: 25%;
`;

const CartTableItemQuantity = styled.div`
  width: 25%;
`;

const CartTableItemButtonGroup = styled.div`
  width: 15%;
`;

const CartTableItem = ({ product, onDeleteCart }) => {
  const handleDelete = () => {
    onDeleteCart(product);
  };

  return (
    <CartTableItemWrapper>
      <CartTableItemDelete>
        <Button
          onClick={() => handleDelete(product)}
          variant="contained"
          startIcon={<DeleteIcon />} />
      </CartTableItemDelete>
      <CartTableItemName>
        {product.name}
      </CartTableItemName>
      <CartTableItemPrice>
        {`$${product.audPrice}`}
      </CartTableItemPrice>
      <CartTableItemQuantity>
        {product.quantity}
      </CartTableItemQuantity>
      <CartTableItemButtonGroup>
        <AddCartButton product={product} />
      </CartTableItemButtonGroup>
    </CartTableItemWrapper>
  );
};

CartTableItem.propTypes = {
  product: PropTypes.object,
  onDeleteCart: PropTypes.func,
};

CartTableItem.defaultProps = {
  product: {},
  onDeleteCart: (() => {}),
};

export default CartTableItem;
