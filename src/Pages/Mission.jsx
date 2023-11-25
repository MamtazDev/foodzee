import React from "react";
import PageBanner from "../Utils/PageBanner";
import OurMission from "../Components/Mission/OurMission";
import Vision from "../Components/Mission/Vision";
import Challenge from "../Components/Mission/Challenge";
import Solution from "../Components/Mission/Solution";
import WinWin from "../Components/Mission/WinWin";
import Economic from "../Components/Mission/Economic";
import Impact from "../Components/Mission/Impact";
import Difference from "../Components/Mission/Difference";
import Join from "../Components/Mission/Join";
import Download from "../Components/Mission/Download";

const Mission = () => {
  return (
    <div>
      <PageBanner title="Our Mission" />
      <OurMission />
      <Vision />
      <Challenge />
      <Solution />
      <WinWin />
      <Join />
      <Download />
      <Difference />
      <Impact />
      <Economic />
    </div>
  );
};

export default Mission;
