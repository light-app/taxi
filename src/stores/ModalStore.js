import { observable, action, makeObservable } from "mobx";

export class ModalStore {
  activeModal = null;

  setActiveModal = (type) => {
    this.activeModal = type;
  };

  resetStore = () => {
    this.activeModal = null;
  };

  constructor() {
    makeObservable(this, {
      activeModal: observable,
      setActiveModal: action,
      resetStore: action,
    });
  }
}
