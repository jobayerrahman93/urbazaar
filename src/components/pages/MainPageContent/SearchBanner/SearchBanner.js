import React from "react";
import './SearchBanner.css';

const SearchBanner = () => {
  return (
    <>
      <div className="banner-section p-0">
      <span class="d-block search-area">
    <input class="form-control w-50 mx-auto " type="search" placeholder="Search for products" aria-label="Search"/>
      </span>
      </div>

      {/* chal dal ekhon khulnay section */}

      <div className="row mx-0 my-5">
        <div className="col-md-6 px-0">
          <img
            className="w-100"
            src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D87823&q=low&v=1&m=588&webp=1"
          />
        </div>
        <div className="col-md-6 px-0">
          <img
            className="w-100"
            src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D88716&q=low&v=1&m=588&webp=1"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBanner;
