import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">HOTEL AGAPE PRIME-RESERVATIONS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
       
        <li className="nav-item">
          <Link className="nav-link" to="/rooms">Villas/Suites</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/wellness">Wellness</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/pbpavilion">PB Pavilion</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/booking">Booking</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="https://www.agapeprimehotel.com/WP/about/">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="https://www.agapeprimehotel.com/WP/contact/">Contact</Link>
        </li>
        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </span>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/sign-up">Sign Up</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
