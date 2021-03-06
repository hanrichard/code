import * as actionTypes from './actionTypes';
import { axiosApi, token, header } from '../../axios-api';

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

export const checkoutReset = () => ({
  type: actionTypes.CHECKOUT_RESET,
});

export const checkoutFail = () => ({
  type: actionTypes.CHECKOUT_FAIL,
});

export const checkoutSuccess = (payload) => ({
  type: actionTypes.CHECKOUT_SUCCESS,
  payload,
});

export const apiError = () => ({
  type: actionTypes.TOKEN_ERROR,
});

export const checkout = (data) => (dispatch) => {
  const formatedData = JSON.stringify(data);
  axiosApi.post(`/api/v1/resources/checkout?token=${token}`, formatedData, header)
    .then((response) => {
      dispatch(checkoutSuccess(response.data));
    })
    .catch((error) => {
      if (error?.response?.data?.code === 400) {
        dispatch(checkoutFail());
      }
      if (error?.response?.data?.code === 403) {
        dispatch(apiError());
      }
    });
};
