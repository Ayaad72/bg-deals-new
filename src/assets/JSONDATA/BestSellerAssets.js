import samsungIMG from "../../assets/IMAGES/BestSellerImgOne.svg";
import sony from "../../assets/IMAGES/BestSellerImgTwo.svg";
import sonyTwo from "../../assets/IMAGES/BestSelerImgThree.svg";
import Eastsport from "../../assets/IMAGES/BestSellerImgFour.svg";
import rolex from "../../assets/IMAGES/BestSellerImgFiveEggs.svg";
import BestSellersRatingStar from "../../assets/IMAGES/BestSellersRatingStar.svg";
import heartHovered from "../../assets/IMAGES/Hearthovered.svg";
import EyeHovered from "../../assets/IMAGES/Eye.svg";
import barHovered from "../../assets/IMAGES/Bar.svg";

const pageHeading = "Best Sellers";

const NavAssets = [
  {
    title: "Top 20",
    category: "bestseller",
    id: 1,
  },
  {
    title: "Baby",
    category: "bestseller",
    id: 2,
  },
  {
    title: "Furniture",
    category: "bestseller",
    id: 3,
  },
  {
    title: "Electronic",
    category: "bestseller",
    id: 4,
  },
  {
    title: "All",
    category: "bestseller",
    id: 5,
  },
];

const SellerAssets = [
  {
    src: samsungIMG,
    brand: "SAMSUNG",
    title: "Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double ",
    rating: BestSellersRatingStar,
    ratingReview: "3,014 reviews",
    discount$: "$32.50",
    initial$: "$45",
    category: "bestseller",
    id: 1,
  },
  {
    src: sony,
    brand: "SONY",
    title: "Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double ",
    rating: BestSellersRatingStar,
    ratingReview: "3,014 reviews",
    discount$: "$32.50",
    category: "bestseller",
    initial$: "$45",
    id: 2,
  },
  {
    src: sonyTwo,
    brand: "SONY",
    title: "Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double ",
    rating: BestSellersRatingStar,
    ratingReview: "3,014 reviews",
    discount$: "$32.50",
    category: "bestseller",
    initial$: "$45",
    id: 3,
  },
  {
    src: Eastsport,
    brand: "Eastsport",
    title: "Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double ",
    rating: BestSellersRatingStar,
    ratingReview: "3,014 reviews",
    discount$: "$32.50",
    category: "bestseller",
    initial$: "$45",
    id: 4,
  },
  {
    src: rolex,
    brand: "rolex",
    title: "Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double ",
    rating: BestSellersRatingStar,
    ratingReview: "3,014 reviews",
    discount$: "$32.50",
    category: "bestseller",
    initial$: "$45",
    id: 5,
  },
];

const hoverAssets = [
  { src: heartHovered, id: 1 },
  { src: EyeHovered, id: 2 },
  { src: barHovered, id: 3 },
];

export { pageHeading, NavAssets, SellerAssets, hoverAssets };
