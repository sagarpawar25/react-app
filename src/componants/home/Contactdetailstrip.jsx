import React, { Component } from "react";

const Contactdetailstrip = (props) => {
  return (
    <section className="bg-socialmidia d-flex justify-content-between  pt-3 pb-3 ps-5 pe-5 display-7 fw-bolder text-white">
      <div className="me-5">
        <span>{props.phone["call"]}</span>
      </div>
      {props.phone["chat"]}
    </section>
  );
};

export default Contactdetailstrip;
