/** @format */
import { makeAutoObservable } from 'mobx';

export class UserStore {
  userWeatherCurrent: any;
  userWeatherLocation = {};
  userWeatherForecast = {};

  constructor() {
    makeAutoObservable(this);
  }

  load(weather: any) {
    this.userWeatherCurrent = weather.current;
    this.userWeatherLocation = weather.location;
    this.userWeatherForecast = weather.forecast;
  }

  get all() {
    return this.userWeatherCurrent;
  }
}

export const userStore = new UserStore();
