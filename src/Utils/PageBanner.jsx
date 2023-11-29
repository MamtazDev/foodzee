import React from "react";
import arrow from "../assets/arrow.png";

const PageBanner = ({ title }) => {
  return (
    <div className="page_banner">
      <div className="container">
        <h1 clas>{title}</h1>
        <div className="d-flex align-items-center justify-content-center gap-2">
          <p className="parent">Home</p>
          <img src={arrow} alt="" />
          <p className="child">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
