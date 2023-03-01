/** @format */

export interface IUserLocation {
  name?: string;
  country?: string;
}

export interface IUserCurrent {
  temp_c?: number;
  cloud?: number;
  feelslike_c?: number;
  last_updated?: string;
  wind_kph?: number;
  condition?: any;
}

export interface IUserForecast {
  forecastday?: any;
}
