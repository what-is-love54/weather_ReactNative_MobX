/** @format */
import { makeAutoObservable } from 'mobx';
import {
  IUserCurrent,
  IUserForecast,
  IUserLocation,
  IUserWeather,
} from '~/models';
import { UserApi } from '~/api';

export default class UserStore {
  userWeatherLocation = {} as IUserLocation;
  userWeatherCurrent = {} as IUserCurrent;
  userWeatherForecast = {} as IUserForecast;
  userWeatherLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUserWeatherLoading(load: boolean) {
    this.userWeatherLoading = load;
  }

  setWeather(data: IUserWeather) {
    this.userWeatherCurrent = data.current;
    this.userWeatherForecast = data.forecast;
    this.userWeatherLocation = data.location;
  }

  async loadWeather(location: string) {
    this.setUserWeatherLoading(true);
    try {
      const response = await UserApi.getWeather(location);

      console.log(response.data.location);
      this.setWeather(response.data);
    } catch (e) {
      console.log('==--> ERROR <--==', e);
    } finally {
      this.setUserWeatherLoading(false);
    }
  }
}
