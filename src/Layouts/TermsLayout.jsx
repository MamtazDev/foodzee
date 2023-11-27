import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header";
import JoinPower from "../Components/Shared/JoinPower";
import Footer from "../Components/Shared/footer/Footer";
import PageBanner from "../Utils/PageBanner";

const TermsLayout = ({ children }) => {
  return (
    <div>
      <div className="terms">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="tabs f_inter">
                <button
                // className={`${tab === 1 && "active"}`}
                // onClick={() => setTab(1)}
                >
                  Terms Of Conditions
                </button>
                <button
                // className={`${tab === 2 && "active"}`}
                // onClick={() => setTab(2)}
                >
                  Privacy Policy{" "}
                </button>
                <button
                // className={`${tab === 3 && "active"}`}
                // onClick={() => setTab(3)}
                >
                  Cookie Policy
                </button>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-9">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsLayout;
