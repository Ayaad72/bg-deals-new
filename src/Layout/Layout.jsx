import React from "react";
import "./Layout.css";
import Screen from "../Components/MainScreen";
import Footer from "../Components/Footer/Footer";
import { Row, Col } from "antd";
import HeaderColoredLinez from "../Components/ColoredHr/ColoredHr";
import {
  socialAssets,
  itTechAssets,
  weAcceptAssets,
} from "../assets/JSONDATA/FooterAssets";

const Layout = (props) => {
  return (
    <div id="Layout">
      <Row justify={"center"}>
        <Col xs={24} md={20}>
          <Screen />
        </Col>
        <Col xs={24}>
          <HeaderColoredLinez />
        </Col>
      </Row>
      {props.children}
      <Row>
        <Col xs={24}>
          <Footer
            socialAssets={socialAssets}
            itTechAssets={itTechAssets}
            weAcceptAssets={weAcceptAssets}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
