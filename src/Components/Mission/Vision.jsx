import kabab from "../../assets/kabab.png";
import snacks from "../../assets/snacks.png";
import salmon from "../../assets/salmon.png";
import vision from "../../assets/vision.png";

const Vision = () => {
  return (
    <div className="vision">
      <div className="vision_inner">
        <div className="container">
          <div className="section-title d-block d-lg-none ">
            <h6 className="f_inter title_btn">
              Creating a Win-Win World Through Sustainable Dining
            </h6>

            <h1>
              <span>A Vision</span>  of Sustainability
            </h1>

            <p className="f_inter">
              We believe that through sustainable dining practices and the
              efficient utilization of available resources, we can create a
              win-win situation for everyone involved, from restaurants to
              diners. Sustainability isn't just a buzzword for us; it's a core
              part of our mission. We envision a world where every meal
              counts, not just in terms of flavour and satisfaction but also
              in terms of its impact on the environment.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex align-items-start gap-3">
                <img className="img-fluid mt-5 mb-3 mb-lg-0" src={kabab} alt="" />
                <div className="d-none d-lg-block">
                  <img className="mb-3" src={snacks} alt="" />
                  <img className="" src={salmon} alt="" />
                </div>
              </div>
              <div className="d-block d-md-none">
                <img className="mb-3" src={snacks} alt="" />
              </div>
              <div className="d-block d-md-none mb-3 mb-lg-0">
                <img className="" src={salmon} alt="" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="section-title d-none d-lg-block">
                <h6 className="f_inter title_btn">
                  Creating a Win-Win World Through Sustainable Dining
                </h6>

                <h1>
                  <span>A Vision</span>  of Sustainability
                </h1>

                <p className="f_inter">
                  We believe that through sustainable dining practices and the
                  efficient utilization of available resources, we can create a
                  win-win situation for everyone involved, from restaurants to
                  diners. Sustainability isn't just a buzzword for us; it's a core
                  part of our mission. We envision a world where every meal
                  counts, not just in terms of flavour and satisfaction but also
                  in terms of its impact on the environment.
                </p>
              </div>

              <div className="d-block d-md-none">
                <div className="res-note">
                  <img src={vision} alt="" />
                  <p className="text-white">
                    It's about more than just taste; every meal is a deliberate step
                    toward reducing our ecological footprint and making a positive
                    impact on the planet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="note d-none d-lg-block">
            <img src={vision} alt="" />
            <p>
              It's about more than just taste; every meal is a deliberate step
              toward reducing our ecological footprint and making a positive
              impact on the planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
