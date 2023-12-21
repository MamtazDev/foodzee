import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import Header from "../Components/Shared/Header";
import JoinPower from "../Components/Shared/JoinPower";
import Footer from "../Components/Shared/footer/Footer";
import { MyContext } from "../MyContext";

const Main = () => {
  const [activeButton, setActiveButton] = useState("customer");
  const modalRef = useRef();
  const pathName = useLocation();
  const handleButtonClick = (buttonType) => {
    modalRef.current.click();
    setActiveButton(buttonType);
  };

  const info = {
    activeButton,
    handleButtonClick,
    modalRef,
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.click();
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [modalRef]);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    scrollToTop();
  }, [pathName]);

  return (
    <MyContext.Provider value={info}>
      {pathName.pathname === "/create-account" ? null : <Header />}
      <Outlet />
      {pathName.pathname === "/create-account" ? null : <JoinPower />}
      {pathName.pathname === "/create-account" ? null : <Footer />}
      {pathName.pathname === "/create-account" ? null : <ScrollToTop />}
    </MyContext.Provider>
  );
};

export default Main;
