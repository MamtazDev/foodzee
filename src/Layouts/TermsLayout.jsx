import { Link, useLocation } from "react-router-dom";

const TermsLayout = ({ children }) => {
  let location = useLocation();
  console.log(location.pathname, "pppppppp");
  return (
    <div>
      <div className="terms">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="tabs f_inter">
                <Link
                  to="/terms-of-conditions"
                  className={`${
                    location.pathname === "/terms-of-conditions" && "active"
                  }`}>
                  Terms Of Conditions
                </Link>

                <Link
                  to="/privacy-policy"
                  className={`${
                    location.pathname === "/privacy-policy" && "active"
                  }`}>
                  Privacy Policy{" "}
                </Link>

                <Link
                  to="/cookie-policy"
                  className={`${
                    location.pathname === "/cookie-policy" && "active"
                  }`}>
                  Cookie Policy
                </Link>

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
