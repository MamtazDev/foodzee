import React from "react";
import indulge from "../../assets/indulge.png";
import indulgeHov from "../../assets/indulge-hov.png";
import combat from "../../assets/combact.png";
import combatHov from "../../assets/combat-hov.png";
import tastegood from "../../assets/tastegood.png";
import tastegoodHov from "../../assets/tastegood-hov.png";

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
  return (
    <div className="quarter">
      <div className="container">
        <h2>
          Over <span>Three-Quarter</span> Of All Food Is Wasted
        </h2>
        <div className="row">
          {list.map((data, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="quarter_card d-flex align-items-center flex-column h-100">
                <img src={data.pic} alt="" />

                <div className="flex-grow-1">
                  <h3>{data.title}</h3>
                  <p>{data.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quarter;
