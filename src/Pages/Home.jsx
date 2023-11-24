import React from "react";
import Banner from "../Components/Home/Banner";
import Quarter from "../Components/Home/Quarter";
import Sustainability from "../Components/Home/Sustainability";
import Impact from "../Components/Home/Impact";
import Dining from "../Components/Home/Dining";
import Discover from "../Components/Home/Discover";
import Opportunity from "../Components/Home/Opportunity";
import JoinPower from "../Components/Home/JoinPower";

const Home = () => {
  return (
    <div>
      <Banner />
      <Quarter />
      <Sustainability />
      <Impact />
      <Dining />
      <Discover/>
      <Opportunity/>
      <JoinPower/>
    </div>
  );
};

export default Home;
