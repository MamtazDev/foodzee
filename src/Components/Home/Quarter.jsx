import React from "react";
import indulge from "../../assets/indulge.png";
import indulgeHov from "../../assets/indulge-hov.png";
import combat from "../../assets/combact.png";
import combatHov from "../../assets/combat-hov.png";
import tastegood from "../../assets/tastegood.png";
import tastegoodHov from "../../assets/tastegood-hov.png";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const Quarter = () => {
  const list = [
    {
      pic: indulge,
      picHov: indulgeHov,
      title: "Indulge in Savings",
      subtitle:
        "Savor delicious dishes while sparing your wallet. Our exclusive, time-limited deals ensure you enjoy incredible meals without breaking the bank.",
    },
    {
      pic: combat,
      picHov: combatHov,
      title: "Combat Food Waste",
      subtitle:
        "Combat food waste as you relish delicious dishes, prioritizing sustainability and minimizing environmental impact.",
    },
    {
      pic: tastegood,
      picHov: tastegoodHov,
      title: "Taste Good, Do Good",
      subtitle:
        "Indulge in flavorful meals while making a positive impact by supporting our commitment to reducing food waste and promoting sustainability.",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="quarter">
      <div className="container">
        <h2>
          Over <span>Three-Quarter</span> Of All Food Is Wasted
        </h2>
        <div className="d-none d-md-block">
          <div className="row gy-4">
            {list.map((data, index) => (
              <div className=" col-md-6 col-xl-4" key={index}>
                <div className="quarter_card d-flex align-items-center flex-column h-100">
                  <img className="default" src={data.pic} alt="" />
                  <img className="hov" src={data.picHov} alt="" />

                  <div className="flex-grow-1">
                    <h3>{data.title}</h3>
                    <p>{data.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="d-block d-md-none">
          <Carousel
            arrows={false}
            showDots={true}
            responsive={responsive}
            className="pb-5 "
          >
            {list.map((data, index) => (
              <div className="" key={index}>
                <div className="quarter_card d-flex align-items-center flex-column h-100">
                  <img className="default" src={data.pic} alt="" />
                  <img className="hov" src={data.picHov} alt="" />

                  <div className="flex-grow-1">
                    <h3>{data.title}</h3>
                    <p>{data.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Quarter;
