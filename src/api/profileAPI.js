import axios from "axios";
import { SocketManager } from "../utils";

class ProfileAPI {
  getProfileInfo = (userId) => {
    return axios.get(`/users/${userId}`);
  };

  // updateSkill = (params) => {
  //   return axios.post("/api.user.upgrade_skill", params);
  // };

  // getUserHistory = (userId) => {
  //   return axios.post("/api.user.get_history", { user_uuid: userId });
  // };

  // userStealIq = (userId, fromId) => {
  //   return axios.post("/api.user.steal_iq", {
  //     user_uuid: userId,
  //     from_uuid: fromId,
  //   });
  // };
}

const profileAPI = new ProfileAPI();
export default profileAPI;
