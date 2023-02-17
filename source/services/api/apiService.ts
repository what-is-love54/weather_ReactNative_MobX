/** @format */

import axios from 'axios';
import { envService } from '~/services';

const axiosClient = axios.create();

axiosClient.interceptors.request.use(request => {
  return request;
});

axiosClient.interceptors.response.use(
  response => response,
  err => {
    const error = err?.response;

    !!error && console.error('INTERCEPTORS ERROR RESPONSE: ', error);

    if (error?.status === 401) {
      console.warn('ERROR 401');
    }
    return Promise.reject(err);
  },
);

export const api = (method: string, params?: any) => {
  return new Promise((resolve, reject) => {
    axiosClient({
      method,
      params,
      baseURL: envService.mainApiUrl,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '1bb58e4127msh385c63a6e2b4962p1ef68ajsnff865420324c',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    })
      .then(response => {
        return resolve(response);
      })
      .catch(error => {
        return reject(error);
      });
  });
};
