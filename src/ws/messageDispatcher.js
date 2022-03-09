import { stores } from "../contexts";
const { WsStore, UserStore } = stores;

import { toJS } from "mobx";

export const dispatchMessage = (res) => {
  console.log("dispatchMessage event", res);

  const { action, payload, status } = res;

  switch (action) {
    case "init-app":
      if (status === "success") {
        WsStore.changeWsConnectionStatus("connected");
      } else {
        WsStore.changeWsConnectionStatus("connecting");
      }
      break;
    case "get-user":
      if (status === "success") {
        UserStore.setUserInfo(payload);
      }

      break;

    default:
      break;
  }
};
