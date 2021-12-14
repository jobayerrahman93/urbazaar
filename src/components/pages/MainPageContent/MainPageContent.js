import React from "react";
import SearchBanner from '../MainPageContent/SearchBanner/SearchBanner';
import "./MainPageContent.css";
import ProductCategories from "./ProductCategories/ProductCategories";
const MainPageContent = () => {
  return (
    <>
  <SearchBanner></SearchBanner>
    <ProductCategories></ProductCategories>
    </>
  );
};

export default MainPageContent;
