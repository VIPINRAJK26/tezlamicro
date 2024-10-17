import React, { Component } from "react";
import "./StoreLocator.css";
import Locator from "../components/storelocator/SearchBar";

const StoreLocator = () => {
  return (
    <div className="py-md-5 py-3 container  ">
      <div className="locator-top pb-5">
        <div className="locator-top-head text-center">
          <h2 className="fw-bold ">We are here to Serve you</h2>
        </div>
      </div>
      <div className="locator-bottom ">
        <div className="locator-img text-center">
          <img src="/store_locator.png" className="img-fluid" alt="" />
        </div>
        <Locator />
      </div>
    </div>
  );
};

export default StoreLocator;

{/* <div className="locator-img col-md-4 col-12 text-center">
        <img src="/store_locator.png" alt="" />
      </div>
      <div className="search-location text-center pt-4 col-md-8 col-12 ">
        <div className="location-head text-center pb-3">
          <h1>Store Locator</h1>
          <p>Locate out nearest store and experience our Products first hand</p>
          <div className="text-center pt-4 ">
            <SearchBar />
          </div>
        </div>
      </div> */}