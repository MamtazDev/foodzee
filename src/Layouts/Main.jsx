import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header";
import Footer from "../Components/Shared/footer/Footer";
import JoinPower from "../Components/Shared/JoinPower";
import { MyContext } from "../MyContext";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

const Main = () => {
  const [activeButton, setActiveButton] = useState('customer');
  const modalRef = useRef();
  const handleButtonClick = (buttonType) => {
    modalRef.current.click();
    setActiveButton(buttonType);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.click();
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [modalRef]);

  const info = {
    activeButton, handleButtonClick, modalRef
  }

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
