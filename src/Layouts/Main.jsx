import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/footer/Footer";
import JoinPower from "../Components/Shared/JoinPower";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <JoinPower/>
      <Footer />
    </div>
  );
};

export default Main;
