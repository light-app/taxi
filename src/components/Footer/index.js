import React, { useState, useEffect } from "react";
import { Button } from "antd";
import cn from "classnames";
import { useStores } from "../../hooks/useStores";
import { observer } from "mobx-react-lite";
import { ProfileIcon, StarIcon, TasksIcon } from "../../Icons";

import "./Footer.scss";

const tabs = [
  {
    id: 1,
    icon: <StarIcon />,
    path: "top",
  },
  {
    id: 2,
    icon: <ProfileIcon />,
    path: "profile",
  },
  {
    id: 3,
    icon: <TasksIcon />,
    path: "tasks",
  },
];

const Footer = observer(() => {
  const { PanelStore } = useStores();

  return (
    <div className="footer">
      {tabs?.map((item) => {
        return (
          <Button
            className={cn({
              btn: true,
              icon: true,
              active: item.path === PanelStore.activeTab,
            })}
            onClick={() => {
              PanelStore.setActiveTab(item.path);
            }}
            key={item.id}
          >
            {item.icon}
          </Button>
        );
      })}
    </div>
  );
});

export { Footer };
