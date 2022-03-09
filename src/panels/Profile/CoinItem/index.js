import React, { useState } from "react";
import { Link } from "@reach/router";
import { useStores } from "../../../hooks/useStores";
import { observer } from "mobx-react-lite";

import "./CoinItem.scss";

const CoinItem = observer(
  ({ avatar, name, amount, fullName, amountRub, id }) => {
    const { PanelStore } = useStores();

    return (
      <div
        className="coin-item"
        onClick={() => PanelStore.setActivePanel("/coin-id", id)}
      >
        <div className="avatar">
          <img className="img" src={avatar} alt="avatar" />
        </div>
        <div className="container">
          <div className="content">
            <div className="coin-name">{name}</div>
            <div className="coin-amount">{amount}</div>
          </div>
          <div className="content">
            <div className="coin-name">{fullName}</div>
            <div className="coin-amount">{amountRub} ₽</div>
          </div>
        </div>
      </div>
    );
  }
);

export { CoinItem };
