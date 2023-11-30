import React from "react";
import Banner from "../Components/Home/Banner";
import Achivement from "../Components/HomeTwo/Achivement";
import UnlockAchivement from "../Components/HomeTwo/UnlockAchivement";
import WhyChoose from "../Components/HomeTwo/WhyChoose";
import JoinFoodzee from "../Components/HomeTwo/JoinFoodzee";
import FoodzaaCachy from "../Components/HomeTwo/FoodzaaCachy";
import ResturantPortal from "../Components/HomeTwo/ResturantPortal";
import PartnerGrowth from "../Components/HomeTwo/PartnerGrowth";
import AddModal from "../Components/Modal/AddModal";

const HomeTwo = ({ ModalCompo }) => {
    console.log(ModalCompo,'oooooo');
  return (
    <>
      {ModalCompo}
      <Banner />
      <Achivement />
      <UnlockAchivement />
      <WhyChoose />
      <JoinFoodzee />
      <FoodzaaCachy />
      <ResturantPortal />
      <PartnerGrowth />
    </>
  );
};

export default HomeTwo;
