import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/agapeprimehotelLOGO.png";

function Navbar() {
  const fontStyle = {
    fontFamily: "'Cormorant Garamond', serif",
    letterSpacing: "0.5px",
    fontSize: "1.15rem",
    fontWeight: 575,
  };
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light" style={fontStyle}>
      <div className="container-fluid">
        <img
          src={logo}
          alt="Agape Prime Hotel Logo"
          onClick={() => navigate("/")}
          style={{
            height: "50px",
            width: "auto",
            maxWidth: "240px",
            cursor: "pointer",
            objectFit: "contain"
          }}
        />

        



        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/rooms" style={fontStyle}>
                Villas/Suites
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wellness" style={fontStyle}>
                Wellness
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pbpavilion" style={fontStyle}>
                PB Pavilion
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/booking" style={fontStyle}>
                Booking
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="https://www.agapeprimehotel.com/WP/about/"
                style={fontStyle}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="https://www.agapeprimehotel.com/WP/contact/"
                style={fontStyle}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={fontStyle}
              >
                Account
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/sign-up" style={fontStyle}>
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sign-in" style={fontStyle}>
                    Sign In
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
