import React from "react";
import { Row, Col } from "antd";
import bgOne from "../assets/IMAGES/Headphones.svg";
import bgTwo from "../assets/IMAGES/pageAddTwo.svg";
import Hero from "../Components/Hero/Hero";
import Slider from "../Components/Slider/Slider";
import Cards from "../Components/Cards/Cards";
import PageAdd from "../Components/PageAdd/PageAdd";
import CardsCarousel from "../Components/HomePageCardCarousel/CardsCarousel";
import BlogPost from "../Components/BlogPosts/BlogPost";
import Layout from "../Layout/Layout";
import heroAssets from "../assets/JSONDATA/HeroAssets";
import {
  pageHeading,
  NavAssets,
  SellerAssets,
} from "../assets/JSONDATA/BestSellerAssets";
import {
  pageHeadingTV,
  NavAssetsTV,
  seeOnTvAssets,
} from "../assets/JSONDATA/SeeontvAssets";
import {
  pageHeadingShopC,
  NavAssetsShopC,
  shopCategoriesAssetsOne,
  shopcategoriesAssetsTwo,
} from "../assets/JSONDATA/ShopCategoriesAssets";
import blogAssets from "../assets/JSONDATA/BlogPostAssets";
import MajorSavingsAssets from "../assets/JSONDATA/CardAssets";
import SliderDetails from "../assets/JSONDATA/SliderAsssets";
import {
  pageHeadingTopR,
  NavAssetsTopR,
  RatedProductAssets,
} from "../assets/JSONDATA/RatedProductAssets";

const HomePage = () => {
  return (
    <Layout>
      <Row justify={"center"}>
        <Col xs={24} md={20}>
          <Hero heroAssetsdata={heroAssets} />
          <Slider JSONDATA={SliderDetails} />
          <Cards JSONDATA={MajorSavingsAssets} />
          <CardsCarousel
            pageHeading={pageHeading}
            JSONData={SellerAssets}
            NavAssets={NavAssets}
          />
          <PageAdd bg={bgOne} />
          <CardsCarousel
            pageHeading={pageHeadingTV}
            JSONData={seeOnTvAssets}
            NavAssets={NavAssetsTV}
          />
          <CardsCarousel
            pageHeading={pageHeadingShopC}
            JSONData={shopCategoriesAssetsOne}
            NavAssets={NavAssetsShopC}
          />
          <CardsCarousel JSONData={shopcategoriesAssetsTwo} />
          <PageAdd bg={bgTwo} />
          <CardsCarousel
            pageHeading={pageHeadingTopR}
            JSONData={RatedProductAssets}
            NavAssets={NavAssetsTopR}
          />
          <BlogPost JSONDATA={blogAssets} />
        </Col>
      </Row>
    </Layout>
  );
};

export default HomePage;
