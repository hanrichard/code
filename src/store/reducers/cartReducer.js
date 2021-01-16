/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  cart: [],
  numberCart: 0,
};

const cartRudecer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CART:
      // eslint-disable-next-line no-case-declarations
      const cart = {
        id: action.payload.productId,
        quantity: 1,
        name: action.payload.name,
        price: action.payload.audPrice,
      };
      state.cart.push(cart);

      return {
        ...state,
      };
    case actionTypes.INCREASE_QUANTITY:
      state.Carts[action.payload].quantity++;

      return {
        ...state,
      };
    case actionTypes.DECREASE_QUANTITY:
      // eslint-disable-next-line no-case-declarations
      const { quantity } = state.Carts[action.payload];
      if (quantity > 1) {
        state.Carts[action.payload].quantity--;
      }

      return {
        ...state,
      };
    default:
      return state;
  }
};

export default cartRudecer;
