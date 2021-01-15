import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AddCartButtonWrapper = styled.div`
  width: 100%;
`;

const AddCartButton = ({ product }) => {
  console.log('product', product);

  return (
    <AddCartButtonWrapper>
      BUTTON GROUP
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
