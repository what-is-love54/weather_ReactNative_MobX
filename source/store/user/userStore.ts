/** @format */
import { action, computed, makeObservable } from 'mobx';
import { User } from '~/models';
import { IUser } from '~/types';
import { AppStore } from '~/store';

export class UserStore {
  userStoreMap = new Map<number, User>();

  constructor(private store: AppStore) {
    makeObservable(this);
  }

  @action load(user: any) {
    // user.forEach(item =>
    //   this.forecast.set(item.location.lat, new User(this.store, item)),
    // );
    // this.userStoreMap.set
    console.log('====--------->>> user', user);
  }

  @computed get all() {
    return Array.from(this.userStoreMap.values());
  }
}
