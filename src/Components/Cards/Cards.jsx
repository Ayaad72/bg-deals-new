import React from "react";
import "./Card.css";
import { Row, Col } from "antd";
import { Card } from "antd";

const { Meta } = Card;

const Cards = ({ JSONDATA }) => {
  return (
    <div className="card">
      <Row>
        <Col xs={24} className="card-heading">
          <h1 className="SectionHeading">Major Savings</h1>
        </Col>
        {JSONDATA.map((el) => (
          <Col key={el.id} xs={24} sm={24} md={12} lg={8} className="CardsCol">
            <Card hoverable cover={<img alt="example" src={el.src} />}>
              <Meta title={el.title} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cards;
