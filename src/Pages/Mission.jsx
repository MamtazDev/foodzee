import React from "react";
import PageBanner from "../Utils/PageBanner";
import OurMission from "../Components/Mission/OurMission";
import Vision from "../Components/Mission/Vision";
import Challenge from "../Components/Mission/Challenge";
import Solution from "../Components/Mission/Solution";

const Mission = () => {
  return (
    <div>
      <PageBanner title="Our Mission" />
      <OurMission />
      <Vision />
      <Challenge />
      <Solution />
    </div>
  );
};

export default Mission;
