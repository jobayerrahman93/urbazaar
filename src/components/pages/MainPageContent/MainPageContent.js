import React from "react";
import SearchBanner from '../MainPageContent/SearchBanner/SearchBanner';
import "./MainPageContent.css";
import ProductCategories from "./ProductCategories/ProductCategories";
const MainPageContent = () => {
  return (
    <>
<div className="cart-section">
            
            <div className="cart bg-primary">
              <h4 className="text-center pt-2 mb-0 ">
                <i className="fas fa-shopping-bag text-light"></i>
              </h4>
              <div className="bg-light">
                <p className="text-center mb-1">Items: 0</p>
              </div>
              <div className="text-center"><p className="mb-0 text-light">৳: 0</p></div>
            </div>
        
        </div>
  <SearchBanner></SearchBanner>
    <ProductCategories></ProductCategories>
    </>
  );
};

export default MainPageContent;
