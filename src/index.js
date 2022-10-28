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
  Footer,

} from "./components";

ReactDOM.render(
  <Router>
    <div className="flex flex-col h-screen justify-between" >
    <Nav className="flex" />
    <Routes className='flex'>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    <Footer className="flex"/>
    </div>
  </Router>,

  document.getElementById("root")
);

