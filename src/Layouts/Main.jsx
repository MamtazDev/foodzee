import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/footer/Footer";
import JoinPower from "../Components/Shared/JoinPower";
import { MyContext } from "../MyContext";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

const Main = () => {
  const [activeButton, setActiveButton] = useState("customer");
  const modalRef = useRef();
  const handleButtonClick = (buttonType) => {
    modalRef.current.click();
    setActiveButton(buttonType);
  };

  const pathName = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  useEffect(() => {
    scrollToTop();
  }, [pathName]);

  return (
    <MyContext.Provider value={info}>
      <Header />
      <Outlet />
      <JoinPower />
      <Footer />
      <ScrollToTop />
    </MyContext.Provider>
  );
};

export default Main;
