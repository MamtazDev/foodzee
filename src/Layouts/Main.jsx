import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/footer/Footer";
import JoinPower from "../Components/Shared/JoinPower";
import { MyContext } from "../MyContext";

const Main = () => {
  const [activeButton, setActiveButton] = useState('customer');
  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const info = {
    activeButton, handleButtonClick
  }

  return (
    <MyContext.Provider value={info}>
      <Header />
      <Outlet />
      <JoinPower />
      <Footer />
    </MyContext.Provider>
  );
};

export default Main;
