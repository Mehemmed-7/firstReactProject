import React, { Component } from "react";
import Slider from "react-slick";
import Boldo_logo from "../assets/images/Boldo_logo.png";
import Presto_logo from "../assets/images/Presto.png";
import "../assets/styles/componentStyles/slider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:1500,
      pauseOnHover:true
    };
    return (
      <div className="d-flex flex-column justify-align-content-center">
        <Slider {...settings}>
          <div className="slide_item d-flex justify-content-center align-items-center">
            <img src={Boldo_logo} alt="boldo" className="logo_slider" />
            <h3 >Boldo</h3>
          </div>
          <div className="slide_item d-flex justify-content-center align-items-center">
            <img src={Presto_logo} alt="presto" className="logo_slider"/>
            <h3>Presto</h3>
          </div>
          <div className="slide_item d-flex justify-content-center align-items-center">
            <img src={Boldo_logo} alt="boldo" className="logo_slider" />
            <h3 >Boldo</h3>
          </div>
          <div className="slide_item d-flex justify-content-center align-items-center">
            <img src={Presto_logo} alt="presto" className="logo_slider" />
            <h3>Presto</h3>
          </div>
          <div className="slide_item d-flex justify-content-center align-items-center">
            <img src={Boldo_logo} alt="boldo" className="logo_slider" />
            <h3 >Boldo</h3>
          </div>
          <div className="slide_item d-flex justify-content-center align-items-center">
            <img src={Presto_logo} alt="presto" className="logo_slider"/>
            <h3>Presto</h3>
          </div>
        </Slider>
      </div>
    );
  }
}