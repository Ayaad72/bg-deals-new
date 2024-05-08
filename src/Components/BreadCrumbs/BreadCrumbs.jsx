import React from "react";
import "./BreadCrumbStyles.css";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  ProductOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Breadcrumb } from "antd";

const BreadCrumbs = () => {
  return (
    <Breadcrumb
      items={[
        {
          title: <Link to={"/"}>Home</Link>,
        },
        {
          title: (
            <>
              <Link to={"/products"}>Electronics</Link>
            </>
          ),
        },
        {
          title: (
            <>
              <Link to={"/shoppage"}>Computers</Link>
            </>
          ),
        },
        {
          title: (
            <>
              <Link to={"/shoppage"}>Desktop Computers</Link>
            </>
          ),
        },
      ]}
    />
  );
};

export default BreadCrumbs;
