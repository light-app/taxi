import axios from "axios";
import { BASE_URL } from "./consts";
import { version } from "../../package.json";

import profileAPI from "./profileAPI";

axios.interceptors.request.use(
  async (config) => {
    return {
      ...config,
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
        "App-Version": version,
        "App-Platform": "web",
        ...config.headers,
      },
    };
  },
  (error) => {
    console.log("Request", { url: config.url, ...config.headers });

    return Promise.reject(error);
  }
);

class APIService {
  profile = profileAPI;
}

const API = new APIService();
export default API;
