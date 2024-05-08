import React, { useState } from "react";
import "./Assets/ProductsStyling.css";
import ProductsHeader from "./Assets/ProductsHeader";
import {
  productAssets,
  pricingAssets,
} from "../../assets/JSONDATA/ProductAssets";
import { NavLink, useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import { Card } from "antd";
const { Meta } = Card;


const Products = ({ toggleView, }) => {
  const Navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const recordsperPage = 10;
  const lastIndex = currentPage * recordsperPage;
  const firstIndex = lastIndex - recordsperPage;
  const records = productAssets.slice(firstIndex, lastIndex);
  const nPags = Math.ceil(productAssets.length / recordsperPage);
  const numbers = [...Array(nPags + 1).keys()].slice(1);


  return (
    <React.Fragment>
      <Row justify={"center"} gutter={[]}>
        <Col xs={24}>
          <ProductsHeader />
        </Col>
      </Row>
      <Row justify={"center"}>
        {toggleView ? (
          <Row justify={"center"} gutter={[0, 50]}>
            {records.map((el, index, array) => (
              <Col xs={24} key={index} className="ListViewColProducts" onClick={() => Navigate(`/shoppagesingle/${index}`, { state: { product: el, sample: array } })}>
                <div id="listViewImgContainer">
                  <img src={el.src} alt="" />
                </div>
                <div id="listViewMainContent">
                  <div id="productContentListView">
                    <h5>{el.brand}</h5>
                    <h3>{el.title}</h3>
                    <div id="rateDivisionProducts">
                      {[...Array(5)].map((_, index2) => (
                        <img src={el.rateStar} alt="" key={index2} />
                      ))}
                      <span>{el.reviews}</span>
                    </div>
                  </div>
                  <div id="listDetailsProducts">
                    <ul>
                      <li>{el.listdetail1}</li>
                      <li>{el.listdetail2}</li>
                      <li>{el.listdetail3}</li>
                      <li>{el.listdetail4}</li>
                    </ul>
                  </div>
                </div>
                <div id="purchasingAndPricing">
                  <div id="pricingDivisionProducts">
                    <b>{el.price}</b>
                    <s>{el.saledprice}</s>
                  </div>
                  <button type="button">Add To Cart</button>
                  <div id="pricinglower">
                    {pricingAssets.map((el, index) => (
                      <span key={index}>
                        <img src={el.icon} alt="" />
                        {el.title}
                      </span>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          records.map((el, index, array) => (
            <Col key={index} xs={12} sm={8} md={6} onClick={() => Navigate(`/shoppagesingle/${index}`, { state: { product: el, sample: array } })}>
              <Card
                id="ProductsCard"
                hoverable
                cover={<img alt="example" src={el.src} />}
              >
                <Meta description={el.brand} />
                <Meta title={el.title} />
                <div id="ReviewsContent">
                  <img src={el.rateStar} alt="" />
                  <img src={el.rateStar} alt="" />
                  <img src={el.rateStar} alt="" />
                  <img src={el.rateStar} alt="" />
                  <img src={el.rateStar} alt="" />
                  <Meta description={el.reviews} />
                </div>
                <div id="PricingProducts">
                  <Meta title={el.price} />
                  <Meta description={el.saledprice} />
                </div>
              </Card>
            </Col>
          ))
        )}
      </Row>
      <Row justify={"center"}>
        <Col xs={24}>
          <nav id="ProductsPagination" className="pagination">
            <ul>
              <NavLink onClick={prePage}>
                <li>Prev</li>
              </NavLink>
              {numbers.map((n, i) => {
                if (n >= currentPage - 2 && n <= currentPage + 2) {
                  return (
                    <NavLink
                      key={i}
                      onClick={() => changeCPage(n)}
                      className={`${currentPage === n ? "active" : "noactive"}`}
                    >
                      <li>{n}</li>
                    </NavLink>
                  );
                }
                return null;
              })}
              <NavLink onClick={nxtPage}>
                <li>Next</li>
              </NavLink>
            </ul>
          </nav>
        </Col>
      </Row>
      <Row justify={"center"} id="colsShedular">
        <Col xs={24} id="productsLengthInformation">
          <h4>{`${firstIndex} – ${lastIndex} of ${productAssets.length - 1
            }+ properties found`}</h4>
        </Col>
      </Row>
    </React.Fragment >
  );
  function nxtPage() {
    if (currentPage !== nPags) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
};

export default Products;
