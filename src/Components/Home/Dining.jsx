import React from "react";
import flower from "../../assets/dining-flower.png";
import flower2 from "../../assets/dining-flower2.png";
import dining from "../../assets/dining.png";
import affordability from "../../assets/affordability.png";
import friendly from "../../assets/budgetfriendly.png";
import discounted from "../../assets/discount.png";
import title1 from "../../assets/dining-title1.png";
import title2 from "../../assets/dining-title2.png";

const Dining = () => {
  const list = [
    {
      pic: affordability,
      title: "Affordability Matters",
      content:
        "Recognizing the importance of affordability, especially during challenging economic times.",
    },
    {
      pic: friendly,
      title: "Budget-Friendly Dining",
      content:
        "Foodzee guarantees an enjoyable dining  experience without straining your budget.",
    },
    {
      pic: discounted,
      title: "Discounted Delights",
      content:
        "Experience delightful meals at discounted prices,  making dining out an accessible for all.",
    },
    {
      pic: friendly,
      title: "Double Impact",
      content:
        "Every meal not only satisfies your taste buds  but also contributes to reducing food waste.",
    },
  ];
  return (
    <div className="dining">
      <div className="container">
        <div className="dining_header row  align-items-center text-center">
          <div className="col-lg-2 ">
            <img className=" d-none d-xl-block " src={flower} alt="" />
          </div>
          <div className="col-lg-8 px-5">
            <h2>
              <span>Dining Out </span>with a{" "}
              <img className="d-xl-none" src={title1} alt="" /> Purpose{" "}
              <img className=" d-xl-none" src={title2} alt="" />
            </h2>

            <p>
              For diners, Foodzee is your gateway to dining out with a purpose.
              We recognize that affordability is crucial, especially during
              challenging economic times. Foodzee ensures that you can relish
              dining out without straining your budget. It's about enjoying
              fantastic meals at discounted prices while participating in a
              meaningful initiative to reduce food waste.
            </p>
          </div>
          <div className="col-lg-2 ">
            <img className=" d-none d-xl-block" src={flower2} alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 order-2 order-lg-1 mb-4 mb-lg-0">
            <div className="d-flex align-items-center flex-column gap-4">
              {list.slice(0, 2).map((data, index) => (
                <div key={index} className="dining_card">
                  <img src={data.pic} alt="" />
                  <h6> {data.title}</h6>
                  <p>{data.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 order-1 order-lg-2">
            <img className="img-fluid mb-4 mb-lg-0" src={dining} alt="" />
          </div>
          <div className="col-lg-4 order-3 order-lg-3">
            <div className="d-flex align-items-center flex-column gap-4">
              {list.slice(2, 4).map((data, index) => (
                <div key={index} className="dining_card">
                  <img src={data.pic} alt="" />
                  <h6> {data.title}</h6>
                  <p>{data.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dining;
