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

  constructor() {
    makeAutoObservable(this);
  }

  async loadWeather(location: string) {
    try {
      const response = await UserApi.getWeather(location);

      this.setWeather(response.data);
    } catch (e) {
      console.log('==--> ERROR <--==', e);
    }
  }

  setWeather(data: IUserWeather) {
    this.userWeatherCurrent = data.current;
    this.userWeatherForecast = data.forecast;
    this.userWeatherLocation = data.location;
  }
}
