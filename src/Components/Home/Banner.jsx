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
        <div className="d-flex align-items-center gap-2">
          <button>
            <img src={googlePlay} alt="" />
          </button>
          <button>
            <img src={appStore} alt="" />
          </button>
        </div>
        <div className="text-center">
          <button>
            <img src={downArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
