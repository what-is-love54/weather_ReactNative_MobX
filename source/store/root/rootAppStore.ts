/** @format */
import { UserStore } from '~/store';
export class AppStore {
  user = new UserStore(this);
}
