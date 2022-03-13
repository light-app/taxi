import { Header } from "../../components";
import { UserInfo } from "./UserInfo";
import { Ads } from "./Ads";
import { Work } from "./Work";
import { useUpToScroll } from "../../utils";

import "./Profile.scss";

const userData = {
  id: 73606509,
  img: "https://sun9-27.userapi.com/impg/zXO53Paz-sTGf3LX1qno90rrMvWGTW4zY5G3nQ/Mz8R5cs31ZU.jpg?size=1620x2160&quality=95&sign=8ae98fe498524ba6b38c6d5b238911df&type=album",
  firstName: "Kirill",
  lastName: "Andreev",
  balance: 200_000,
  tips: 0.5,
  ride: 0,
};
const Profile = ({}) => {
  useUpToScroll();

  return (
    <>
      <Header title="Профиль" />
      <div className="profile">
        <div className="profile__main">
          <div className="user">
            <img className="user-img" src={userData.img} alt="avatar" />
            <UserInfo userData={userData} />
          </div>
          <Ads />
          <Work />
        </div>
      </div>
    </>
  );
};

export { Profile };
