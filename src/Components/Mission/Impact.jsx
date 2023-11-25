import impact from "../../assets/env-impact.png";

const Impact = () => {
  return (
    <div className="env_impact">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1>
              The <span>Environmental</span> Impact
            </h1>
            <div className="green_box">
              <p>
                The scale of food waste is staggering. Each year, millions of
                tons of food end up in landfills, emitting harmful greenhouse
                gases and wasting precious resources like water and energy. This
                impact on the environment is both alarming and unsustainable.
              </p>
            </div>
            <div className="pink_box">
              <p>
                Our mission seeks to counteract this negative trend by ensuring
                that edible excess food finds its way to those who need it. By
                reducing food waste, we take a significant step towards
                environmental preservation.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <img className="img-fluid" src={impact} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
