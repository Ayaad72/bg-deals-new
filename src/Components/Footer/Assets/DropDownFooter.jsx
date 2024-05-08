import React from "react";
import "../Footer.css";
import { Button, Dropdown, Menu } from "antd";
import { UpOutlined } from "@ant-design/icons";

const DropDownFooter = (props) => {
  const menu = (
    <Menu>
      <Menu.Item key="1">{props.currencyTwo}</Menu.Item>
      <Menu.Item key="2">{props.currencyOne}</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu} // Use menu instead of overlay
      placement="bottom"
      arrow={{ pointAtCenter: true }}
      className="footerDrop"
    >
      <Button>
        {props.title}
        {props.default} <UpOutlined />
      </Button>
    </Dropdown>
  );
};

export default DropDownFooter;
