import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Logo from '../components/Logo';
import Cart from '../components/Cart';

const HeaderWrapper = styled.div`
  background-color: #125430;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = ({ cart }) => {
  console.log('xxxx', cart);

  return (
    <HeaderWrapper>
      <Logo />
      <Cart cart={cart} />
    </HeaderWrapper>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

Header.propTypes = {
  cart: PropTypes.object,
};

Header.defaultProps = {
  cart: {},
};

export default connect(mapStateToProps, null)(Header);
