import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import * as actions from '../store/actions/index';
import ProductList from '../components/ProductList';
import AlterMessage from '../components/AlterMessage';
import Loader from '../components/Loader';

const Home = ({ products, onInitProducts, apiStatus }) => {
  useEffect(() => {
    onInitProducts();
  }, [onInitProducts]);

  return (
    <>
      {apiStatus.error && <AlterMessage severity="error" title="Error" content="There is something wrong with your token!" />}
      <Typography variant="h3" component="h1" gutterBottom>Products</Typography>
      {products.products === 0 ? <Loader /> : <ProductList products={products} />}
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
