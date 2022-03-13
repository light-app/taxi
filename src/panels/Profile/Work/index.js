import { useStores } from "../../../hooks/useStores";
import { observer } from "mobx-react-lite";
import { Button, Progress } from "antd";
import { TaxiIcon } from "../../../Icons";

import "./Work.scss";

const Work = observer(({ userData }) => {
  const { PanelStore } = useStores();

  const currentHour = new Date().getHours();
  const progress = Math.floor((currentHour / 24) * 100);

  return (
    <div className="work">
      <div className="work-title">
        <div className="work-title__text">Работать</div>
        <Button className="btn black">Таксовать</Button>
      </div>
      <div className="work-title__text">До следующего рейса осталось:</div>
      <Progress percent={progress} status="active" strokeColor="#ffcc00" />
    </div>
  );
});

export { Work };
