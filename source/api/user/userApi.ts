/** @format */

import { AppStore } from '~/store';
import { ApiService } from '~/services';

export class UserApi {
  constructor(private api: ApiService, private store: AppStore) {}

  async getWeather(country: string) {
    const res = await this.api.client.get('', {
      params: { q: country, days: '3' },
    });

    console.log('====--------->>> res', res);
    this.store.user.load(res.data);
  }
}
