import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Nav,
  About,
  Portfolio,
  Contact,
  Resume,

} from "./components";

ReactDOM.render(
  <Router>
    <Nav />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

