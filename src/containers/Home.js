import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductList from '../components/ProductList';

const HomeWrapper = styled.div`
  padding-top: 50px;
`;

const Home = ({ products }) => (
  <HomeWrapper>
    <ProductList products={products} />
  </HomeWrapper>
);

const mapStateToProps = (state) => ({
  products: state.products,
});

Home.propTypes = {
  products: PropTypes.object,
};

Home.defaultProps = {
  products: {},
};

export default connect(mapStateToProps, null)(Home);
