import { observable, action, makeObservable } from "mobx";
import API from "../api";
import { getUserToken } from "../utils";

export class UserStore {
  loading = false;
  userInfo = null;
  groups = [];
  token = "";

  setUserInfo = (data) => {
    this.userInfo = data;
  };

  setUserGroups = (data) => {
    this.groups = data;
  };

  setUserToken = (token) => {
    this.token = token;
  };

  resetStore = () => {
    this.loading = false;
    this.userInfo = null;
  };

  constructor() {
    makeObservable(this, {
      loading: observable,
      userInfo: observable,
      groups: observable,
      token: observable,
      resetStore: action,
      setUserInfo: action,
      setUserGroups: action,
      setUserToken: action,
    });
  }
}
