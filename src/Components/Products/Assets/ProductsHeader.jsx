import React, { useContext } from "react";
import ProductsDropDown from "./ProductsDropDown";
import "./ProductsStyling.css";
import { Row, Col, Grid } from "antd";
import { CardToggle } from "../../../Pages/ProductsPage";
import { ToggleAdvertisedMenu } from "../../../App";
import { useNavigate } from "react-router-dom";
const { useBreakpoint } = Grid;

const ProductsHeader = () => {
  const screens = useBreakpoint();
  const { setToggleMenu } = useContext(ToggleAdvertisedMenu);
  const { setToggleListGrid, x } = useContext(CardToggle);
  const navigate = useNavigate(); // Use useNavigate directly inside the component

  const navigateToShopPage = () => {
    navigate("/shoppage"); // Call navigate function with the desired path
  };

  return (
    <React.Fragment>
      <Row id="ProductsHeaderRow">
        <Col xs={24} className="productsHeadings">
          <div id="ProductsHeading">
            <h1>Laptops and Accessories</h1>
          </div>
          <div id="ProductsPara">
            <p>
              Shop laptops, desktops, monitors, tablets, PC gaming, hard drives
              and storage, accessories and more
            </p>
          </div>
        </Col>

        <Col xs={24} className="productsNav">
          <div id="leftDrops">
            {x ? (
              screens.lg ? null : (
                <button
                  id="filterButtonShopPage"
                  type="button"
                  onClick={() =>
                    setToggleMenu((prev) => (prev === false ? true : false))
                  }
                >
                  Filters
                </button>
              )
            ) : (
              <button
                id="filterButtonShopPage"
                type="button"
                onClick={navigateToShopPage}
              >
                Filters
              </button>
            )}

            <ProductsDropDown title={"Price"} />
            <ProductsDropDown title={"Brand"} />
            <ProductsDropDown title={"Color"} />
          </div>
          <div id="RightDrops">
            <ProductsDropDown title={"Default Sorting"} />
            <div id="SortingOptions">
              <button type="button" onClick={() => setToggleListGrid(true)}>
                List
              </button>
              <button type="button" onClick={() => setToggleListGrid(false)}>
                Grid
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ProductsHeader;
