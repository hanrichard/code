import * as actionTypes from './actionTypes';
import { axiosApi, token } from '../../axios-api';

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

export const checkoutSuccess = (payload) => ({
  type: actionTypes.CHECKOUT_SUCCESS,
  payload,
});

export const checkout = () => (dispatch) => {
  axiosApi.post(`/api/v1/resources/checkout?token=${token}`)
    .then((response) => {
      console.log('xxxx', response);
      dispatch(checkoutSuccess(response.data));
    })
    .catch((error) => {
      console.log(error);
      // dispatch(fetchIngredientsFailed());
    });
};
