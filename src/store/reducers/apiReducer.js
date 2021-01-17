import * as actionTypes from '../actions/actionTypes';

const initialState = {
  error: false,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOKEN_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default apiReducer;
