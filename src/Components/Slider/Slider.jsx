import React from "react";
import "./Slider.css";
import { Row, Col } from "antd";

const Slider = ({ JSONDATA }) => {
  return (
    <div className="Slider">
      <Row className="SliderRow" justify={"center"}>
        {JSONDATA.map((el) => (
          <Col xs={12} lg={3} key={el.id} className="SliderCol">
            <div id="innerDivisionSliderCol">
              <img src={el.src} alt="" />
            </div>
            <p>{el.title}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Slider;
