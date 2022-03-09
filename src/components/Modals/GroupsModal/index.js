import { useState, useEffect, useRef } from "react";
import { Form, Input, Button, Modal, Select, Radio } from "antd";
import { useStores } from "../../../hooks/useStores";
import { observer } from "mobx-react-lite";
import "./GroupsModal.scss";
import { CloseIcon, SpinnerIcon } from "../../../Icons";
import { arrayOf } from "prop-types";
import { Link } from "@reach/router";
const { TextArea } = Input;
const { Option } = Select;

const GroupsModal = observer(({ visible, setVisible }) => {
  const [radioValue, setRadioValue] = useState(null);
  const { ModalStore, UserStore } = useStores();
  const form = useRef();

  const canselHandler = () => {
    setVisible(false);
    ModalStore.resetStore();
  };

  const onChangeRadio = (e) => {
    console.log("radio checked", e.target.value);
    setRadioValue(e.target.value);
  };

  return (
    <Modal
      className="groups-modal"
      closeIcon={<></>}
      closable={true}
      visible={visible}
      title={null}
      footer={null}
      centered={true}
      onCancel={canselHandler}
    >
      <div className="groups">
        <div className="title">Выберите группу</div>
        <Radio.Group onChange={onChangeRadio} value={radioValue}>
          {UserStore.groups.length ? (
            <>
              {UserStore.groups.map((item, index) => {
                return (
                  <div className="group-item" key={index}>
                    <a href={`https://vk.com/public${item.id}`} target="_blank">
                      <div className="avatar">
                        <img
                          className="img"
                          src={item.photo_100}
                          alt="avatar"
                        />
                      </div>
                    </a>
                    <div className="container">
                      <div className="content">
                        <div className="coin-name">{item.name}</div>
                        <Radio value={item.id}></Radio>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="loading">
              <SpinnerIcon />
            </div>
          )}
        </Radio.Group>
      </div>
      <div className="button">
        <Button className="btn primary stretched" disabled={!radioValue}>
          Выбрать
        </Button>
      </div>
    </Modal>
  );
});

export { GroupsModal };
