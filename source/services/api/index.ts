/** @format */

import axios from 'axios';
import { envService } from '~/services';

const apiClient = axios.create({
  withCredentials: false,
  baseURL: envService.mainApiUrl,
  timeout: 30 * 1000, // 30 sec,
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '1bb58e4127msh385c63a6e2b4962p1ef68ajsnff865420324c',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
});

// TODO: add authorization request on next time and other response
// apiClient.interceptors.request.use(config => {
//   config.headers.Authorization = `Bearer ${AsyncStorage.getItem('@token')}`;
//   return config;
// });

export default apiClient;
