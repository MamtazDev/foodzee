import React from "react";
import PageBanner from "../Utils/PageBanner";
import OurMission from "../Components/Mission/OurMission";
import Vision from "../Components/Mission/Vision";

const Mission = () => {
  return (
    <div>
      <PageBanner title="Our Mission" />
      <OurMission />
      <Vision />
    </div>
  );
};

export default Mission;
