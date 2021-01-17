import axios from 'axios';

export const token = 'c512c0f1b2cc62b45be1ff9f2e9c1b4332bd9';
export const axiosApi = axios.create({
  baseURL: 'https://wooliesxfechallenge.azurewebsites.net/',
});
export const header = {
  headers: {
    'Content-Type': 'application/json',
  },
};
