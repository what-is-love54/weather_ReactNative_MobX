/** @format */

import { AxiosResponse } from 'axios';
// common
import apiClient from '~/services/api';
import { WeatherResponse } from '~/models';

export class UserApi {
  static async getWeather(
    country: string,
  ): Promise<AxiosResponse<WeatherResponse>> {
    return apiClient.get<WeatherResponse>('', {
      params: { q: country, days: '3' },
    });
  }
}
