import bridge from "@vkontakte/vk-bridge";
import {
  APP_ID,
  APP_IMG_SHARING,
  APP_IMG_SHARING_WALL,
  USER_ID,
} from "../config";

export function sharing(type, openAlert, e) {
  switch (type) {
    case "share-link":
      shareLink();
      break;
    case "copy-link":
      copyLink(openAlert);
      break;
    case "story":
      story();
      break;
    case "share-wall":
      share(e);
      break;
    default:
      break;
  }
}

function shareLink() {
  const link = `https://vk.com/app${APP_ID}#${USER_ID}`;
  bridge.send("VKWebAppShare", {
    link: link,
  });
}

// Копирование в буфер
function copyLink(openAlert) {
  const link = `https://vk.com/app${APP_ID}#${USER_ID}`;
  bridge
    .send("VKWebAppGetClientVersion")
    .then((result) => {
      console.log(result.platform);
      if (result.platform === "web" || result.platform === "mobile-web") {
        window.navigator.clipboard.writeText(link).then(
          () => {
            console.log("successfully set", link);
            openAlert("Ссылка скопирована");
          },
          () => {
            console.log("write failed", link);
          }
        );
      } else {
        bridge.send("VKWebAppCopyText", { text: link });
        openAlert("Ссылка скопирована");
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
}

//  Поделиться в истории
function story() {
  const url = `https://vk.com/app${APP_ID}#${USER_ID}`;

  bridge.send("VKWebAppShowStoryBox", {
    background_type: "image",
    url: APP_IMG_SHARING,
    attachment: {
      text: "go_to",
      type: "url",
      url: url,
    },
  });
}

//  ДОБАВЛЕНИЕ РЕПОСТА НА СТЕНУ ПОЛЬЗОВАТЕЛЯ
function share(e) {
  e.preventDefault();
  const url = `https://vk.com/app${APP_ID}#${USER_ID}`;
  const urlPhotoStories = `${APP_IMG_SHARING_WALL},https://vk.com/app${APP_ID}#${USER_ID}`;
  const textStories = `Заходи в приложение и узнай, кого лайкает или кому пишет твоя вторая половинка, Приложение - ${url}`;

  bridge.send("VKWebAppShowWallPostBox", {
    message: textStories,
    attachments: urlPhotoStories,
  });
}
