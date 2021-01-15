import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductList from '../components/ProductList';

const HomeWrapper = styled.div`
`;

const Home = ({ products }) => {
  console.log('xxxxx', products);

  return (
    <HomeWrapper>
      <ProductList products={products} />
    </HomeWrapper>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

Home.propTypes = {
  products: PropTypes.object,
};

Home.defaultProps = {
  products: {},
};

export default connect(mapStateToProps, null)(Home);
