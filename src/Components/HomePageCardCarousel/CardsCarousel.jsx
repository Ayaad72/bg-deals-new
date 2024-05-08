import React, { useRef, useState, Fragment, useEffect } from "react";
import { Grid } from "antd";
import "./CarouselStyling.css";
import { Card } from "antd";
import { hoverAssets } from "../../assets/JSONDATA/BestSellerAssets";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const { useBreakpoint } = Grid;
const CardsCarousel = ({ pageHeading, JSONData, NavAssets }) => {
  const [revealBestSellerData, setRevealSellerData] = useState([]);
  const [forBestSellerData, setForBestSellerData] = useState([]);
  const [revealBestSellerNavAssets, setRevealSellerNavAssets] = useState([]);
  const [revealSeeOnTVData, setRevealSeeOnTvData] = useState([]);
  const [revealSeeOnTVNavAssets, setRevealSeeOnTvNavAssets] = useState([]);
  const [revealRatedProductData, setRevealRatedProductData] = useState([]);
  const [revealRatedProductNavAssets, setRevealRatedProductNavAssets] =
    useState([]);
  const [revealShopCategoryData, setRevealShopCategoryData] = useState([]);
  const [forShopCategoryData, setForShopCategoryData] = useState([]);
  const [revealShopCategoryNavAssets, setRevealShopCategoryNavAssets] =
    useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const carouselRef = useRef(null);
  useEffect(() => {
    if (NavAssets) {
      const filteredNavData = NavAssets.filter(
        (el) => el.category === "bestseller"
      );
      setRevealSellerNavAssets(filteredNavData);
    }
    if (NavAssets) {
      const filteredNavData = NavAssets.filter(
        (el) => el.category === "ratedproducts"
      );
      setRevealRatedProductNavAssets(filteredNavData);
    }
    if (NavAssets) {
      const filteredNavData = NavAssets.filter(
        (el) => el.category === "seeontv"
      );
      setRevealSeeOnTvNavAssets(filteredNavData);
    }
    if (NavAssets) {
      const filteredNavData = NavAssets.filter(
        (el) => el.category === "seeontv"
      );
      setRevealSeeOnTvNavAssets(filteredNavData);
    }
    if (NavAssets) {
      const filteredNavData = NavAssets.filter(
        (el) => el.category === "shopcategory"
      );
      setRevealShopCategoryNavAssets(filteredNavData);
    }
  }, [NavAssets]);
  useEffect(() => {
    if (JSONData) {
      const filteredData = JSONData.filter(
        (el) => el.category === "bestseller"
      );
      setRevealSellerData(filteredData);
      setForBestSellerData(filteredData);
    }
    if (JSONData) {
      const filteredRatedProductsData = JSONData.filter(
        (el) => el.category === "ratedproducts"
      );
      setRevealRatedProductData(filteredRatedProductsData);
    }
    if (JSONData) {
      const filteredRatedProductsData = JSONData.filter(
        (el) => el.category === "seeontv"
      );
      setRevealSeeOnTvData(filteredRatedProductsData);
    }

    if (JSONData) {
      const filteredRatedProductsData = JSONData.filter(
        (el) => el.category === "shopcategory"
      );
      setRevealShopCategoryData(filteredRatedProductsData);
      setForShopCategoryData(filteredRatedProductsData);
    }
  }, [JSONData]);

  const BestSellerNav = (e) => {
    if (e.target.innerText === "Top 20") {
      setRevealSellerData(forBestSellerData);
    }

    if (e.target.innerText === "Baby") {
      setRevealSellerData(() => {
        return forBestSellerData.filter((e) => {
          return e.id === 3;
        });
      });
    }

    if (e.target.innerText === "Furniture") {
      setRevealSellerData(() => {
        return forBestSellerData.filter((e) => {
          return e.id > 3;
        });
      });
    }
    if (e.target.innerText === "Electronic") {
      setRevealSellerData(() => {
        return forBestSellerData.filter((e) => {
          return e.id < 3;
        });
      });
    }
  };
  const ShopCategoryNav = (e) => {
    if (e.target.innerText === "Electronic") {
      setRevealShopCategoryData(forShopCategoryData);
    }
    if (e.target.innerText === "Baby") {
      setRevealShopCategoryData(() => {
        return forShopCategoryData.filter((e) => {
          return e.id > 3;
        });
      });
    }
    if (e.target.innerText === "Clothings") {
      setRevealShopCategoryData(() => {
        return forShopCategoryData.filter((e) => {
          return e.category === "shopcategory";
        });
      });
    }
    if (e.target.innerText === "Furniture") {
      setRevealShopCategoryData(() => {
        return forShopCategoryData.filter((e) => {
          return e.brand < 5;
        });
      });
    }
  };
  const handleNext = () => {
    carouselRef.current.next();
  };
  const handlePrev = () => {
    carouselRef.current.prev();
  };
  const screens = useBreakpoint();
  const getSlidesToShow = () => {
    if (screens.xxl) return 5;
    if (screens.xl) return 4;
    if (screens.lg) return 3;
    if (screens.md) return 2;
    if (screens.sm) return 2;
    if (screens.xs) return 1;
    return 1;
  };
  return (
    <div className="Carousel-Container">
      <nav className="Carousel-Nav">
        <h1 className="Carousel-Heading">{pageHeading ? pageHeading : null}</h1>
        <ul className="Carousel-Links">
          {revealBestSellerNavAssets
            ? revealBestSellerNavAssets.map((el, index) => (
                <li key={index} onClick={BestSellerNav}>
                  {el.title}
                </li>
              ))
            : null}
          {revealRatedProductNavAssets
            ? revealRatedProductNavAssets.map((el, index) => (
                <li key={index}>{el.title}</li>
              ))
            : null}
          {revealSeeOnTVNavAssets
            ? revealSeeOnTVNavAssets.map((el, index) => (
                <li key={index}>{el.title}</li>
              ))
            : null}
          {revealShopCategoryNavAssets
            ? revealShopCategoryNavAssets.map((el, index) => (
                <li key={index} onClick={ShopCategoryNav}>
                  {el.title}
                </li>
              ))
            : null}
        </ul>
      </nav>
      <Carousel ref={carouselRef} dots={false} slidesToShow={getSlidesToShow()}>
        {revealBestSellerData
          ? revealBestSellerData.map((el, index) => (
              <div
                key={index}
                className="card-container"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card
                  className="Card"
                  hoverable
                  cover={
                    <Fragment>
                      <img alt="example" src={el.src} id="see-on-tv-card-img" />
                      {hoveredIndex === index && ( // ShowOnHover div will be shown only when hoveredIndex equals to the current index
                        <div id="ShowOnHover">
                          <div id="TopShowOnHovered">
                            {hoverAssets.map((el) => (
                              <div key={el.id} className="showOnHoverImgBox">
                                <img src={el.src} alt={el.id} />
                              </div>
                            ))}
                          </div>
                          <div id="BottomShowOnHovered">
                            <button type="button">Add to Cart</button>
                          </div>
                        </div>
                      )}
                    </Fragment>
                  }
                >
                  <p className="brand">{el.brand}</p>
                  <h3 className="card-title">{el.title}</h3>
                  <div id="ratingdets">
                    <img src={el.rating} alt="" />
                    <img src={el.rating} alt="" />
                    <img src={el.rating} alt="" />
                    <img src={el.rating} alt="" />
                    <img src={el.rating} alt="" />
                    <p className="review-para">{el.ratingReview}</p>
                  </div>
                  <div id="pricingDets">
                    <b className="price-initial">{el.discount$}</b>
                    <s className="price-saled">{el.initial$}</s>
                  </div>
                </Card>
              </div>
            ))
          : null}
        {revealSeeOnTVData
          ? revealSeeOnTVData.map((el, index) => (
              <div
                key={index}
                className="card-container"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card
                  className="Card"
                  hoverable
                  cover={
                    <Fragment>
                      <img alt="example" src={el.src} id="see-on-tv-card-img" />
                      {hoveredIndex === index && ( // ShowOnHover div will be shown only when hoveredIndex equals to the current index
                        <div id="ShowOnHover">
                          <div id="TopShowOnHovered">
                            {hoverAssets.map((el) => (
                              <div key={el.id} className="showOnHoverImgBox">
                                <img src={el.src} alt={el.id} />
                              </div>
                            ))}
                          </div>
                          <div id="BottomShowOnHovered">
                            <button type="button">Add to Cart</button>
                          </div>
                        </div>
                      )}
                    </Fragment>
                  }
                >
                  <p className="brand">{el.brand}</p>
                  <h3 className="card-title">{el.title}</h3>
                  <div id="ratingdets">
                    <img src={el.rating} alt="" />
                    <img src={el.rating} alt="" />
                    <img src={el.rating} alt="" />
                    <img src={el.rating} alt="" />
                    <img src={el.rating} alt="" />
                    <p className="review-para">{el.ratingReview}</p>
                  </div>
                  <div id="pricingDets">
                    <b className="price-initial">{el.discount$}</b>
                    <s className="price-saled">{el.initial$}</s>
                  </div>
                </Card>
              </div>
            ))
          : null}
        {revealRatedProductData
          ? revealRatedProductData.map((el, index) => (
              <div
                key={index}
                className="card-container"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card
                  className="Card"
                  hoverable
                  cover={
                    <Fragment>
                      <img alt="example" src={el.src} id="see-on-tv-card-img" />
                      {hoveredIndex === index && ( // ShowOnHover div will be shown only when hoveredIndex equals to the current index
                        <div id="ShowOnHover">
                          <div id="TopShowOnHovered">
                            {hoverAssets.map((el) => (
                              <div key={el.id} className="showOnHoverImgBox">
                                <img src={el.src} alt={el.id} />
                              </div>
                            ))}
                          </div>
                          <div id="BottomShowOnHovered">
                            <button type="button">Add to Cart</button>
                          </div>
                        </div>
                      )}
                    </Fragment>
                  }
                >
                  <p className="brand">{el.brand}</p>
                  <h3 className="card-title">{el.title}</h3>
                  <div id="ratingdets">
                    <img src={el.rating} alt="" />
                    <img src={el.rating} alt="" />
                    <img src={el.rating} alt="" />
                    <img src={el.rating} alt="" />
                    <img src={el.rating} alt="" />
                    <p className="review-para">{el.ratingReview}</p>
                  </div>
                  <div id="pricingDets">
                    <b className="price-initial">{el.discount$}</b>
                    <s className="price-saled">{el.initial$}</s>
                  </div>
                </Card>
              </div>
            ))
          : null}
        {revealShopCategoryData
          ? revealShopCategoryData.map((el, index) => (
              <div
                key={index}
                className="card-container"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card
                  className="Card"
                  hoverable
                  cover={
                    <Fragment>
                      <img alt="example" src={el.src} id="see-on-tv-card-img" />
                      {hoveredIndex === index && ( // ShowOnHover div will be shown only when hoveredIndex equals to the current index
                        <div id="ShowOnHover">
                          <div id="TopShowOnHovered">
                            {hoverAssets.map((el) => (
                              <div key={el.id} className="showOnHoverImgBox">
                                <img src={el.src} alt={el.id} />
                              </div>
                            ))}
                          </div>
                          <div id="BottomShowOnHovered">
                            <button type="button">Add to Cart</button>
                          </div>
                        </div>
                      )}
                    </Fragment>
                  }
                >
                  <p className="brand">{el.brand}</p>
                  <h3 className="card-title">{el.title}</h3>
                  <div id="ratingdets">
                    <img src={el.rating} alt="" />
                    <img src={el.rating} alt="" />
                    <img src={el.rating} alt="" />
                    <img src={el.rating} alt="" />
                    <img src={el.rating} alt="" />
                    <p className="review-para">{el.ratingReview}</p>
                  </div>
                  <div id="pricingDets">
                    <b className="price-initial">{el.discount$}</b>
                    <s className="price-saled">{el.initial$}</s>
                  </div>
                </Card>
              </div>
            ))
          : null}
      </Carousel>
      <Button
        shape="circle"
        icon={<LeftOutlined />}
        onClick={handlePrev}
        id="NavLeftButton"
      />
      <Button
        shape="circle"
        icon={<RightOutlined />}
        onClick={handleNext}
        id="NavRightButton"
      />
    </div>
  );
};

export default CardsCarousel;
