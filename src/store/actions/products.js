import * as actionTypes from './actionTypes';
import axios from '../../axios-api';

export const setIngredients = (payload) => ({
  type: actionTypes.FETCH_PRODUCTS,
  payload,
});

export const initProducts = () => (dispatch) => {
  axios.get('https://wooliesxfechallenge.azurewebsites.net/api/v1/resources/products?token=c512c0f1b2cc62b45be1ff9f2e9cb4332bd9')
    .then((response) => {
      dispatch(setIngredients(response.data));
    })
    .catch((error) => {
      console.log(error);
      // dispatch(fetchIngredientsFailed());
    });
};
