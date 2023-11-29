import waste from "../../assets/waste.png";

const Download = () => {
  return (
    <div className="download">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center d-none d-lg-block">
            <p>
              By participating in the Foodzee community, you become part of
              something more significant than just a meal. You become part of a
              movement, a collective effort to reduce food waste, support local
              businesses and provide affordable dining options for everyone.
            </p>
            <button>Download the app </button>
          </div>

          <div className="col-lg-6">
            <img className="img-fluid mb-5 mb-lg-0" src={waste} alt="" />
          </div>

          <div className="col-lg-6 text-center d-block d-lg-none">
            <p>
              By participating in the Foodzee community, you become part of
              something more significant than just a meal. You become part of a
              movement, a collective effort to reduce food waste, support local
              businesses and provide affordable dining options for everyone.
            </p>
            <button>Download the app </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Download;
