import { observable, action, makeObservable } from "mobx";
// import API from "../api";

export const _tokenStorageKey = "accessToken";

export class AlertStore {
  snackbar = null;
  text = null;
  color = "green";

  setSnackbar = (type) => {
    this.activeModal = type;
  };

  resetStore = () => {
    this.loading = false;
    this.profileInfo = null;
  };

  constructor() {
    makeObservable(this, {
      snackbar: observable,
      setSnackbar: action,
      resetStore: action,
    });
  }
}
