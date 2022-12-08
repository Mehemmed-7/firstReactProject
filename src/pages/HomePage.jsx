import React, { Component } from "react";
import SimpleSlider from "../components/SimpleSlider";
import Canyon from "../assets/images/canyon.jpg";
import Card from "../components/Card";
import { data } from "../assets/data/ServiceCard.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faEye,
  faFeather,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import personImg from "../assets/images/person.png";
import personImg2 from "../assets/images/person2.png";
import Chart from "../components/Chart";
import PieChart from "../components/PieChart";

export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <img src={Canyon} alt="canyon" className="canyon" />
        <div className="slider d-flex flex-column justify-content-center mt-5">
          <SimpleSlider />
        </div>
        <div className="our_services text-center d-flex flex-column justify-content-evenly mt-5">
          <h6>Our services</h6>
          <h2 className="align-self-center">
            Handshake infographic mass market crowdfunding iteration.
          </h2>

          <div className="service_cards d-flex justify-content-evenly">
            {data.map((item) => (
              <Card
                cardImage={item.photo}
                cardTitle={item.title}
                key={item.id}
              />
            ))}
          </div>
        </div>
        <section className="connect d-flex mb-5">
          <div className="row">
            <div className="col-xl-6 d-flex justify-content-center align-items-center">
              <div className="img_box">
                <img src={personImg} alt="" className="rounded-4" />
                <div className="chart">
                  <Chart />
                  <p>30%</p>
                  <span>More income in June</span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 d-flex justify-content-center align-items-center">
              <div className="content_box d-flex flex-column justify-content-between">
                <h1 className="p-3">
                  We connect our customers with the best, and help them keep
                  up-and stay open.
                </h1>
                <ul className="list-group">
                  <li className="list-group-item border-0">
                    <FontAwesomeIcon icon={faCircleCheck} className="me-2" />
                    We connect our customers with the best.
                  </li>
                  <li className="list-group-item border-0">
                    <FontAwesomeIcon icon={faCircleCheck} className="me-2" />
                    Advisor success customer launch party.
                  </li>
                  <li className="list-group-item border-0">
                    <FontAwesomeIcon icon={faCircleCheck} className="me-2" />
                    Business-to-consumer long tail.
                  </li>
                </ul>
                <button className="ms-3 mt-4">Start now</button>
              </div>
            </div>
          </div>
        </section>
        <section className="connect d-flex">
          <div className="row">
            <div className="col-xl-6 d-flex justify-content-center align-items-center">
              <div className="content_box d-flex flex-column justify-content-between">
                <h1 className="p-3">
                  We connect our customers with the best, and help them keep
                  up-and stay open.
                </h1>
                <ul className="list-group">
                  <li className="list-group-item border-0">
                    <FontAwesomeIcon icon={faFeather} className="me-2" />
                    We connect our customers with the best.
                  </li>
                  <li className="list-group-item border-0">
                    <FontAwesomeIcon icon={faEye} className="me-2" />
                    Advisor success customer launch party.
                  </li>
                  <li className="list-group-item border-0">
                    <FontAwesomeIcon icon={faSun} className="me-2" />
                    Business-to-consumer long tail.
                  </li>
                </ul>
                <button className="ms-3 mt-4">Start now</button>
              </div>
            </div>
            <div className="col-xl-6 d-flex justify-content-center align-items-center">
              <div className="img_box">
                <img src={personImg2} alt="" className="rounded-4" />
                <div className="chart">
                  <PieChart />
                  <div className="percent ps-5">
                    <p>35% - Agile Development</p>
                    <p>30% - Investor bandwidth</p>
                    <p>35% - A/B testing </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
