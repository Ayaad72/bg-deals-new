import React from "react";
import "./PageAdd.css";
// import styled from "styled-components";
import pageAddAssets from "../../assets/JSONDATA/PageAddAssets";
import { Link } from "react-router-dom";

const PageAdd = (props) => {
  // const custom
  return (
    <div
      className="page-add-division"
      style={{ backgroundImage: `url(${props.bg})` }}
    >
      {pageAddAssets.map((el, index) => (
        <div id="content" key={index}>
          <p className="priceDetails">
            <span className="priceDetailsLight">{el.priceDets}</span>
            <span className="priceDetailsBold">{el.priceDetsTwo}.</span>
          </p>
          <h1>{el.title}</h1>
          <h1>{el.titileTwo}</h1>
          <button type="button" id="buttonPageAdd">
            <span>
              <Link to={"/products"}>Shop</Link>
            </span>{" "}
            Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default PageAdd;
