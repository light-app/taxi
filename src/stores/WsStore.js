import { observable, action, makeObservable } from "mobx";
import API from "../api";

export class WsStore {
  wsStatus = "disconnected";

  changeWsConnectionStatus = (status) => {
    this.wsStatus = status;
  };

  resetStore = () => {
    this.wsStatus = "disconnected";
  };

  constructor() {
    makeObservable(this, {
      resetStore: action,
      changeWsConnectionStatus: action,
      wsStatus: observable,
    });
  }
}
