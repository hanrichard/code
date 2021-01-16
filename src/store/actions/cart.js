import * as actionTypes from './actionTypes';

export const addToCart = (payload) => ({
  type: actionTypes.ADD_CART,
  payload,
});

export const increaseQuantity = (payload) => ({
  type: actionTypes.INCREASE_QUANTITY,
  payload,
});

export const decreaseQuantity = (payload) => ({
  type: actionTypes.DECREASE_QUANTITY,
  payload,
});

export const deleteCart = (payload) => ({
  type: actionTypes.EMPTY_CART,
  payload,
});
