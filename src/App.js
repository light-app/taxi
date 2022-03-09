import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import { Router, Redirect } from "@reach/router";
import { Snackbar, Avatar } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Icon16Done from "@vkontakte/icons/dist/16/done";
import Icon16Cancel from "@vkontakte/icons/dist/16/cancel";
import { Button, notification } from "antd";
import { routeUrl } from "./constants";

import "./ws/connection.js";

import "antd/dist/antd.css";
import "./index.scss";

import {
  Top,
  Exchange,
  ProjectInfo,
  Profile,
  CoinInfo,
  Tasks,
  ParentComponent,
} from "./panels";

import { observer } from "mobx-react-lite";
import { useStores } from "./hooks/useStores";

import { SocketManager } from "./utils";
import { BASE_WS_URL } from "./api/consts";

import { vkValidationParams } from "./constants";

import { RootModal } from "./components/Modals/RootModal";
import { Footer, Header } from "./components";
import { WalletIcon, ExchangeIcon, DashboardIcon } from "./Icons";
import { toJS } from "mobx";

const App = observer(() => {
  // Стейт запуска
  const isDesktop = window.innerWidth >= 1000;
  const { UserStore, SnackbarStore, WsStore, PanelStore } = useStores();
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(null);
  const [wsConnecting, setWsConnecting] = useState(false);
  // Стейт приложения
  // const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   // console.log("UserStore token", toJS(UserStore.token));
  //   console.log("UserStore token", UserStore.token);
  //   console.log("UserStore groups", toJS(UserStore.groups));
  // }, [UserStore.token, UserStore.groups]);

  return (
    <>
      <Router basepath={routeUrl === "" ? "/" : routeUrl}>
        <Top path="top" />
        <Exchange path="exchange" />
        <Profile path="profile" />
        <Tasks path="tasks" />
        <ProjectInfo path="project-id/:page" />
        <CoinInfo path="coin-id/:page" />
        <Redirect
          from={routeUrl === "" ? "/" : routeUrl}
          to={`${routeUrl}/profile`}
          noThrow
        />
      </Router>
      <Footer />

      <RootModal />

      {/* {SnackbarStore.showSnackbar && (
        <Snackbar
          duration={3000}
          layout="horizontal"
          onClose={() => SnackbarStore.setShowSnackbar(false)}
          before={
            <Avatar
              size={24}
              style={{ backgroundColor: SnackbarStore.snackbarColor }}
            >
              {SnackbarStore.snackbarType === "success" ? (
                <Icon16Done fill="#fff" width={14} height={14} />
              ) : (
                <Icon16Cancel fill="#fff" width={14} height={14} />
              )}
            </Avatar>
          }
        >
          {SnackbarStore.snackbarText}
        </Snackbar>
      )} */}
    </>
  );
});

export default App;
