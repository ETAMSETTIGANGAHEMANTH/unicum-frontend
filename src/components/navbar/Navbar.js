import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/UNICUM_logo.png';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand me-auto" to="/">
          <div className='imagediv'>{<img src={logo} alt="logo"></img>} UNICUM</div>
          </NavLink>

          <div className="d-flex order-lg-last ms-auto align-items-center">
            <NavLink className="login-button me-2" to="/admin">Admin</NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item bold-link mx-lg-2">
                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item bold-link mx-lg-2">
                <NavLink className="nav-link" aria-current="page" to="/service">Service</NavLink>
              </li>
              <li className="nav-item bold-link mx-lg-2">
                <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
