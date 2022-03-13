import React, { useState, useEffect } from "react";
import { Button, Tooltip, Badge, Avatar } from "antd";
import { Router, Redirect } from "@reach/router";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../../hooks/useStores";
import { numberToString } from "../../../../utils";

import "./UserItem.scss";

const UserItem = observer(({ dataItem, topNumber }) => {
  const { PanelStore } = useStores();
  console.log("dataItem.balance", dataItem.balance);
  return (
    <div className="user">
      <Badge count={topNumber}>
        <a href={`https://vk.com/id${dataItem.id}`} target="_blank">
          <Avatar size={40} shape="circle" src={dataItem.img} />
        </a>
      </Badge>

      <div className="user-container">
        <div className="info">
          {dataItem.firstName} {dataItem.firstName}
        </div>
        <div className="info description">
          {numberToString(dataItem.balance)}$
        </div>
        <Button
          className="btn primary"
          onClick={() => PanelStore.setActivePanel("/project-id", dataItem.id)}
        >
          Украсть чаевые
        </Button>
      </div>
    </div>
  );
});

export { UserItem };
