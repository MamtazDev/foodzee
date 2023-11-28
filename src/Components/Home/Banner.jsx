import React from "react";
import googlePlay from "../../assets/google-play.png";
import appStore from "../../assets/appstore.png";
import downArrow from "../../assets/down-arrow.png";


const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <h1>
          <span>Thrifty Bites</span> , Zero Waste Foodzee Deals
        </h1>
        <p>
          Economical Eats, Timely Treats: Unleash Savings and Slash Food Waste
          with Foodzee's Exclusive Deals!
        </p>
        <button className="download_btn f_inter">Download Now!</button>
        <div className="d-flex  align-items-start  gap-2">
          <button className="p-0">
            <img className="img-fluid" src={googlePlay} alt="" />
          </button>
          <button className="p-0">
            <img className="img-fluid" src={appStore} alt="" />
          </button>
        </div>
        <div className="bannerarrowDown_wrapper text-center">
          <button id="bannerarrowDown">
            <div className="arrow_down"></div>
            <div className="arrow_down2"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
