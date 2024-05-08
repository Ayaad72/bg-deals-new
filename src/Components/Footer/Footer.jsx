import React from "react";
import "./Footer.css";
import phoneCall from "../../assets/IMAGES/phone-call.svg";
import mailPic from "../../assets/IMAGES/FooterMailPic.svg";
import { Row, Col } from "antd";
import DropDownFooter from "./Assets/DropDownFooter";

const Footer = ({ socialAssets, itTechAssets, weAcceptAssets }) => {
  return (
    <div className="footer-container">
      <Row justify={"center"}>
        <Col xs={24} md={20}>
          <Row className="Footer-row-One">
            <Col xs={24} className="footerTopCols">
              <h1 id="footerLogo">Subscribe and get 20% discount.</h1>
            </Col>
            <Col xs={24} className="footerTopCols">
              <form action="#" id="footerSubscriptionForm">
                <input
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  placeholder="Your email address"
                />
                <label htmlFor="userEmail">
                  <input type="submit" value="Subscribe" id="subBTN" />
                </label>
              </form>
            </Col>
          </Row>
          {/*  // ************************************************* // */}
          <Row className="Footer-row-two" justify={"space-between"}>
            <Col xs={24} sm={12} md={7} lg={6} className="footer-cols">
              <h1 className="footerColHeadings">Contact Us</h1>
              <div className="contentCols">
                <div id="Footercontent">
                  <div id="imgDivision">
                    <img src={phoneCall} alt="phone" />
                  </div>
                  <div>
                    <p className="textBold">Monday-Friday: 08am-9pm</p>
                    <p>+(1) 123 456 7890</p>
                  </div>
                </div>
                {/* //////////////////////////////////////////////////////////////// */}
                <div id="Footercontent">
                  <div id="imgDivision">
                    <img src={mailPic} alt="phone" />
                  </div>
                  <div>
                    <p className="textBold">Need help with your order?</p>
                    <p>support@damndeal.com</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={5} lg={4} className="footer-cols">
              <h1 className="footerColHeadings">About Zenmart</h1>
              <div className="contentCols">
                <p>Track Your Order</p>
                <p className="productGuidesPara">Product Guides</p>
                <p>Wishlists</p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={7} lg={4} className="footer-cols">
              <h1 className="footerColHeadings">Customer Support</h1>
              <div className="contentCols">
                <p>Contact Us</p>
                <p>Help Centre</p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={5} lg={4} className="footer-cols">
              <h1 className="footerColHeadings">Services</h1>
              <div className="contentCols">
                <p>Trade-In Program</p>
                <p>Electronics Recycling</p>
                <p>Best Buy Health</p>
              </div>
            </Col>
            <Col xs={24} md={12} lg={5} className="footer-cols">
              <h1 className="footerColHeadings">Follow us</h1>
              <div className="contentCols">
                <div id="social-container">
                  {socialAssets.map((el) => (
                    <img src={el.src} alt="" key={el.id} />
                  ))}
                </div>
                <h3 id="mobileAppsHeading">Mobile Apps</h3>
                {itTechAssets.map((el) => (
                  <div id="ITBrand" key={el.id}>
                    <img src={el.src} alt="" />
                    <p>{el.title}</p>
                  </div>
                ))}
                <h4 id="weAcceptheading">We accept</h4>
                <div id="weAcceptimages">
                  {weAcceptAssets.map((el) => (
                    <img src={el.src} alt="" key={el.id} />
                  ))}
                </div>
              </div>
            </Col>
          </Row>
          {/*  // ************************************************* // */}
          <Row>
            <Col xs={24} className="footerBottom">
              <div id="leftiData">
                <h6>© 2022 Zeomart. All Rights Reserved</h6>
                <ul>
                  <li>Privacy</li>
                  <li>Terms</li>
                  <li>Sitemap</li>
                </ul>
              </div>
              <div id="rightiData">
                <DropDownFooter
                  title={"Currency "}
                  default={"USD"}
                  currencyOne={"Rupees"}
                  currencyTwo={"Dirham"}
                />
                <DropDownFooter
                  title={"Language "}
                  default={"English"}
                  currencyOne={"Spanish"}
                  currencyTwo={"Russian"}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
