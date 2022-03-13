import bridge from "@vkontakte/vk-bridge";
import { APP_ID, USER_ID } from "../constants";
import { stores } from "../contexts/index";

// получение токена пользователя
export function getUserToken(scope) {
  return bridge
    .send("VKWebAppGetAuthToken", {
      app_id: APP_ID,
      scope: scope.join(),
    })
    .then((res) => {
      stores.UserStore.setUserToken(res.access_token);
    })
    .catch((err) => {});
}

// разрешение на отправку сообщений от имени группы
export function subscribeMessageFromGroup(
  openAlert,
  groupIDsubscription,
  typeState
) {
  bridge
    .send("VKWebAppAllowMessagesFromGroup", {
      group_id: groupIDsubscription,
    })
    .then((res) => {
      typeState(true);
      incrementCountButton("stats.button2");
    })
    .catch((err) => {
      openAlert(
        `Чтобы узнать результат, разрешите отправку сообщений от имени группы`,
        "red"
      );
      typeState(false);
    });
}

// подписка на группу
export function addGroup(group_id, page) {
  bridge
    .send("VKWebAppJoinGroup", { group_id: group_id })
    .then(({ result }) => {
      incrementCountButton(`stats.buttonPage_${page}`);
    })
    .catch((err) => {
      bridge
        .send("VKWebAppJoinGroup", { group_id: group_id })
        .then(({ result }) => {
          incrementCountButton(`stats.buttonPage_${page}`);
        });
    });
}

// добавление сервиса в сообщество
export function AddToCommunity(setGroupData) {
  bridge
    .send("VKWebAppAddToCommunity", {})
    .then((res) => {
      if (res.group_id) {
        setGroupData(res.group_id);
        return true;
      }
    })
    .catch((err) => {
      return false;
    });
}

// открытие др приложение
export function goToApp(appID, location) {
  bridge.send("VKWebAppOpenApp", { app_id: appID, location });
}

export async function getApiMethod(token) {
  return bridge
    .send("VKWebAppCallAPIMethod", {
      method: "groups.get",
      params: {
        user_id: USER_ID,
        v: "5.131",
        access_token: token,
        filter: "admin",
        extended: 1,
      },
    })
    .then((res) => {
      stores.UserStore.setUserGroups(res.response.items);
    })
    .catch((err) => {});
}

// Рекламный видеоролик
export function nativeAds() {
  return bridge
    .send("VKWebAppShowNativeAds", {
      ad_format: "preloader",
    })
    .then((res) => console.log("VKWebAppShowNativeAds RES", res))
    .catch((err) => console.log("VKWebAppShowNativeAds ERR", err));
}

// Рекламный баннер
export function adsBanner() {
  bridge
    .send("VKWebAppGetAds")
    .then((promoBannerProps) => {
      console.log("promoBannerProps 1", promoBannerProps);
      console.log("promoBannerProps 2", { promoBannerProps });
      setPromoBannerProps({
        title: promoBannerProps.title,
        domain: promoBannerProps.domain,
        trackingLink: promoBannerProps.trackingLink,
        ctaText: promoBannerProps.ctaText,
        advertisingLabel: promoBannerProps.advertisingLabel,
        iconLink: promoBannerProps.iconLink,
        description: promoBannerProps.description,
        ageRestrictions: promoBannerProps.ageRestrictions,
        statistics: promoBannerProps.statistics,
      });
    })
    .catch((err) => console.log("promoBannerProps ERR", err));
}
