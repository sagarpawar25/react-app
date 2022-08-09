import React, { Component } from "react";

const Aboutfooter = (props) => {
  return (
    <div className="ms-5 col-md-3 mb-4 text-white">
      <h6 className="text-uppercase fw-bold">{props.company["name"]}</h6>
      <hr className="mb-2 mt-0 d-inline-block mx-auto hr-footer" />
      <p>{props.company["shortabout"]}</p>
    </div>
  );
};

export default Aboutfooter;
