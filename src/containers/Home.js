import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../store/actions/index';
import ProductList from '../components/ProductList';

const HomeWrapper = styled.div`
  padding-top: 50px;
`;

const Home = ({ products, onInitProducts }) => {
  useEffect(() => {
    onInitProducts();
  }, [onInitProducts]);

  return (
    <HomeWrapper>
      <ProductList products={products} />
    </HomeWrapper>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  onInitProducts: () => dispatch(actions.initProducts()),
});

Home.propTypes = {
  products: PropTypes.object,
  onInitProducts: PropTypes.func,
};

Home.defaultProps = {
  products: {},
  onInitProducts: (() => {}),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
