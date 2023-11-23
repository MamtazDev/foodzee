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
        "Sustainability and affordability working together  <br className='d-none d-lg-block' />  seamlessly",
    },
    {
      pic: economic,
      title: "Economic Responsibility",
      subtitle:
        "Creating an answer that blesses businesses with savings <br className='d-none d-lg-block' />  and customers with affordable choice",
    },
    {
      pic: reduce,
      title: "Reduce Food Waste",
      subtitle:
        "In a world where the environmental impact of our choices is <br className='d-none d-lg-block' />  more crucial than ever, every effort to reduce waste counts",
    },
  ];
  return (
    <div className="sustainability">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img className="img-fluid" src={sustainability} alt="" />
          </div>
          <div className="col-lg-6">
            <h2>
              <span>Sustainability</span> and Savings
            </h2>
            <p className="content">
              Striving for a Future Where Every Choice is Both Economically Wise
              and Environmentally Responsible.
            </p>
            <div className="d-flex flex-column gap-4">
              {list.map((data, index) => (
                <div key={index} className="d-flex align-items-center gap-5">
                  <img src={data.pic} alt="" />
                  <div>
                    <p className="title">{data.title}</p>
                    {/* <p className="subtitle">{data.subtitle}</p> */}
                    <p
                      className="subtitle"
                      dangerouslySetInnerHTML={{ __html: data.subtitle }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button>Download Foodzee Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
