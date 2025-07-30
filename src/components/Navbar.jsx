import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/agapeprimehotelLOGO.png";
import image from "../assets/images/image.png" 
import { useAuth } from "../AuthContext";

function Navbar() {
  const fontStyle = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 575,
    letterSpacing: "0.25px",
    fontSize: "1.03rem",
  };
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/sign-in");
  };

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light" style={fontStyle}>
      <div className="container-fluid">
         <a class="navbar-brand" href="#">
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
        /> </a> 
      

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
                Suites/Villas
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
            {/* BOOKING DROPDOWN */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={fontStyle}
              >
                Booking
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/booking" style={fontStyle}>
                    Reserve a Suite/Villa
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/reserve-wellness" style={fontStyle}>
                    Reserve Wellness Center
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/reserve-pavilion" style={fontStyle}>
                    Reserve PB Pavilion
                  </Link>
                </li>
              </ul>
            </li>
            {/* END BOOKING DROPDOWN */}
            <li className="nav-item">
              <Link
                className="nav-link"
                to="https://www.agapeprimehotel.com/WP/about/"
                style={fontStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="https://www.agapeprimehotel.com/WP/contact/"
                style={fontStyle}
                target="_blank"
                rel="noopener noreferrer"
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
                {currentUser ? (
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={handleLogout}
                      style={fontStyle}
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <>
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
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
