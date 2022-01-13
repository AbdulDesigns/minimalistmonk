import React from "react";
import web from "../src/img/img2.svg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="welcome to "
        imgsrc={web}
        visit="/contact"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
