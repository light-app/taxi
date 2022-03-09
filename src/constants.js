export const APP_ID = 8094554;
export const GROUP_ID = 211074684;
export const NAME_PROJECT = "taxi";
export const NAME_PROJECT_LOWER_CASE = "TAXI";
export const APP_AVATAR = "";
// ждем ссылку на картинку для шаринга в историю
export const APP_IMG_SHARING = "";
// ждем ссылку на картинку для шаринга на стену
export const APP_IMG_SHARING_WALL = "";
// публичный ключ от киви
export const QIWI_PUBLIC_KEY = "";
// получение ID пользователя который зашел в приложение
export const USER_ID = Number(
  new URLSearchParams(document.location.search).get("vk_user_id")
);
export const routeUrl =
  process.env.NODE_ENV === "production" ? "/taxi" : "";

export const vkValidationParams = globalThis.location.search;
