import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import Error from "./Error";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
