import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../store/actions/index';
import ProductList from '../components/ProductList';
import AlterMessage from '../components/AlterMessage';

const Home = ({ products, onInitProducts, apiStatus }) => {
  useEffect(() => {
    onInitProducts();
  }, [onInitProducts]);

  return (
    <>
      {apiStatus.error && <AlterMessage title="Error" content="There is something wrong with your token" />}
      <ProductList products={products} />
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  apiStatus: state.apiStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onInitProducts: () => dispatch(actions.initProducts()),
});

Home.propTypes = {
  apiStatus: PropTypes.object,
  products: PropTypes.object,
  onInitProducts: PropTypes.func,
};

Home.defaultProps = {
  apiStatus: {},
  products: {},
  onInitProducts: (() => {}),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
