import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../MyContext";
import appStore from "../../assets/appstore.png";
import googlePlay from "../../assets/google-play.png";

const Banner = () => {
  const { activeButton } = useContext(MyContext)
  return (
    <div className={activeButton === 'customer' ? "banner" : "banner2"}>
      <div className="container">
        {
          activeButton === 'customer' && (
            <>
              <h1>
                <span>Thrifty Bites</span> , Zero Waste Foodzee Deals
              </h1>
              <p>
                Economical Eats, Timely Treats: Unleash Savings and Slash Food Waste
                with Foodzee's Exclusive Deals!
              </p>
              <button className="download_btn f_inter">

                <Link className="text-decoration-none text-white" to={"https://onelink.to/r8ddne"} target='_blank'>
                  Download Now!
                </Link>


              </button>
              <div className="d-flex  align-items-start  gap-2">

                <button className="p-0">
                  {
                    activeButton === 'customer' && (
                      <Link to={"https://onelink.to/r8ddne"}>
                        <img className="img-fluid" src={googlePlay} alt="" />
                      </Link>
                    )
                  }
                  {
                    activeButton === 'restaurant' && (
                      <Link to={"https://onelink.to/vezrej"}>
                        <img className="img-fluid" src={googlePlay} alt="" />
                      </Link>
                    )
                  }
                </button>
                <button className="p-0">
                  {
                    activeButton === 'customer' && (
                      <Link to={"https://onelink.to/r8ddne"}>
                        <img className="img-fluid" src={appStore} alt="" />
                      </Link>
                    )
                  }
                  {
                    activeButton === 'restaurant' && (
                      <Link to={"https://onelink.to/vezrej"}>
                        <img className="img-fluid" src={appStore} alt="" />
                      </Link>
                    )
                  }
                </button>
              </div>
              <div className="bannerarrowDown_wrapper text-center">
                <button id="bannerarrowDown">
                  <div className="arrow_down"></div>
                  <div className="arrow_down2"></div>
                </button>
              </div>
            </>
          )
        }

        {
          activeButton === 'restaurant' && (
            <>
              <small className="fs_18 f_inter f_clr_00">Welcome to Foodzee</small>
              <h1>
                <span>Your Partner in Maximizing</span> , Revenue and Reducing Waste
              </h1>
              <p>
                Foodzee's Exclusive Deals can help you save money and reduce food waste by offering affordable meals and timely treats.
              </p>

              <button className="download_btn f_inter me-3">
                {/* https://appfzeitappdevuw02.azurewebsites.net/Auth/Register/Cover */}
                <Link className="text-decoration-none text-white" to={"/create-account"} target='_blank'>
                  Create Account
                </Link>
              </button>

              <span className="fs_18 f_inter text-black">
                Already have a store account? <Link style={{ color: "#075759"}} className="text-decoration-none" target="_blank" to={"https://appfzeitappdevuw02.azurewebsites.net/Auth/Login/Cover"}>Log in</Link>
              </span>
            </>
          )
        }

      </div>
    </div>
  );
};

export default Banner;
