import { useStores } from "../../../hooks/useStores";
import { observer } from "mobx-react-lite";
import { Button } from "antd";
import { DollarIcon } from "../../../Icons";

import "./Ads.scss";

const Ads = observer(({ userData }) => {
  const { PanelStore } = useStores();

  return (
    <div className="ads">
      <div className="ads-text">
        Заработать <DollarIcon />
      </div>
      <div className="ads-description">
        Смотрите рекламу и получайте дополнительные <DollarIcon />
      </div>
      <div className="ads-btn">
        <Button className="btn black">Смотреть</Button>
      </div>
    </div>
  );
});

export { Ads };
