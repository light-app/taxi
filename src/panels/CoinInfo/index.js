import React, { useState, useEffect } from "react";
import { Header } from "../../components";
import { TransferItem } from "./TransferItem";
import { Input, Button } from "antd";
import { SendIcon, ReceiveIcon, PaymentIcon, FarmIcon } from "../../Icons";
import { useUpToScroll } from "../../utils";
import { useStores } from "../../hooks/useStores";
import { observer } from "mobx-react-lite";
import { Link } from "@reach/router";
import { stores } from "./../../contexts/index";

import "./CoinInfo.scss";

const dataTransfer = [
  {
    id: 1,
    avatar:
      "https://sun1-55.userapi.com/s/v1/ig2/Y-T_c0kfXGRSFiuNh2CgVfvII8zK5onIx3WDzfaPlzSzhsNFLMditVutwAOj-uxGwrr0DcTt7C9QGrd8tvEhpqaG.jpg?size=200x200&quality=96&crop=0,150,1620,1620&ava=1",
    amountCoins: 100,
    typePayment: "replenishment",
    fullName: "Дмитрий Брюханов",
    dateTransaction: "11.11.21 19:39",
  },
  {
    id: 2,
    avatar:
      "https://sun1-55.userapi.com/s/v1/ig2/Y-T_c0kfXGRSFiuNh2CgVfvII8zK5onIx3WDzfaPlzSzhsNFLMditVutwAOj-uxGwrr0DcTt7C9QGrd8tvEhpqaG.jpg?size=200x200&quality=96&crop=0,150,1620,1620&ava=1",
    amountCoins: 1_000,
    typePayment: "replenishment",
    fullName: "Дмитрий Брюханов",
    dateTransaction: "11.11.21 19:39",
  },
  {
    id: 3,
    avatar:
      "https://sun1-55.userapi.com/s/v1/ig2/Y-T_c0kfXGRSFiuNh2CgVfvII8zK5onIx3WDzfaPlzSzhsNFLMditVutwAOj-uxGwrr0DcTt7C9QGrd8tvEhpqaG.jpg?size=200x200&quality=96&crop=0,150,1620,1620&ava=1",
    amountCoins: 10_000,
    typePayment: "replenishment",
    fullName: "Дмитрий Брюханов",
    dateTransaction: "11.11.21 19:39",
  },
];

const mockProject = [
  {
    id: 1,
    img: "https://sun1.tattelecom-nbc.userapi.com/impf/Z5C38vlMJLcE062hjwphLIImzCC17wkSrSRwhA/aP1rASmvxYA.jpg?size=732x1080&quality=96&sign=eec63a33381cd09e0e1300dc28be03cc&type=album",
    name: "MDK",
    amountCoins: 1_000,
    priceRub: 2_266,
  },
  {
    id: 2,
    img: "https://sun2.tattelecom-nbc.userapi.com/impg/c854120/v854120913/1794c8/7X2QrT9-Jco.jpg?size=1200x630&quality=96&sign=70f9ff8c4d38ad5ed93b43bb12564d31&type=album",
    name: "FRZ",
    amountCoins: 1_000,
    priceRub: 2_266,
  },
];

const CoinInfo = observer((props) => {
  const { ModalStore, PanelStore } = useStores();

  const currentProject = mockProject[props.page - 1];

  useUpToScroll();

  const openModal = (type) => {
    ModalStore.setActiveModal(type);
  };

  return (
    <>
      <Header title="Кошелёк" prevPage="/profile" />
      <div className="coin-info">
        <div className="coin-info__main">
          <div className="action">
            <div className="action__header">
              <div className="coin-name">{currentProject?.name}</div>
              <div className="coin-stats">0.00 ₽ 0.00 %</div>
            </div>
            <div className="action__avatar">
              <img className="img" src={currentProject?.img} alt="img" />
              <span className="coin-amount">
                {currentProject?.amountCoins} {currentProject?.name}
              </span>
              <span className="coin-amount-rub">
                ≈ {currentProject?.priceRub} ₽
              </span>
            </div>
            <div className="action__buttons">
              <div className="btn-container">
                <Button
                  shape="circle"
                  icon={<SendIcon />}
                  onClick={() => openModal("transfer")}
                />
                <span>Отправить</span>
              </div>
              <div className="btn-container">
                <Button
                  shape="circle"
                  icon={<ReceiveIcon />}
                  onClick={() => openModal("get-coins")}
                />
                <span>Получить</span>
              </div>
              <div className="btn-container">
                <Button
                  shape="circle"
                  icon={<PaymentIcon />}
                  onClick={() => PanelStore.setActivePanel("/exchange")}
                />

                <span>Купить</span>
              </div>
              <div className="btn-container">
                <Button shape="circle" icon={<FarmIcon />} />
                <span>Фармить</span>
              </div>
            </div>
          </div>

          <div className="transaction">
            <div className="transaction__separator">
              <span></span>
            </div>
            <div className="transaction__title">Активы</div>
            <div className="transaction__search">
              <Input placeholder="Поиск" />
            </div>
            <div className="transaction__list">
              {dataTransfer?.map((item) => {
                return (
                  <TransferItem
                    key={item.id}
                    avatar={item.avatar}
                    amountCoins={item.amountCoins}
                    typePayment={item.typePayment}
                    fullName={item.fullName}
                    dateTransaction={item.dateTransaction}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export { CoinInfo };
