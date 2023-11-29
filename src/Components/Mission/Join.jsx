import waste from "../../assets/waste.png";

const Join = () => {
  return (
    <div className="join">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img className="img-fluid" src={waste} alt="" />
          </div>
          <div className="col-lg-6 text-center">
            <p>
              Our mission isn't just about reducing food waste; it's about
              making dining out more sustainable and cost-effective. It's about
              embracing the power of community and shared values. We're here to
              invite you to join us in this mission.
            </p>
            <button>Join Our Mission</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
