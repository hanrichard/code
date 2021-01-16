/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  cart: [],
};

const cartRudecer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      action.payload.quantity = 1;
      state.cart.push(action.payload);

      return {
        ...state,
      };
    case actionTypes.EMPTY_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.productId !== action.payload.productId),
      };
    case actionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => (item.productId === action.payload.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item)),
      };
    case actionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => (item.productId === action.payload.productId
          ? {
            ...item,
            quantity: item.quantity !== 1 ? item.quantity - 1 : 1,
          }
          : item)),
      };
    default:
      return state;
  }
};

export default cartRudecer;
