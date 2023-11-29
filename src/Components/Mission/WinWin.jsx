import cake from "../../assets/cake.png";
import egg from "../../assets/egg.png";
import soya from "../../assets/soya.png";
import curry from "../../assets/curry.png";

const WinWin = () => {
  return (
    <div className="winwin">
      <div className="container">
        <div className="winwin_header">
          <h1 className="fs_60">
            A <span>Win-Win</span> for Restaurants.
          </h1>
          <p className="f_inter fs-6">
            For restaurants, Foodzee offers a lifeline. We understand that it's
            not easy to predict customer demand accurately, leading to excess
            food that often goes unsold. With Foodzee, restaurants can now
            promote these surplus meals, ensuring that they don't go to waste
            and that revenue is maximized. By filling empty tables during
            off-peak hours, restaurants can recover costs, reduce food waste,
            and contribute to sustainability.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img className="img-fluid" src={cake} alt="" />
              </div>
              <div className="col-lg-6 d-flex flex-column gap-4 mb-4 mb-lg-0">
                <img className="img-fluid" src={egg} alt="" />
                <img className="img-fluid" src={soya} alt="" />
              </div>

            </div>
          </div>
          <div className="col-lg-5">
            <img className="img-fluid" src={curry} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinWin;
