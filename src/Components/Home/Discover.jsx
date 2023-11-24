import React from "react";
import discover from "../../assets/discover.png";

const Discover = () => {
  return (
    <div className="discover">
      <div className="container">
        <h1>
          {" "}
          <span>Discover</span> the Foodzee App
        </h1>
        <p className="f_inter">
          The heart of Foodzee beats within our mobile app, which is available
          on both Android and iOS devices. It's your tool for finding incredible
          deals at restaurants that share our vision. The app connects you with
          time-bound promotions, allowing you to enjoy fantastic meals while
          reducing food waste. It's a win-win for you and the planet.
        </p>
        <button className="f_inter">Explore Foodzee Now</button>
        <img className="img-fluid" src={discover} alt="" />
      </div>
    </div>
  );
};

export default Discover;
