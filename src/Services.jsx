import React from "react";
import Card from "./Card";
import ImgData from "./ImgData";
const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <dir className="row gy-5">
              {ImgData.map((curEl, i) => {
                return (
                  <Card
                    imgsrc={curEl.imgsrc}
                    title={curEl.title}
                    key={i}
                    info={curEl.info}
                    btninfo={curEl.btninfo}
                  />
                );
              })}
            </dir>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
