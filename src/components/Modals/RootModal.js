import React, { useState, useEffect } from "react";
import { useStores } from "../../hooks/useStores";
import { observer } from "mobx-react-lite";
import { TransferModal, GetCoinsModal, GroupsModal } from "./index";

const RootModal = observer(({}) => {
  const { ModalStore } = useStores();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    switch (ModalStore.activeModal) {
      case "transfer":
        setVisible(true);
        break;
      case "get-coins":
        setVisible(true);
        break;
      case "groups":
        setVisible(true);
        break;
      default:
        break;
    }
  }, [ModalStore.activeModal]);

  return (
    <>
      {ModalStore.activeModal === "transfer" && (
        <TransferModal visible={visible} setVisible={setVisible} />
      )}
      {ModalStore.activeModal === "get-coins" && (
        <GetCoinsModal visible={visible} setVisible={setVisible} />
      )}
      {ModalStore.activeModal === "groups" && (
        <GroupsModal visible={visible} setVisible={setVisible} />
      )}
    </>
  );
});

export { RootModal };
