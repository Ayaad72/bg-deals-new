import React, { useContext } from "react";
import "./ShopPageAdvertisement.css";
import rateIcon from "../../assets/IMAGES/BestSellersRatingStar.svg";
import unrateIcon from "../../assets/IMAGES/unrate.svg";
import HeaderColoredLinez from "../ColoredHr/ColoredHr";
import { Row, Col, Grid } from "antd";
import { carouselAssets } from "../../assets/JSONDATA/ShopAdvertisementAssets";
import Hero from "../Hero/Hero";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import ProductsPage from "../../Pages/ProductsPage";
import Sider from "./Sider/Sider";
import { ToggleAdvertisedMenu } from "../../App";
const { useBreakpoint } = Grid;

const ShopPageAdvertisement = () => {
  const screens = useBreakpoint();
  const { togglemenu, setToggleMenu } = useContext(ToggleAdvertisedMenu);

  return (
    <div id="ShopPageAdvertisement">
      <div id="secondColoredLine">
        <HeaderColoredLinez />
      </div>
      <Row justify={"center"}>
        <Col xs={24} md={20} className="breadCrumbProductsPage">
          <BreadCrumbs />
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={22}>
          <Hero
            heroAssetsdata={carouselAssets}
            category={carouselAssets[0].category}
          />
        </Col>
      </Row>
      <Row id="advertisePageMenuRow">
        <Col
          xs={0}
          lg={5}
          className={`ShopPageMenuColumn ${
            !screens.lg && togglemenu ? "collapseable" : null
          }`}
        >
          <div id="closedMenu">
            <button type="button" onClick={() => setToggleMenu(false)}>
              X
            </button>
          </div>

          <div id="shopPageMenuCol">
            <Sider
              title="Department"
              label1="Electronics"
              label2="Computers & Accessories"
              label3="Computers & Tablets"
              child1="Desktops"
              child2="Laptops"
              child3="Tablets"
            />
            <Sider
              title="CPU Manufacturer"
              label1={"AMD"}
              AMDProducts={33}
              label2={"Apple"}
              AppleProducts={23}
              label3={"Intel"}
              IntelProducts={3}
              label4={"NVIDIA"}
              NVIDIAProducts={323}
              label5={"Qualcomm"}
              QualcommProducts={213}
              btnTXTRow2={"Show"}
            />
            {/*      */}
            <Sider
              title="Memory Capacity"
              label1={"16 GB"}
              Products16GB={22}
              label2={"32 GB"}
              Products32GB={232}
              label3={"64 GB"}
              Products64GB={13}
              label4={"128 GB"}
              Products128GB={43}
              label5={"1 TB"}
              Products1TBGB={99}
              btnTXTRow2={"Show"}
            />
            {/*    */}
            <Sider
              title="Screen Size"
              label1={"17 Inches & Above"}
              Products16Inches={22}
              label2={"16 to 16.9 Inches"}
              Products16To16_9Inches={232}
              label3={"15 to 15.9 Inches"}
              Products15To15_9Inches={13}
              label4={"14 to 14.9 Inches"}
              Products14To14_9Inches={43}
              label5={"13 to 13.9 Inches"}
              Products13To13_9Inches={99}
              btnTXTRow2={"Show"}
            />
            {/*   */}
            <Sider
              title="Display Resolution"
              label1={"1024 x 600 pixel"}
              Products600={22}
              label2={"1024 x 768 pixel"}
              Products768={232}
              label3={"1280 x 720 pixel"}
              Products720={13}
              label4={"1280 x 800 pixel"}
              Products800={43}
              label5={"1366 x 768 pixel "}
              Products1366_768={99}
              btnTXTRow2={"Show"}
            />
            {/* Customer Rating */}
            <Sider
              title="Customer Rating"
              rateIcon={rateIcon}
              unrateIcon={unrateIcon}
              Products={22}
              btnTXTRow2={"Show"}
            />
            {/*  */}
            <Sider
              title="Condition"
              new={"New"}
              newProd={33}
              used={"Used"}
              usedProd={2}
              Renewed={"Renewed"}
              renewedProd={33}
            />
          </div>
        </Col>
        <Col xs={24} lg={19} id="shopAdvertisePageColMain">
          <ProductsPage toggleBtn={true} />
        </Col>
      </Row>
    </div>
  );
};

export default ShopPageAdvertisement;
