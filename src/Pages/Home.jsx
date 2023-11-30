import React, { useContext, useEffect, useRef } from "react";
import Banner from "../Components/Home/Banner";
import Quarter from "../Components/Home/Quarter";
import Sustainability from "../Components/Home/Sustainability";
import Impact from "../Components/Home/Impact";
import Dining from "../Components/Home/Dining";
import Discover from "../Components/Home/Discover";
import Opportunity from "../Components/Home/Opportunity";
import AddModal from "../Components/Modal/AddModal";
import { MyContext } from "../MyContext";
import HomeTwo from "./HomeTwo";
import Achivement from "../Components/HomeTwo/Achivement";
import UnlockAchivement from "../Components/HomeTwo/UnlockAchivement";
import WhyChoose from "../Components/HomeTwo/WhyChoose";
import JoinFoodzee from "../Components/HomeTwo/JoinFoodzee";
import FoodzaaCachy from "../Components/HomeTwo/FoodzaaCachy";
import ResturantPortal from "../Components/HomeTwo/ResturantPortal";
import PartnerGrowth from "../Components/HomeTwo/PartnerGrowth";

const Home = () => {
  const { activeButton, modalRef } = useContext(MyContext);

  return (
    <>
      {activeButton === "customer" && (
        <>
          <AddModal modalRef={modalRef} />
          <Banner />
          <Quarter />
          <Sustainability />
          <Impact />
          <Dining />
          <Discover />
          <Opportunity />
        </>
      )}

      {activeButton === "restaurant" && (
        <>
          <AddModal modalRef={modalRef} />
          <Banner />
          <Achivement />
          <UnlockAchivement />
          <WhyChoose />
          <JoinFoodzee />
          <FoodzaaCachy />
          <ResturantPortal />
          <PartnerGrowth />
        </>
      )}
    </>
  );
};

export default Home;
