import { useStores } from "../../../hooks/useStores";
import { observer } from "mobx-react-lite";
import { numberToString } from "../../../utils";
import { DollarIcon } from "../../../Icons";

import "./UserInfo.scss";

const UserInfo = observer(({ userData }) => {
  const { PanelStore } = useStores();

  return (
    <div className="user-info">
      <div className="name">
        {userData.firstName} {userData.lastName}
      </div>
      <div className="balance">
        <div className="balance-block">
          <span className="balance-block__left">Баланс:</span>
          <div className="balance-block__right">
            <span> {numberToString(userData.balance)}</span>
            <span>
              <DollarIcon />
            </span>
          </div>
        </div>
        <div className="balance-block">
          <span className="balance-block__left">Чаевые:</span>
          <div className="balance-block__right">
            <span> {numberToString(userData.tips)}</span>
            <span>
              <DollarIcon />
            </span>
          </div>
        </div>
        <div className="balance-block">
          <span className="balance-block__left">Доступные поездки:</span>
          <div className="balance-block__right">
            <span> {numberToString(userData.ride)} шт</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export { UserInfo };
