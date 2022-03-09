import React, { useState } from "react";
import { Header } from "../../components";
import { CoinItem } from "./CoinItem";
import { Input } from "antd";
import { useUpToScroll } from "../../utils";

import "./Profile.scss";

const dataCoins = [
  {
    id: 1,
    name: "MDK",
    fullName: "MDK Coin",
    amount: 150,
    amountRub: 850,
    link: "https://vk.com/mudakoff",
    avatar:
      "https://sun1.tattelecom-nbc.userapi.com/impf/Z5C38vlMJLcE062hjwphLIImzCC17wkSrSRwhA/aP1rASmvxYA.jpg?size=732x1080&quality=96&sign=eec63a33381cd09e0e1300dc28be03cc&type=album",
  },
  {
    id: 2,
    name: "DRK",
    fullName: "Durka Coin",
    amount: 560,
    amountRub: 2500,
    link: "https://vk.com/durkacoin",
    avatar:
      "https://sun2.tattelecom-nbc.userapi.com/impg/c854120/v854120913/1794c8/7X2QrT9-Jco.jpg?size=1200x630&quality=96&sign=70f9ff8c4d38ad5ed93b43bb12564d31&type=album",
  },
  {
    id: 3,
    name: "FRZ",
    fullName: "Френдзона Coin",
    amount: 350,
    amountRub: 650,
    link: "https://vk.com/fz_96",
    avatar:
      "https://sun1.tattelecom-nbc.userapi.com/impf/Z5C38vlMJLcE062hjwphLIImzCC17wkSrSRwhA/aP1rASmvxYA.jpg?size=732x1080&quality=96&sign=eec63a33381cd09e0e1300dc28be03cc&type=album",
  },
  {
    id: 4,
    name: "FRZ18",
    fullName: "Френдзона 18+ Coin",
    amount: 1589,
    amountRub: 2450,
    link: "https://vk.com/fz_18",
    avatar:
      "https://sun2.tattelecom-nbc.userapi.com/impg/c854120/v854120913/1794c8/7X2QrT9-Jco.jpg?size=1200x630&quality=96&sign=70f9ff8c4d38ad5ed93b43bb12564d31&type=album",
  },
  {
    id: 5,
    name: "MDK",
    fullName: "MDK Coin",
    amount: 150,
    amountRub: 850,
    link: "https://vk.com/mudakoff",
    avatar:
      "https://sun1.tattelecom-nbc.userapi.com/impf/Z5C38vlMJLcE062hjwphLIImzCC17wkSrSRwhA/aP1rASmvxYA.jpg?size=732x1080&quality=96&sign=eec63a33381cd09e0e1300dc28be03cc&type=album",
  },
  {
    id: 6,
    name: "DRK",
    fullName: "Durka Coin",
    amount: 560,
    amountRub: 2500,
    link: "https://vk.com/durkacoin",
    avatar:
      "https://sun2.tattelecom-nbc.userapi.com/impg/c854120/v854120913/1794c8/7X2QrT9-Jco.jpg?size=1200x630&quality=96&sign=70f9ff8c4d38ad5ed93b43bb12564d31&type=album",
  },
  {
    id: 7,
    name: "FRZ",
    fullName: "Френдзона Coin",
    amount: 350,
    amountRub: 650,
    link: "https://vk.com/fz_96",
    avatar:
      "https://sun1.tattelecom-nbc.userapi.com/impf/Z5C38vlMJLcE062hjwphLIImzCC17wkSrSRwhA/aP1rASmvxYA.jpg?size=732x1080&quality=96&sign=eec63a33381cd09e0e1300dc28be03cc&type=album",
  },
  {
    id: 8,
    name: "FRZ18",
    fullName: "Френдзона 18+ Coin",
    amount: 1589,
    amountRub: 2450,
    link: "https://vk.com/fz_18",
    avatar:
      "https://sun2.tattelecom-nbc.userapi.com/impg/c854120/v854120913/1794c8/7X2QrT9-Jco.jpg?size=1200x630&quality=96&sign=70f9ff8c4d38ad5ed93b43bb12564d31&type=album",
  },
  {
    id: 9,
    name: "MDK",
    fullName: "MDK Coin",
    amount: 150,
    amountRub: 850,
    link: "https://vk.com/mudakoff",
    avatar:
      "https://sun1.tattelecom-nbc.userapi.com/impf/Z5C38vlMJLcE062hjwphLIImzCC17wkSrSRwhA/aP1rASmvxYA.jpg?size=732x1080&quality=96&sign=eec63a33381cd09e0e1300dc28be03cc&type=album",
  },
  {
    id: 10,
    name: "DRK",
    fullName: "Durka Coin",
    amount: 560,
    amountRub: 2500,
    link: "https://vk.com/durkacoin",
    avatar:
      "https://sun2.tattelecom-nbc.userapi.com/impg/c854120/v854120913/1794c8/7X2QrT9-Jco.jpg?size=1200x630&quality=96&sign=70f9ff8c4d38ad5ed93b43bb12564d31&type=album",
  },
  {
    id: 11,
    name: "FRZ",
    fullName: "Френдзона Coin",
    amount: 350,
    amountRub: 650,
    link: "https://vk.com/fz_96",
    avatar:
      "https://sun1.tattelecom-nbc.userapi.com/impf/Z5C38vlMJLcE062hjwphLIImzCC17wkSrSRwhA/aP1rASmvxYA.jpg?size=732x1080&quality=96&sign=eec63a33381cd09e0e1300dc28be03cc&type=album",
  },
];

const Profile = ({}) => {
  const [filterData, setFilterData] = useState(dataCoins);
  useUpToScroll();

  const onChangeInput = (e) => {
    const value = e.target.value.toLowerCase();

    const filter = dataCoins.filter(
      (item) =>
        item.name.toLowerCase().includes(value) ||
        item.fullName.toLowerCase().includes(value)
    );

    setFilterData(filter);

    if (value === "") {
      setFilterData(dataCoins);
    }
  };

  return (
    <>
      <Header title="Кошелёк" />
      <div className="profile">
        <div className="profile__main">
          <div className="coins">
            <div className="coins__separator">
              <span></span>
            </div>
            <div className="coins__title">Активы</div>
            <div className="coins__search">
              <Input placeholder="Поиск" onChange={onChangeInput} />
            </div>
            <div className="coins__list">
              {filterData?.map((item) => {
                return (
                  <CoinItem
                    key={item.id}
                    id={item.id}
                    avatar={item.avatar}
                    name={item.name}
                    amount={item.amount}
                    fullName={item.fullName}
                    amountRub={item.amountRub}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Profile };
