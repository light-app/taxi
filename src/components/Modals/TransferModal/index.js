import { useState, useEffect, useRef } from "react";
import { Form, Input, Button, Modal, Select } from "antd";
import { useStores } from "../../../hooks/useStores";
import { observer } from "mobx-react-lite";
import "./TransferModal.scss";
import { CloseIcon } from "../../../Icons";
import {GROUP_ID} from "../../../constants"
const { TextArea } = Input;
const { Option } = Select;

const TransferModal = observer(({ visible, setVisible }) => {
  const form = useRef();
  const { ModalStore } = useStores();

  useEffect(() => {
    form.current?.resetFields();
  }, []);

  const onValuesChange = () => {
    const { name, amount, complexity } = form.current.getFieldsValue();
  };

  const onFormSubmit = (values) => {
    const { name, amount, complexity } = values;
  };

  const canselHandler = () => {
    setVisible(false);
    form.current?.resetFields();
    ModalStore.resetStore();
  };

  return (
    <Modal
      className="transfer-modal"
      closeIcon={<></>}
      closable={true}
      visible={visible}
      title={null}
      footer={null}
      centered={true}
      onCancel={canselHandler}
    >
      <Form
        ref={form}
        layout="vertical"
        onValuesChange={onValuesChange}
        onFinish={onFormSubmit}
        requiredMark={false}
      >
        <div className="modal-title">Перевести</div>
        <Form.Item
          label="Введите ссылку на получателя"
          name="receiver"
          rules={[
            {
              required: true,
              message: "Вы не указали ссылку для получателя",
            },
          ]}
        >
          <Input placeholder={`https://vk.com/public${GROUP_ID}`} type="text" />
        </Form.Item>
        <Form.Item
          label="Введите кол-во токенов"
          name="amountCoins"
          rules={[
            {
              required: true,
              message: "Вы не ввели кол-во коинов для отправки",
            },
          ]}
        >
          <Input placeholder="1000" type="number" />
        </Form.Item>

        <Button className="btn primary stretched" htmlType="submit">
          Отправить
        </Button>
      </Form>
    </Modal>
  );
});

export { TransferModal };
