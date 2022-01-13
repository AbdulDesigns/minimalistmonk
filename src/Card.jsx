import React from "react";

import { NavLink } from "react-router-dom";
const Card = (prop) => {
  console.log(prop);
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={prop.imgsrc} className="card-img-top" alt="card image" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{prop.title}</h5>
            <p className="card-text">{prop.info}</p>
            <NavLink to="/" className="btn btn-primary">
              {prop.btninfo}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
