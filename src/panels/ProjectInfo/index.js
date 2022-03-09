import React, { useState, useEffect } from "react";
import { Button, Progress } from "antd";
import { Header } from "../../components";
import cn from "classnames";
import { numberToString } from "../../utils";
import "./ProjectInfo.scss";
import { useUpToScroll } from "../../utils";

const mockProject = [
  {
    id: 1,
    img: "https://sun1.tattelecom-nbc.userapi.com/impf/Z5C38vlMJLcE062hjwphLIImzCC17wkSrSRwhA/aP1rASmvxYA.jpg?size=732x1080&quality=96&sign=eec63a33381cd09e0e1300dc28be03cc&type=album",
    name: "MDK",
    description: "MDK Coin - коины самого крупного паблика вконтакте!",
    date: "11.11.2021",
    buttonText: "Узнать больше",
    members: 1_000_000,
    subjects: "Юмор",
    tokenName: "MDK",
    allAmountTokens: 100_000_000,
    remainderTokens: 25_000_000,
    options: [
      {
        id: 1,
        startSale: "11.11.2021 г. 21:00 (мск)",
        endSale: "12.11.2021 г. 21:00 (мск)",
        limits: 50_000,
        amountTokens: 50_000_000,
        priceOneToken: 0.05,
        active: true,
      },
      {
        id: 2,
        startSale: "13.11.2021 г. 21:00 (мск)",
        endSale: "14.11.2021 г. 21:00 (мск)",
        limits: 25_000,
        amountTokens: 25_000_000,
        priceOneToken: 0.25,
        active: false,
      },
      {
        id: 3,
        startSale: "14.11.2021 г. 21:00 (мск)",
        endSale: "15.11.2021 г. 21:00 (мск)",
        limits: 10_000,
        amountTokens: 10_000_000,
        priceOneToken: 0.5,
        active: false,
      },
    ],
  },
  {
    id: 2,
    img: "https://sun2.tattelecom-nbc.userapi.com/impg/c854120/v854120913/1794c8/7X2QrT9-Jco.jpg?size=1200x630&quality=96&sign=70f9ff8c4d38ad5ed93b43bb12564d31&type=album",
    name: "Френдзона",
    description: "FRZ - коины самого крупного паблика френдзоны вконтакте!",
    date: "21.11.2021",
    buttonText: "Узнать больше",
    members: 500_000,
    subjects: "Юмор",
    tokenName: "FRZ",
    allAmountTokens: 500_000_000,
    remainderTokens: 250_000_000,
    options: [
      {
        id: 1,
        startSale: "21.11.2021 г. 21:00 (мск)",
        endSale: "22.11.2021 г. 21:00 (мск)",
        limits: 50_000,
        amountTokens: 250_000_000,
        priceOneToken: 0.6,
      },
      {
        id: 2,
        startSale: "23.11.2021 г. 21:00 (мск)",
        endSale: "24.11.2021 г. 21:00 (мск)",
        limits: 50_000,
        amountTokens: 250_000_000,
        priceOneToken: 0.9,
      },
    ],
  },
];

const ProjectInfo = (props) => {
  const [activeTab, setActiveTab] = useState(1);
  useUpToScroll();

  const currentProject = mockProject[props.page - 1];
  const currentOptions = mockProject[props.page - 1].options[activeTab - 1];

  return (
    <>
      <Header title="О проекте" prevPage="/top" />
      <div className="project-info">
        <div className="project-info__info-card">
          <div className="container">
            <div className="title">Название проекта:</div>
            <div className="description">{currentProject.name}</div>
            <div className="title">Кол-во подписчиков:</div>
            <div className="description">
              {numberToString(currentProject.members)}
            </div>
            <div className="title">Тематика:</div>
            <div className="description">{currentProject.subjects}</div>
            <div className="title">Название коина:</div>
            <div className="description">{currentProject.tokenName}</div>
          </div>
          <div className="avatar">
            <img className="img" src={currentProject.img} alt="img" />
          </div>
        </div>
        <div className="project-info__buttons">
          {currentProject.options.map((item) => {
            return (
              <Button
                key={item.id}
                className={cn({
                  btn: true,
                  primary: item.id === activeTab,
                  secondary: item.id !== activeTab,
                })}
                onClick={() => setActiveTab(item.id)}
              >
                Опция {item.id}
              </Button>
            );
          })}
        </div>
        <div className="project-info__details">
          <div className="detail-header">
            <div>Детали продажи (Опция {currentOptions.id})</div>
          </div>
          <div className="detail-item">
            <div>Начало продажи:</div>
            <div>{currentOptions.startSale}</div>
          </div>
          <div className="detail-item">
            <div>Окончание продажи:</div>
            <div>{currentOptions.endSale}</div>
          </div>
          <div className="detail-item">
            <div>Лимиты покупки:</div>
            <div>{numberToString(currentOptions.limits)} ₽</div>
          </div>
          <div className="detail-item">
            <div>Кол-во токенов для продажи:</div>
            <div>{numberToString(currentOptions.amountTokens)} ₽</div>
          </div>
          <div className="detail-item">
            <div>Цена за токен:</div>
            <div>{currentOptions.priceOneToken}</div>
          </div>
          <div className="detail-progress">
            <div className="progress-container">
              <div>Осталось токенов:</div>
              <div>25 000 000/50 000 000</div>
            </div>
            <Progress percent={50} status="active" strokeColor="#00917d" />
          </div>
        </div>
      </div>
    </>
  );
};

export { ProjectInfo };
