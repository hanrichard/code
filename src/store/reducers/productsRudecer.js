import * as actionTypes from '../actions/actionTypes';

const initialState = { products: [] };

const productsRudecer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productsRudecer;
