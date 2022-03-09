import React, { useState, useEffect } from "react";
import { Button, Tooltip } from "antd";
import { Router, Redirect } from "@reach/router";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../hooks/useStores";
import { numberToString } from "../../../utils";

import "./Users.scss";

const mockProject = [
  {
    id: 73606509,
    img: "https://sun9-27.userapi.com/impg/zXO53Paz-sTGf3LX1qno90rrMvWGTW4zY5G3nQ/Mz8R5cs31ZU.jpg?size=1620x2160&quality=95&sign=8ae98fe498524ba6b38c6d5b238911df&type=album",
    firstName: "Kirill",
    lastName: "Andreev",
    balance: 200_000,
  },
  {
    id: 104002857,
    img: "https://sun2.tattelecom-nbc.userapi.com/impg/c854120/v854120913/1794c8/7X2QrT9-Jco.jpg?size=1200x630&quality=96&sign=70f9ff8c4d38ad5ed93b43bb12564d31&type=album",
    firstName: "Френдзона",
    lastName: "Френдзона",
    balance: 200_000,
  },
];

const Users = observer(() => {
  const { PanelStore } = useStores();

  return (
    <div className="users">
      <div className="users-list">
        {mockProject.map((item) => {
          return (
            <div className="users-list__item" key={item.id}>
              <a href={`https://vk.com/id${item.id}`} target="_blank">
                <img className="img" src={item.img} alt="img" />
              </a>

              <div className="item-container">
                <div className="info">
                  {item.firstName} {item.firstName}
                </div>
                <div className="info description">
                  {numberToString(item.balance)}$
                </div>
                <Button
                  className="btn primary"
                  onClick={() =>
                    PanelStore.setActivePanel("/project-id", item.id)
                  }
                >
                  Украсть чаевые
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export { Users };
