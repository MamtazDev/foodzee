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
import HomeTwo from './HomeTwo';

const Home = () => {
  const modalRef = useRef();
  const { activeButton } = useContext(MyContext)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.click();
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [modalRef]);

  return (
    <>
      {
        activeButton === 'customer' && <>
          <AddModal modalRef={modalRef} />
          <Banner />
          <Quarter />
          <Sustainability />
          <Impact />
          <Dining />
          <Discover />
          <Opportunity />
        </>
      }

      {
        activeButton === 'restaurant' && <HomeTwo />
      }

    </>
  );
};

export default Home;
