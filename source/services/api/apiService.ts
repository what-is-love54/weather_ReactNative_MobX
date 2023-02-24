/** @format */

import axios from 'axios';
import { envService } from '~/services';

class ApiService {
  client = axios.create({
    baseURL: envService.mainApiUrl,
    timeout: 30 * 1000, // 30 sec,
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '1bb58e4127msh385c63a6e2b4962p1ef68ajsnff865420324c',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  });
}

export const apiService = new ApiService();
