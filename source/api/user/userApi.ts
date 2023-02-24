/** @format */

import { userStore } from '~/store';
import { apiService } from '~/services';

export class UserApi {
  async getWeather(country: string) {
    const res = await apiService.client.get('', {
      params: { q: country, days: '3' },
    });

    userStore.load(res.data);
  }
}

export const userAPI = new UserApi();
