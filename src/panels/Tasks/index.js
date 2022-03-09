import { useState, useEffect, useRef } from "react";
import { Header } from "../../components";
import {
  Form,
  Input,
  Button,
  Modal,
  Radio,
  Space,
  Col,
  Row,
  DatePicker,
  Select,
  Slider,
} from "antd";

import {
  numberToString,
  AddToCommunity,
  getUserToken,
  goToApp,
  getApiMethod,
} from "../../utils";
import { APP_ID, USER_ID, GROUP_ID } from "../../constants";
import { stores } from "../../contexts/index";
import "./Tasks.scss";

const { Option } = Select;
const amountCoins = [
  { id: 1, value: 1_000_000 },
  { id: 2, value: 5_000_000 },
  { id: 3, value: 10_000_000 },
  { id: 4, value: 50_000_000 },
  { id: 5, value: 100_000_000 },
  { id: 6, value: 300_000_000 },
  { id: 7, value: 600_000_000 },
  { id: 8, value: 900_000_000 },
];

const complexityCoins = [
  { id: 1, value: "Лёгкая" },
  { id: 2, value: "Средняя" },
  { id: 3, value: "Высокая" },
  { id: 4, value: "Очень высокая" },
];

const Tasks = () => {
  const [groupData, setGroupData] = useState(null);
  const [userToken, setUserToken] = useState("");
  const form = useRef();

  useEffect(() => {
    setGroupData();
  }, []);

  const onValuesChange = () => {
    const { name, amount, complexity } = form.current.getFieldsValue();
  };

  const onFormSubmit = (values) => {
    const { name, amount, complexity } = values;
  };

  const AddToCommunityHandler = () => {
    return AddToCommunity(setGroupData);
  };

  const getUserGroups = async () => {
    await getUserToken(["groups"]);
    await getApiMethod(stores.UserStore.token);
    stores.ModalStore.setActiveModal("groups");
  };

  return (
    <>
      <Header title="Создание коина"></Header>
      <div className="tasks">
        <Form
          ref={form}
          layout="vertical"
          onValuesChange={onValuesChange}
          onFinish={onFormSubmit}
        >
          <Form.Item>
            {groupData ? (
              <div className="avatar">
                {/* <img
                  className="img"
                  src="https://sun1.tattelecom-nbc.userapi.com/impf/Z5C38vlMJLcE062hjwphLIImzCC17wkSrSRwhA/aP1rASmvxYA.jpg?size=732x1080&quality=96&sign=eec63a33381cd09e0e1300dc28be03cc&type=album"
                  alt="avatar"
                /> */}
                Создания коина для группы(id): {groupData}
              </div>
            ) : (
              <Button className="btn primary" onClick={getUserGroups}>
                Выбрать группу
              </Button>
            )}
          </Form.Item>

          <Form.Item
            label="Введите название для вашего коина"
            name="name"
            rules={[
              {
                required: true,
                pattern: new RegExp(/^[a-z]{2,9}$/),
                message: "Введите название коина(обычно 3-9 знаков)",
              },
            ]}
          >
            <Input placeholder="Например: topcoin" type="text" />
          </Form.Item>
          <Form.Item
            label="Выберите кол-во создаваемых коинов"
            name="amount"
            rules={[
              {
                required: true,
                message: "Вы не выбрали кол-во коинов для создания",
              },
            ]}
          >
            <Select
              className="select"
              size="default"
              dropdownMatchSelectWidth={true}
              placeholder="1 000 000"
              virtual={false}
            >
              {amountCoins.map((item) => (
                <Option key={item.id} value={item.value}>
                  {numberToString(item.value)}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Выберите сложность майнинга"
            name="complexity"
            rules={[
              {
                required: true,
                message: "Вы не выбрали сложность майнинга",
              },
            ]}
          >
            <Select
              className="select"
              size="default"
              dropdownMatchSelectWidth={true}
              placeholder="Лёгкая"
              virtual={false}
            >
              {complexityCoins.map((item) => (
                <Option key={item.id} value={item.value}>
                  {item.value}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Button className="btn primary" htmlType="submit">
            Создать
          </Button>
        </Form>
      </div>
    </>
  );
};

export { Tasks };
