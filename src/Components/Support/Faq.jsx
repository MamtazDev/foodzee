import plus from "../../assets/faq-plus.png";
import minus from "../../assets/faq-minus.png";
import { useState } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);
  const accoprdionData = [
    {
      ques: "What is Foodzee's mission?",
      ans: "",
    },
    {
      ques: "How does Foodzee help restaurants reduce food waste?",
      ans: "",
    },
    {
      ques: " Why should consumers use the Foodzee app?",
      ans: "",
    },
    {
      ques: "Is the Foodzee app available on both Android and iOS devices?",
      ans: "",
    },
    {
      ques: "How does the website complement the Foodzee app?",
      ans: "",
    },
    {
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
                index === isOpen && "card_after "
              } accordion_card mb-4`}
            >
              <div
                onClick={() => setIsOpen(index === isOpen ? null : index)}
                className={`d-flex align-items-center justify-content-between ${
                  index === isOpen && "mb-3"
                }`}
              >
                <p className="question ">Q. {data.ques}</p>
                <img src={isOpen === index ? minus : plus} alt="icon" />
              </div>
              {isOpen === index && (
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
                index === isOpen && "card_after "
              } accordion_card mb-4`}
            >
              <div
                onClick={() => setIsOpen(index === isOpen ? null : index)}
                className={`d-flex align-items-center justify-content-between ${
                  index === isOpen && "mb-3"
                }`}
              >
                <p className="question ">Q. {data.ques}</p>
                <img src={isOpen === index ? minus : plus} alt="icon" />
              </div>
              {isOpen === index && (
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
      </div>
    </div>
  );
};

export default Faq;
