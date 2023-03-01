/** @format */
import { makeAutoObservable } from 'mobx';
import {
  IUserCurrent,
  IUserForecast,
  IUserLocation,
  IUserWeather,
} from '~/types';

class UserStore {
  userWeatherLocation: IUserLocation = {};
  userWeatherCurrent: IUserCurrent = {};
  userWeatherForecast: IUserForecast = {};

  constructor() {
    makeAutoObservable(this);
  }

  loadFirstTimeWeather(weather: IUserWeather) {
    this.userWeatherCurrent = weather.current;
    this.userWeatherForecast = weather.forecast;
    this.userWeatherLocation = weather.location;
  }
}

export const userStore = new UserStore();
