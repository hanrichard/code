import * as actionTypes from './actionTypes';
import { axiosApi, token } from '../../axios-api';

export const setIngredients = (payload) => ({
  type: actionTypes.FETCH_PRODUCTS,
  payload,
});

export const initProducts = () => (dispatch) => {
  axiosApi.get(`/api/v1/resources/products?token=${token}`)
    .then((response) => {
      dispatch(setIngredients(response.data));
    })
    .catch((error) => {
      console.log(error);
      // dispatch(fetchIngredientsFailed());
    });
};
