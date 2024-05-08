import React from "react";
import "./ProductsStyling.css"

const ProductsDropDown = (props) => {
  return (
    <select name="" id="ShoPageDropDown">
      <option value={props.title}>{props.title}</option>
    </select>
  );
};

export default ProductsDropDown;
