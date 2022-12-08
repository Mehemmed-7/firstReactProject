import React from "react";
import Boldo from "../assets/images/Boldo_logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="container">
      <div className="footerTop text-center d-flex flex-column justify-content-evenly align-items-center">
        <h3>An enterprise template to ramp up your company website</h3>
        <form action="" className="d-flex justify-content-evenly">
          <input type="text" placeholder="Your email address" />
          <button>Start now</button>
        </form>
      </div>
      <div className="footerBottom">
        <section className="">
          <div className="text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                <h6 className="text-uppercase fw-bold mb-4 d-flex align-items-center">
                  <img src={Boldo} alt="" className="logo_slider"/>
                  <h3 className="fw-bold m-0" style={{fontSize: 43, color:"#0A2640"}}>Boldo</h3>
                </h6>
                <p>
                  Social media validation business model canvas graphical user
                  interface launch party creative facebook iPad twitter.
                </p>
                <span>All rights reserved.</span>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="fw-bold mb-4">Landing</h6>
                <p>
                  <NavLink className="text-reset nav-link">
                    Home
                  </NavLink>
                </p>
                <p>
                  <NavLink className="text-reset nav-link">
                    Product
                  </NavLink>
                </p>
                <p>
                  <NavLink className="text-reset nav-link">
                    Services
                  </NavLink>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="fw-bold mb-4">Company</h6>
                <p>
                  <NavLink className="text-reset nav-link">
                    Home
                  </NavLink>
                </p>
                <p>
                  <NavLink className="text-reset nav-link">
                    Careers  <span className="badge ms-1">Hiring!</span>
                  </NavLink>
                </p>
                <p>
                  <NavLink className="text-reset nav-link">
                    Services
                  </NavLink>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="fw-bold mb-4">Resources</h6>
                <p>
                  Blog
                </p>
                <p>
                  Products
                </p>
                <p>
                  Services
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
