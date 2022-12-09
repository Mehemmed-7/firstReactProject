import React, { Component } from "react";
import {Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Blog from "../pages/Blog";
export default class AllRoute extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path={"/"} exact element={<HomePage/>} />
          <Route path={"/about"} element={<About/>} />
          <Route path={"/blog"} element={<Blog/>} />
        </Routes>
      </div>
    );
  }
}
