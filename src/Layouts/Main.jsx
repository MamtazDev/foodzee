import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
