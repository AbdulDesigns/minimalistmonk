import React from "react";
import web from "../src/img/img3.svg";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="welcome to services"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
