import axios from 'axios';

// export const token = 'c512c0f1b2cc62b45be1ff9f2e9cb4332bd9';
const instance = axios.create({
  baseURL: 'https://wooliesxfechallenge.azurewebsites.net/',
});

export default instance;
