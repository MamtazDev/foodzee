import welcome from "../../assets/press.png";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img className="img-fluid" src={welcome} alt="" />
          </div>
          <div className="col-lg-6">
            <h1>
              Welcome to <span>Foodzee's</span> Press Page
            </h1>
            <p className="mb-5">
              your gateway to staying informed about our mission, initiatives,
              and the impact we're making in the world of sustainable dining. At
              Foodzee, we're committed to transparency and keeping our community
              updated on our efforts to reduce food waste and offer affordable
              dining options.
            </p>
            <h6>Discover What's New</h6>
            <p>
              On this page, you'll find a wealth of information, from our latest
              press releases to media coverage and inspiring success stories. We
              believe that our commitment to sustainability and cost-effective
              dining should be shared with our community. It's not just about
              what we do; it's about how we're making a positive change in the
              world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
