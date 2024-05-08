import React from "react";
import "./Header.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Menu } from "antd";

const DropDown = (props) => {
  const menu = (
    <Menu>
      <Menu.Item key="1">{props.listOne}</Menu.Item>
      <Menu.Item key="2">{props.listTwo}</Menu.Item>
    </Menu>
  );

  return (
    <div className={`EUSDDropDown ${props.classhidden}`}>
      <Dropdown overlay={menu} className="headerdropdown">
        <Space>
          {props.title}
          <DownOutlined />
        </Space>
      </Dropdown>
    </div>
  );
};

export default DropDown;
