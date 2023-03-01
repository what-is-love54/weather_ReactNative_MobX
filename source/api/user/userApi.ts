/** @format */

import { userStore } from '~/store';
import { ApiService } from '~/services';

class UserApi {
  apiService: ApiService;
  constructor() {
    this.apiService = new ApiService();
  }
  async getWeather(country: string) {
    const res = await this.apiService.client.get('', {
      params: { q: country, days: '3' },
    });

    userStore.loadFirstTimeWeather(res.data);
  }
}

export const userAPI = new UserApi();
