import React from "react";
import sustainability from "../../assets/sustainability.png";
import harmony from "../../assets/harmony.png";
import economic from "../../assets/economic.png";
import reduce from "../../assets/reduce.png";

const Sustainability = () => {
  const list = [
    {
      pic: harmony,
      title: "Harmony of Ideals",
      subtitle:
        "Sustainability and affordability working together  <br class='d-none d-lg-block' >  seamlessly",
    },
    {
      pic: economic,
      title: "Economic Responsibility",
      subtitle:
        "Creating an answer that blesses businesses with savings <br class='d-none d-lg-block' >  and customers with affordable choice",
    },
    {
      pic: reduce,
      title: "Reduce Food Waste",
      subtitle:
        "In a world where the environmental impact of our choices is <br class='d-none d-lg-block' >  more crucial than ever, every effort to reduce waste counts",
    },
  ];
  return (
    <div className="sustainability">
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-6 order-xl-2">
            <h2>
              <span>Sustainability</span> and Savings
            </h2>
            <p className="content">
              Striving for a Future Where Every Choice is Both Economically Wise
              and Environmentally Responsible.
            </p>
            <div className="d-flex flex-column gap-4">
              {list.map((data, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center gap-3 gap-lg-5"
                >
                  <img src={data.pic} alt="" />
                  <div>
                    <p className="title">{data.title}</p>
                    {/* <p className="subtitle">{data.subtitle}</p> */}
                    <p
                      className="subtitle f_inter"
                      dangerouslySetInnerHTML={{ __html: data.subtitle }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button className="f_inter d-none d-lg-block">
              Download Foodzee Now!
            </button>
            <div className="d-flex gap-2 align-items-center d-block d-lg-none mb-5">
              <button className="f_inter">Register your business</button>
              <button className="f_inter" id="learn_btn">
                Learn more
              </button>
            </div>
          </div>
          <div className="col-xl-6 order-xl-1 ">
            <img className="img-fluid" src={sustainability} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
