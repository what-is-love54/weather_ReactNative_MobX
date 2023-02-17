/** @format */

export type ILocation = {
  name: string;
  country: string;
  lat: number;
};

export interface IUser {
  location: ILocation;
  current: object;
  forecast: object;
}
