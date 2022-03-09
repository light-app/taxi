import { ArrowLeftIcon } from "../../Icons";
import { useStores } from "../../hooks/useStores";
import { observer } from "mobx-react-lite";

import "./Header.scss";

const Header = observer(({ title, prevPage = "" }) => {
  const { PanelStore } = useStores();

  return (
    <div className="header">
      {prevPage !== "" && (
        <div
          className="header__icon"
          onClick={() => PanelStore.setActivePanel(prevPage)}
        >
          <ArrowLeftIcon />
        </div>
      )}

      <div className="header__title"> {title}</div>
    </div>
  );
});

export { Header };
