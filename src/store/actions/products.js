import * as actionTypes from './actionTypes';
import { axiosApi, token } from '../../axios-api';

export const setProducts = (payload) => ({
  type: actionTypes.FETCH_PRODUCTS,
  payload,
});

export const apiError = () => ({
  type: actionTypes.TOKEN_ERROR,
});

export const initProducts = () => (dispatch) => {
  axiosApi.get(`/api/v1/resources/products?token=${token}`)
    .then((response) => {
      dispatch(setProducts(response.data));
    })
    .catch((error) => {
      if (error) {
        dispatch(apiError());
      }
    });
};
