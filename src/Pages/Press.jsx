import React from "react";
import PageBanner from "../Utils/PageBanner";
import Welcome from "../Components/Press/Welcome";
import Latest from "../Components/Press/Latest";

const Press = () => {
  return (
    <div>
      <PageBanner title="Press" />
      <Welcome />
      <Latest/>
    </div>
  );
};

export default Press;
