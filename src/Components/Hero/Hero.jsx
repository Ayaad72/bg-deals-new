import React, { useRef } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons"; // Importing icons for arrows

const Hero = ({ heroAssetsdata, category }) => {

  const carouselRef = useRef(null);
  const handleNext = () => {
    carouselRef.current.next();
  };
  const handlePrev = () => {
    carouselRef.current.prev();
  };

  return (

    <>
      <div className="Hero-Container">
        <Carousel ref={carouselRef} dots={false}>
          {heroAssetsdata.map((el, index, array) =>
            el.category === "hero" ? (
              <div key={index} className="contentContainer">
                <img src={el.src} alt="" />

                <div className={`${el.title === 'Modern' ? "content" : 'anotherContent'}`}>
                  <div id="innerContent">
                    <h3>{el.limitedEdition}</h3>
                    <h1>{el.title}</h1>
                    <h1>{el.titleTwo}</h1>
                    <p>{el.para}</p>
                    <Link to={"/products"}>
                      <button id="HeroBTN">{el.shopNow}</button>
                    </Link>
                  </div>
                </div>
              </div >
            ) : null
          )}

          {
            heroAssetsdata.map((el, index) =>
              el.category === "shopAdvertise" ? (
                <div key={index} className="contentContainerAdvertise">
                  <img src={el.bg} alt="" />
                  <div className="contentAdvertise">
                    <div id="innerContenAdvertise">
                      <h1>{el.titleShopPage}</h1>
                      <p>{el.text}</p>
                      <button id="HeroBTNAdvertise">{el.btn}</button>
                    </div>
                  </div>
                </div>
              ) : null
            )
          }
        </Carousel>

        <Button
          shape="circle"
          icon={<LeftOutlined />}
          onClick={handlePrev}
          className="prevBTN"
        />
        <Button
          shape="circle"
          icon={<RightOutlined />}
          onClick={handleNext}
          className="nxtBTN"
        />
      </div >
    </>
  );
};
export default Hero;
