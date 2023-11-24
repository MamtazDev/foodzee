import pizza from "../../assets/pizza.png";

const OurMission = () => {
  return (
    <div className="our_mission">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h6 className="f_inter">
              A Journey of Sustainability and Affordability
            </h6>
            <h1>
              <span>Reducing Food</span> Waste, One Meal at a Time
            </h1>
            <p className="f_inter">
              At Foodzee, we're not just a company; we're on a mission, and it's
              a mission with a purpose. Our goal is to create a positive impact
              on the environment and put a smile on your face by reducing food
              waste and offering you budget-friendly dining options. Our mission
              is both simple and powerful: we aim to reduce food waste by making
              time-bound promotions on excess food and provide consumers like
              you with access to affordable dining experiences.
            </p>
            <button className="f_inter">Join Our Mission</button>
          </div>
          <div className="col-lg-6 text-end">
            <img className="img-fluid" src={pizza} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
