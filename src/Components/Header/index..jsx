import React from "react";
import DropDown from "./DropDown";
import { NavLink } from "react-router-dom";
import {
  LoginOutlined,
  HeartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import {
  socialIcons,
  headerRowTwoAssets,
} from "../../assets/JSONDATA/HeaderAssets";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Row className="HeaderRowOne">
        <Col xs={24} lg={8} className="cols">
          <p className="headerPara">Free Express Shipping on orders $200!</p>
        </Col>
        <Col xs={24} md={12} lg={3} className="cols">
          <DropDown
            title={"English / USD"}
            listOne={"English / USD"}
            listTwo={"2nd menu item"}
          />
        </Col>
        <Col xs={24} md={12} lg={3} className="cols">
          <DropDown
            title={"Help Center"}
            listOne={"Help 1"}
            listTwo={"Help 2"}
          />
        </Col>
        <Col xs={24} md={12} lg={2} className="cols">
          <p>
            <NavLink to={"/products"} className="homepageLink">
              <span className="find">Find a Store</span>
            </NavLink>
          </p>
        </Col>
        <Col xs={24} md={12} lg={2} className="cols">
          <p className="follow">Follow Us</p>
        </Col>
        <Col xs={24} sm={24} md={24} lg={3} className="socialIcons">
          {socialIcons.map((el) => (
            <img src={el.src} alt="" key={el.id} />
          ))}
        </Col>
      </Row>

      <Row className="HeaderRowtwo" align={"middle"} justify={"space-between"}>
        <Col xs={24} lg={4} className="headerLogo">
          <NavLink to={"/"} className="homepageLink">
            <img src={headerRowTwoAssets[0].src} alt="" className="logo" />
          </NavLink>
        </Col>
        <Col xs={24} lg={12} className="headerForm">
          <form action="#" className="formSearch">
            <input
              type="search"
              name=""
              id="headerSearch"
              placeholder="Search..."
            />
            <DropDown
              classhidden={"classhidden"}
              title={"All Categories"}
              listone={"Name"}
              listTwo={"Date"}
            />
            <img src={headerRowTwoAssets[1].src} alt="" />
          </form>
        </Col>
        <Col xs={24} lg={8} className="headerRow2Col2 cols">
          <div className="colsrow2">
            <HeartOutlined />
            <p className="wishhhh">WishList</p>
          </div>
          <div className="colsrow2">
            <UserOutlined />
            <p className="MyAcc">My Account</p>
          </div>
          <div className="colsrow2">
            <LoginOutlined />
            <p className="SignInn">SignIn</p>
          </div>
          <div className="colsrow2">
            <ShoppingCartOutlined />
            <p className="caart">Cart</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
