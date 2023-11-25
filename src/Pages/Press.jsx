import React from "react";
import PageBanner from "../Utils/PageBanner";
import Welcome from "../Components/Press/Welcome";
import Latest from "../Components/Press/Latest";
import Review from "../Components/Press/Review";

const Press = () => {
  return (
    <div>
      <PageBanner title="Press" />
      <Welcome />
      <Latest />
      <Review />
    </div>
  );
};

export default Press;
