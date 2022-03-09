import React, { useState, useEffect } from "react";
import { Button, Tooltip } from "antd";
import { Router, Redirect } from "@reach/router";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../hooks/useStores";
import { numberToString } from "../../../utils";

const UserItem = observer(() => {
  const { PanelStore } = useStores();

  return (
    <div className="users">
      <div className="users-list">
        {mockProject.map((item) => {
          return (
            <div className="users-list__item" key={item.id}>
              <img className="img" src={item.img} alt="img" />
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

export { UserItem };
