import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { MyContext } from "../../MyContext";

const Header = () => {
  const { activeButton, handleButtonClick } = useContext(MyContext);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M3.58823 6H21.5882V8H3.58823V6ZM3.58823 11H21.5882V13H3.58823V11ZM3.58823 16H21.5882V18H3.58823V16Z"
                fill="black"
              />
            </svg>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/mission"
              >
                Our Mission
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/press"
              >
                Press
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/support"
              >
                Support
              </NavLink>
            </li>
          </ul>

          <div
            className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-4"
            role="search"
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="#"
            >
              Download Now
            </NavLink>
            <div className="user_tab">
              <button
                className={activeButton === "User" ? "active" : ""}
                onClick={() => handleButtonClick("User")}
              >
                User
              </button>

              <button
                className={activeButton === "Business" ? "active" : ""}
                onClick={() => handleButtonClick("Business")}
              >
                Business
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
