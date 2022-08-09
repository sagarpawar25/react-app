import React, { Component } from "react";

const Usefullinks = (props) => {
  return (
    <div className="ms-5 col-md-2 mb-4 text-white">
      <h6 className="text-uppercase fw-bold">Useful links</h6>
      <hr className="mb-2 mt-0 d-inline-block mx-auto hr-footer" />
      {props.usefullinks.map((options) =>
        options.usefullink == true ? (
          <div key={options.id} className="mb-1">
            <a key={options.id} href={options.path} className="text-white">
              {options.name}
            </a>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Usefullinks;
