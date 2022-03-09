import { stores } from "../contexts";
import { dispatchMessage } from "./messageDispatcher";
import { vkValidationParams } from "../constants";
const { WsStore } = stores;

const wsReadyState = {
  0: "Сокет создан. Связь еще не открыта.",
  1: "Соединение открыто и готово к общению.",
  2: "Соединение закрывается.",
  3: "Соединение закрыто или не может быть открыто.",
};

// =================
// URL for WebSocket
// =================

const wsDevURL = `wss://ods-studio.ru/coinspace/socket${vkValidationParams}`;
const wsProductionURL = `wss://ods-studio.ru/coinspace/socket${vkValidationParams}`;

const wsURL =
  process.env.NODE_ENV === "development" ? wsDevURL : wsProductionURL;

// =================
// Work with WebSocket
// =================

const wsStart = (wsURL) => {
  WsStore.changeWsConnectionStatus("connecting");
  const ws = new WebSocket(wsURL);

  // Connected
  ws.onopen = (e) => {
    WsStore.changeWsConnectionStatus("connected");
    console.log(
      `%c Websocket opened ${e.target.url} `,
      "background-color:green; color: white;padding: 5px; border-radius:5px"
    );
  };

  // Show errors
  ws.onerror = (e) => {
    console.log(
      `%c Websocket error ${wsReadyState[e.currentTarget.readyState]}  `,
      "background-color:red; color: white;padding: 5px; border-radius:5px"
    );
    console.log(e);
  };

  // Reconnecting
  ws.onclose = (e) => {
    WsStore.changeWsConnectionStatus("disconnected");
    console.log(
      `%c Websocket disconnected ${e.reason} `,
      "background-color:#e1cb2f; color: white;padding: 5px; border-radius:5px"
    );

    if (e.reason === "Other Connection") return;

    setTimeout(() => {
      wsStart(wsURL);
    }, 3000);
  };

  // WebSocket send message
  globalThis.wsSend = (action, payload) => {
    if (ws.readyState === 1) {
      ws.send(
        JSON.stringify({
          payload,
          action,
        })
      );

      console.log(
        `%c Websocket send message ${payload} `,
        "background-color:#1bb5ff; color: white;padding: 5px; border-radius:5px"
      );
    }
  };

  // WebSocket received message
  ws.onmessage = (e) => {
    const res = JSON.parse(e.data);
    console.log(
      `%c Websocket received message ${res.action} `,
      "background-color:#1bb5ff; color: white;padding: 5px; border-radius:5px"
    );

    dispatchMessage(res);
  };
};

wsStart(wsURL);
