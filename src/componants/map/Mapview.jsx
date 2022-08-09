import React from "react";
import Mybutton from "../others/Mybutton";

const Mapview = (props) => {
  return (
    <div className="container">
      <div className="text-center mt-2">
        <h2 className="section-heading text-uppercase">VISIT US</h2>
      </div>
      <div>
        <img className="d-block w-100" src="./map.png" alt="First slide" />
      </div>

      <div className="m-5 text-center">
        <Mybutton options={props.location} />
      </div>
    </div>
  );
};
export default Mapview;
