import React from "react";
import impact from "../../assets/impact.png";
import hand from "../../assets/hand.png";
import save from "../../assets/save.png";
import avoid from "../../assets/avoid.png";

const Impact = () => {
  const list = [
    {
      pic: hand,
      title: "HAND PICKED DEALS UPDATED DAILY.",
    },
    {
      pic: save,
      title: "SAVE ON THE ORIGINAL PRICE AND ENJOY.",
    },
    {
      pic: avoid,
      title: "AVOID WASTE AND HELP THE PLANET.",
    },
  ];
  return (
    <div className="impact">
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-6">
            <h2>
              <span>Maximizing</span> Impact and Revenue
            </h2>
            <p className="f_inter">
              For restaurant owners, Foodzee provides a platform to maximize the
              utilization of surplus food. We understand that food waste is not
              only an environmental issue but also a financial one. By offering
              time-limited promotions on excess food, we empower restaurants to
              fill empty tables, recover costs, all while contributing to a
              sustainable future.{" "}
            </p>
            <div className="d-flex flex-column gap-3 ">
              {list.map((data, index) => (
                <div className="d-flex align-items-center gap-3" key={index}>
                  <img src={data.pic} alt="" />
                  <p className="title f_inter">{data.title}</p>
                </div>
              ))}
            </div>
            <button className="d-none d-lg-block">
              Reserve Your Meal Now!
            </button>
            <div className="d-flex gap-2 align-items-center d-lg-none mb-5">
              <button>Download the App</button>
              <button id="special_btn">Learn more</button>
            </div>
          </div>
          <div className="col-xl-6">
            <img className="img-fluid" src={impact} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
