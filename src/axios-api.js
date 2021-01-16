import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const token = 'c512c0f1b2cc62b45be1ff9f2e9cb4332bd9';
export const axiosApi = axios.create({
  baseURL: 'https://wooliesxfechallenge.azurewebsites.net/',
});
