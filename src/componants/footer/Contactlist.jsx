import React, { Component } from "react";

const Contactlist = (props) => {
  return (
    <div className="ms-5 col-md-3 mb-4 text-white">
      <h6 className="text-uppercase fw-bold">Contact</h6>
      <hr className="mb-2 mt-0 d-inline-block mx-auto hr-footer" />
      {props.contactlist.map((item) => (
        <div key={item.id} className="mb-2">
          <i key={item.id} className={item.icon + " mr-3"}></i> {item.value}
        </div>
      ))}
    </div>
  );
};

export default Contactlist;
