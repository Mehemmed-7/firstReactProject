import React, { Component } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}
