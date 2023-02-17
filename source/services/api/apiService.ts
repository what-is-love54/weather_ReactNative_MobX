/** @format */

import axios from 'axios';
import { AppStore } from '~/store';
import { envService } from '~/services';
import { UserApi } from '~/api';

export class ApiService {
  client = axios.create({
    baseURL: envService.mainApiUrl,
    timeout: 30 * 1000, // 30 sec,
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '1bb58e4127msh385c63a6e2b4962p1ef68ajsnff865420324c',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  });

  //   client.interceptors.request.use(request => {
  //   return request;
  // });
  //
  // client.interceptors.response.use(
  //   response => response,
  //   err => {
  //     const error = err?.response;
  //
  //     !!error && console.error('INTERCEPTORS ERROR RESPONSE: ', error);
  //     if (error?.status === 401) {
  //       console.warn('ERROR 401');
  //     }
  //     return Promise.reject(err);
  //   },
  // );

  user: UserApi;

  constructor(store: AppStore) {
    this.user = new UserApi(this, store);
  }
}
