import plus from "../../assets/faq-plus.png";
import minus from "../../assets/faq-minus.png";
import { useState } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);
  const accoprdionData = [
    {
      id: 1,
      ques: "What is Foodzee's mission?",
      ans: "",
    },
    {
      id: 2,
      ques: "How does Foodzee help restaurants reduce food waste?",
      ans: "",
    },
    {
      id: 3,
      ques: " Why should consumers use the Foodzee app?",
      ans: "",
    },
    {
      id: 4,
      ques: "Is the Foodzee app available on both Android and iOS devices?",
      ans: "",
    },
    {
      id: 5,
      ques: "How does the website complement the Foodzee app?",
      ans: "",
    },
    {
      id: 6,
      ques: "How can restaurants and diners engage with Foodzee through the website?",
      ans: "",
    },
  ];

  return (
    <div className="faq">
      <div className="container">
        <h1>
          <span>FAQ</span>
        </h1>
        <div className="mb-5">
          <h6>General Question</h6>
          {accoprdionData.slice(0, 3).map((data, index) => (
            <div
              key={index}
              className={`${
                data?.id === isOpen && "card_after "
              } accordion_card mb-4`}
            >
              <div
                onClick={() => setIsOpen(data?.id === isOpen ? null : data?.id)}
                className={`d-flex align-items-center justify-content-between ${
                  data?.id === isOpen && "mb-3"
                }`}
              >
                <p className="question ">Q. {data.ques}</p>
                <img src={isOpen === data?.id ? minus : plus} alt="icon" />
              </div>
              {isOpen === data?.id && (
                <p className="answer f_inter">
                  Foodzee's mission is twofold: to assist restaurants in
                  reducing food waste through time-bound promotions on excess
                  food and to provide consumers with cost-effective dining
                  options, particularly during economic downturns.
                  
                </p>
              )}
            </div>
          ))}
        </div>
        <div>
          <h6>Account & Support </h6>
          {accoprdionData.slice(3, 6).map((data, index) => (
            <div
              key={index}
              className={`${
                data?.id === isOpen && "card_after "
              } accordion_card mb-4`}
            >
              <div
                onClick={() => setIsOpen(data?.id === isOpen ? null : data?.id)}
                className={`d-flex align-items-center justify-content-between ${
                  data?.id === isOpen && "mb-3"
                }`}
              >
                <p className="question ">Q. {data.ques}</p>
                <img src={isOpen === data?.id ? minus : plus} alt="icon" />
              </div>
              {isOpen === data?.id && (
                <p className="answer f_inter">
                  Foodzee's mission is twofold: to assist restaurants in
                  reducing food waste through time-bound promotions on excess
                  food and to provide consumers with cost-effective dining
                  options, particularly during economic downturns.
                </p>
              )}
            </div>
          ))}
        </div>

        <button className="f_inter">
          Still, have any questions? Contact us
        </button>
      </div>
    </div>
  );
};

export default Faq;
