/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: [],
  checkout_status: false,
};

const cartRudecer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      action.payload.quantity = 1;
      state.products.push(action.payload);
      return {
        ...state,
      };
    case actionTypes.EMPTY_CART:
      return {
        ...state,
        products: state.products.filter((item) => item.productId !== action.payload.productId),
      };
    case actionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map((item) => (item.productId === action.payload.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item)),
      };
    case actionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map((item) => (item.productId === action.payload.productId
          ? {
            ...item,
            quantity: item.quantity !== 1 ? item.quantity - 1 : 1,
          }
          : item)),
      };
    case actionTypes.CHECKOUT_SUCCESS:
      return {
        ...state,
        checkout_status: true,
      };
    default:
      return state;
  }
};

export default cartRudecer;
