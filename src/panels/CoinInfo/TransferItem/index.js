import React, { useState } from "react";
import { Link } from "@reach/router";

import "./TransferItem.scss";

const TransferItem = ({
  avatar,
  amountCoins,
  typePayment,
  fullName,
  dateTransaction,
}) => {
  const getTypePayment = {
    replenishment: "Пополнение",
    transfer: "Перевод",
  };

  return (
    <div className="transfer-item">
      <Link to="/">
        <div className="avatar">
          <img className="img" src={avatar} alt="avatar" />
        </div>
      </Link>
      <div className="container">
        <div className="content">
          <div className="coin-name">{getTypePayment[typePayment]}</div>
          <div className="coin-amount">{amountCoins}</div>
        </div>
        <div className="content">
          <div className="coin-name">{fullName}</div>
          <div className="coin-amount">{dateTransaction}</div>
        </div>
      </div>
    </div>
  );
};

export { TransferItem };
