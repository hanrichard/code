import * as actionTypes from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const addToCart = (payload) => ({
  type: actionTypes.ADD_CART,
  payload,
});
