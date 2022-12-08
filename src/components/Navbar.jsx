import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container d-flex justify-content-between">
            <div className="logo_icon">
              <NavLink to={"/"}
                className="navbar-brand d-flex align-items-center justify-content-between"
                
              >
                <div className="logo d-flex flex-column justify-content-between">
                  <div className="logo_top"></div>
                  <div className="logo_bottom"></div>
                </div>
                <span>Boldo</span>
              </NavLink>
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
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to={"/"} className="nav-link active" aria-current="page" >
                    Product
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"#"} className="nav-link">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  to={"/about"} className="nav-link" >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"#"} className="nav-link login_button" >
                    Log In
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
