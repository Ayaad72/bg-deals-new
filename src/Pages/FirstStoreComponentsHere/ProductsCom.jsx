import React from "react";
import Layout from "../../Layout/Layout";
import ProductsPage from "../ProductsPage";
import BreadCrumbs from "../../Components/BreadCrumbs/BreadCrumbs";
import { Row, Col } from "antd";

const ProductsCom = () => {
  return (
    <Layout>
      <Row justify={"center"}>
        <Col xs={24} md={20}>
          <BreadCrumbs />
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={20}>
          <ProductsPage />
        </Col>
      </Row>
    </Layout>
  );
};

export default ProductsCom;
