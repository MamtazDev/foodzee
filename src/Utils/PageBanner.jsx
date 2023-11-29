import React from "react";
import arrow from "../assets/arrow.png";
import pageOrnamentsOne from "../assets/right-mint-img.png"
import pageOrnamentsTwo from "../assets/left-jilapi-img.png"

const PageBanner = ({ title }) => {
  return (
    <div className="page_banner position-relative">
      <div className="page_ornaments_one position-absolute">
        <img src={pageOrnamentsOne} alt="ornaments" />
      </div>
      <div className="container">
        <h1 className="fs_60 text-black fw-bold mb_45">{title}</h1>
        <div className="d-flex align-items-center justify-content-center gap-2">
          <p className="text-black fs_18 fw-medium">Home</p>
          <img src={arrow} alt="arrow-icon" />
          <p className="fs_18 fw-semibold text-capitalize f_clr_00">{title}</p>
        </div>
      </div>
      <div className="page_ornaments_two position-absolute">
        <img src={pageOrnamentsTwo} alt="ornaments" />
      </div>
    </div>
  );
};

export default PageBanner;
