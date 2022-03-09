// import { stores } from "../contexts";

export const wsGetUser = () => {
  globalThis.wsSend("get-user");
};
