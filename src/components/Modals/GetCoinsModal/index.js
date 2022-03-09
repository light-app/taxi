import { useState, useEffect, useRef } from "react";
import { Form, Input, Button, Modal, Select } from "antd";
import { useStores } from "../../../hooks/useStores";
import { observer } from "mobx-react-lite";
import "./GetCoinsModal.scss";
import { CloseIcon } from "../../../Icons";
const { TextArea } = Input;
const { Option } = Select;

const GetCoinsModal = observer(({ visible, setVisible }) => {
  const { ModalStore } = useStores();
  const form = useRef();

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
      className="get-coins-modal"
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
          <Input placeholder="https://vk.com/taxi" type="text" />
        </Form.Item>

        <Button className="btn primary stretched" htmlType="submit">
          Отправить
        </Button>
      </Form>
    </Modal>
  );
});

export { GetCoinsModal };
