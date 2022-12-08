import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AllRoute from "../Routes/AllRoute";

class Main extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <AllRoute />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
