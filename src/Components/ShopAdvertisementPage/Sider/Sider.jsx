import React, { Fragment } from "react";
import "./SiderStyles.css";
import { Checkbox } from "antd";
import { LeftOutlined } from "@ant-design/icons";

const Sider = (props) => {

  return (
    <Fragment>
      {props.title === "Department" ? (
        <div className="boxShopmenu">
          <div id="titleDivision">
            <h3>{props.title}</h3>
            <span id="shopPageheadingLine"></span>
          </div>
          <label htmlFor="">
            <LeftOutlined /> {props.label1}
          </label>
          <label htmlFor="">
            <LeftOutlined />
            {props.label2}
          </label>
          <select name="" id="shopPageAdvertiseFirstSelectBox">
            <option value={props.label3}>{props.label3}</option>
            <option value={props.child1}>{props.child1}</option>
            <option value={props.child2}>{props.child2}</option>
            <option value={props.child3}>{props.child3}</option>
          </select>
        </div>
      ) : (
        ""
      )}

      {props.title === "CPU Manufacturer" ? (
        <div className="boxShopmenu">
          <div id="titleDivision">
            <h3>{props.title}</h3>
            <span id="shopPageheadingLine"></span>
          </div>
          <Checkbox>
            <h4>{props.label1}</h4>
            <h5>{props.AMDProducts}</h5>
          </Checkbox>
          <Checkbox>
            <h4>{props.label2}</h4>
            <h5>{props.AppleProducts}</h5>
          </Checkbox>
          <Checkbox>
            <h4>{props.label3}</h4>
            <h5>{props.IntelProducts}</h5>
          </Checkbox>
          <Checkbox>
            <h4>{props.label4}</h4>
            <h5>{props.NVIDIAProducts}</h5>
          </Checkbox>
          <Checkbox>
            <h4>{props.label5}</h4>
            <h5>{props.QualcommProducts}</h5>
          </Checkbox>
          <button className="shopPageMenuSeeAllBTN" type="button">
            <span>{props.btnTXTRow2}</span> More
          </button>
        </div>
      ) : (
        ""
      )}

      {props.title === "Memory Capacity" ? (
        <div className="boxShopmenu">
          <div id="titleDivision">
            <h3>{props.title}</h3>
            <span id="shopPageheadingLine"></span>
          </div>
          <Checkbox>
            <h4>{props.label1}</h4>
            <h5>{props.Products16GB}</h5>
          </Checkbox>
          <Checkbox>
            <h4>{props.label2}</h4>
            <h5>{props.Products32GB}</h5>
          </Checkbox>
          <Checkbox>
            <h4>{props.label3}</h4>
            <h5>{props.Products64GB}</h5>
          </Checkbox>
          <Checkbox>
            <h4>{props.label4}</h4>
            <h5>{props.Products128GB}</h5>
          </Checkbox>
          <Checkbox>
            <h4>{props.label5}</h4>
            <h5>{props.Products1TBGB}</h5>
          </Checkbox>
          <button className="shopPageMenuSeeAllBTN" type="button">
            <span>{props.btnTXTRow2}</span> More
          </button>
        </div>
      ) : (
        ""
      )}

      {props.title === "Screen Size" ? (
        <div className="boxShopmenu">
          <div id="titleDivision">
            <h3>{props.title}</h3>
            <span id="shopPageheadingLine"></span>
          </div>
          <Checkbox>
            <h4>{props.label1}</h4>
            <h5>{props.Products16Inches}</h5>
          </Checkbox>
          <Checkbox>
            <h4>{props.label2}</h4>
            <h5>{props.Products16To16_9Inches}</h5>
          </Checkbox>
          <Checkbox>
            <h4>{props.label3}</h4>
            <h5>{props.Products15To15_9Inches}</h5>
          </Checkbox>
          <Checkbox>
            <h4>{props.label4}</h4>
            <h5>{props.Products14To14_9Inches}</h5>
          </Checkbox>
          <Checkbox>
            <h4>{props.label5}</h4>
            <h5>{props.Products13To13_9Inches}</h5>
          </Checkbox>
          <button className="shopPageMenuSeeAllBTN" type="button">
            <span>{props.btnTXTRow2}</span> More
          </button>
        </div>
      ) : (
        ""
      )}

      {props.title === "Display Resolution" ? (
        <div className="boxShopmenu">
          <div id="titleDivision">
            <h3>{props.title}</h3>
            <span id="shopPageheadingLine"></span>
          </div>
          <Checkbox>
            <h4>{props.label1}</h4>
            <h5>{props.Products600}</h5>
          </Checkbox>
          <Checkbox>
            <h4>{props.label2}</h4>
            <h5>{props.Products768}</h5>
          </Checkbox>
          <Checkbox>
            <h4>{props.label3}</h4>
            <h5>{props.Products720}</h5>
          </Checkbox>
          <Checkbox>
            <h4>{props.label4}</h4>
            <h5>{props.Products800}</h5>
          </Checkbox>
          <Checkbox>
            <h4>{props.label5}</h4>
            <h5>{props.Products1366_768}</h5>
          </Checkbox>
          <button className="shopPageMenuSeeAllBTN" type="button">
            <span>{props.btnTXTRow2}</span> More
          </button>
        </div>
      ) : (
        ""
      )}

      {props.title === "Customer Rating" ? (
        <div className="boxShopmenu">
          <div id="titleDivision">
            <h3>{props.title}</h3>
            <span id="shopPageheadingLine"></span>
          </div>
          <Checkbox>
            <div>
              <img src={props.rateIcon} alt="" />
              <img src={props.rateIcon} alt="" />
              <img src={props.rateIcon} alt="" />
              <img src={props.rateIcon} alt="" />
              <img src={props.unrateIcon} alt="" />
            </div>
            <h5>{props.Products}</h5>
          </Checkbox>
          <Checkbox>
            <div>
              <img src={props.rateIcon} alt="" />
              <img src={props.rateIcon} alt="" />
              <img src={props.rateIcon} alt="" />
              <img src={props.unrateIcon} alt="" />
              <img src={props.unrateIcon} alt="" />
            </div>
            <h5>{props.Products}</h5>
          </Checkbox>
          <Checkbox>
            <div>
              <img src={props.rateIcon} alt="" />
              <img src={props.rateIcon} alt="" />
              <img src={props.unrateIcon} alt="" />
              <img src={props.unrateIcon} alt="" />
              <img src={props.unrateIcon} alt="" />
            </div>
            <h5>{props.Products}</h5>
          </Checkbox>
          <Checkbox>
            <div>
              <img src={props.rateIcon} alt="" />
              <img src={props.unrateIcon} alt="" />
              <img src={props.unrateIcon} alt="" />
              <img src={props.unrateIcon} alt="" />
              <img src={props.unrateIcon} alt="" />
            </div>
            <h5>{props.Products}</h5>
          </Checkbox>

          <button className="shopPageMenuSeeAllBTN" type="button">
            <span>{props.btnTXTRow2}</span> More
          </button>
        </div>
      ) : (
        ""
      )}

      {props.title === "Condition" ? (
        <div className="boxShopmenu">
          <div id="titleDivision">
            <h3>{props.title}</h3>
            <span id="shopPageheadingLine"></span>
          </div>

          <Checkbox>
            <h4>{props.new}</h4>
            <h5>{props.newProd}</h5>
          </Checkbox>

          <Checkbox>
            <h4>{props.used}</h4>
            <h5>{props.usedProd}</h5>
          </Checkbox>

          <Checkbox>
            <h4>{props.Renewed}</h4>
            <h5>{props.renewedProd}</h5>
          </Checkbox>

          <button className="shopPageMenuSeeAllBTN" type="button">
            <span>{props.btnTXTRow2}</span> More
          </button>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Sider;
