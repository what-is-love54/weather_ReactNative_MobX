/** @format */
import { computed, makeObservable } from 'mobx';
import { AppStore } from '~/store';
import { IUser, ILocation } from '~/types';

export class User implements IUser {
  location: ILocation;
  current: object;
  forecast: object;

  constructor(private store: AppStore, user: IUser) {
    this.location = user.location;
    this.current = user.current;
    this.forecast = user.forecast;
    makeObservable(this);
  }

  // @computed get posts() {
  //   return this.store.post.all.filter(it => it.userId === this.id);
  // }
}
