import samsungIMG from "../../assets/IMAGES/BestSellerImgOne.svg";
import sony from "../../assets/IMAGES/BestSellerImgTwo.svg";
import sonyTwo from "../../assets/IMAGES/BestSelerImgThree.svg";
import Eastsport from "../../assets/IMAGES/BestSellerImgFour.svg";
import rolex from "../../assets/IMAGES/BestSellerImgFiveEggs.svg";
import lastIMG from "../../assets/IMAGES/topRatedProductLastImg.svg";
import BestSellersRatingStar from "../../assets/IMAGES/BestSellersRatingStar.svg";

const pageHeadingTopR = "Top-rated products";

const NavAssetsTopR = [
  {
    title: "See All",
    category: "ratedproducts",
    id: 1,
  },
];

const RatedProductAssets = [
  {
    src: samsungIMG,
    brand: "SAMSUNG",
    title: "Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double ",
    rating: BestSellersRatingStar,
    ratingReview: "3,014 reviews",
    discount$: "$32.50",
    initial$: "$45",
    category: "ratedproducts",
    id: 1,
  },
  {
    src: sony,
    brand: "SONY",
    title: "KINLO Hydrating Golden Facial Mist with Sweet",
    rating: BestSellersRatingStar,
    ratingReview: "3,014 reviews",
    discount$: "$32.50",
    initial$: "$45",
    category: "ratedproducts",
    id: 2,
  },
  {
    src: sonyTwo,
    brand: "SONY",
    title: "Graco SlimFit 3-in-1 Car Seat, Saves Space in Your",
    rating: BestSellersRatingStar,
    ratingReview: "3,014 reviews",
    discount$: "$399.50",
    initial$: "$45",
    category: "ratedproducts",
    id: 3,
  },
  {
    src: Eastsport,
    brand: "Eastsport",
    title: "Decathlon Rockrider ST100, 21 Speed Mountain Bike,",
    rating: BestSellersRatingStar,
    ratingReview: "3,014 reviews",
    discount$: "$32.50",
    initial$: "$45",
    category: "ratedproducts",
    id: 4,
  },
  {
    src: rolex,
    brand: "rolex",
    title: "Marketside Large Cage Free Brown Eggs, 36 Oz, 18 Ct",
    rating: BestSellersRatingStar,
    ratingReview: "3,014 reviews",
    discount$: "$18.124",
    initial$: "$45",
    category: "ratedproducts",
    id: 5,
  },
  {
    src: lastIMG,
    brand: "rolex",
    title: "Yaheetech Lift Top Coffee Table w/Hidden Storage",
    rating: BestSellersRatingStar,
    ratingReview: "3,014 reviews",
    discount$: "$18.124",
    initial$: "$45",
    category: "ratedproducts",
    id: 5,
  },
];

export { pageHeadingTopR, NavAssetsTopR, RatedProductAssets };
