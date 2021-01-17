import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../store/actions/index';
import ProductList from '../components/ProductList';

const Home = ({ products, onInitProducts }) => {
  useEffect(() => {
    onInitProducts();
  }, [onInitProducts]);

  return <ProductList products={products} />;
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
