import React from "react";

const Economic = () => {
  const list = [
    {
      title: "Discounted Meals",
      content:
        "Diners enjoy discounted meals, ensuring affordability without compromising quality.",
      background:
        "linear-gradient(257deg, #FCECDD 8.12%, rgba(217, 217, 217, 0.00) 80.06%)",
      padding: "52px 38px 49px",
    },
    {
      title: "Cost of Living Crisis",
      content:
        "Many individuals and families are grappling with the challenges of a cost of living crisis.",
      background:
        "linear-gradient(180deg, #DEFFF5 0%, rgba(217, 217, 217, 0.00) 100%)",
      padding: "52px 38px 85px",
    },
    {
      title: "Budget Strain",
      content:
        "It can be hard to find the funds   for many to enjoy sit down meals at their favorite restaurants.",
      background:
        " linear-gradient(238deg, #FFE7CF 6.71%, rgba(217, 217, 217, 0.00) 69.23%)",
      padding: "52px 38px 49px",
    },
    {
      title: "Economic Stress Relief",
      content:
        "By providing discounted meals, Foodzee aims to alleviate some of the economic stress faced by many individuals.",
      background:
        "linear-gradient(110deg, #DEFFF5 -5.9%, rgba(217, 217, 217, 0.00) 81.67%)",
      padding: "52px 38px 49px",
    },
    {
      title: "Foodzee's Solution",
      content:
        "Foodzee steps in to address this challenge by providing budget-friendly dining choices.",
      background:
        "linear-gradient(180deg, rgba(217, 217, 217, 0.00) 0%, #FFECDA 100%)",
      padding: "52px 38px 85px",
    },
    {
      title: "Essential Affordable Options",
      content:
        "Affordable dining options become essential for maintaining a reasonable quality of life.",
      background:
        " linear-gradient(115deg, rgba(132, 211, 162, 0.31) 2.68%, rgba(217, 217, 217, 0.00) 88.45%)",
      padding: "52px 38px 49px",
    },
  ];
  return (
    <div className="economic">
      <div className="container">
        <h1>
          <span>Economic</span> Realities
        </h1>

        <div className="row align-items-center g-4">
          {list.map((data, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div
                className="economic_card"
                style={{
                  background: `${data?.background}`,
                  padding: `${data?.padding}`,
                }}
              >
                <p className="title">{data.title}</p>
                <p className="content f_inter">{data.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Economic;
