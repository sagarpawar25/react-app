import React, { Component } from "react";

const Otherlist = (props) => {
  return (
    <div className="ms-5 col-md-2 mb-4 text-white">
      <h6 className="text-uppercase fw-bold">{props.models["title"]}</h6>
      <hr className="mb-2 mt-0 d-inline-block mx-auto hr-footer" />
      {props.models["list"].map((model) => (
        <div key={model.id} className="mb-1">
          <a key={model.id} href={model.path} className="text-white">
            {model.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Otherlist;
