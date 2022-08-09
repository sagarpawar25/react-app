import React, { Component } from "react";
import Socialmedia from "../others/Socialmedia";

const Footersocialmedia = (props) => {
  return (
    <section className="bg-socialmidia d-flex justify-content-between  pt-4 pb-4 ps-5 pe-5">
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      <Socialmedia socialmedia={props.socialmedia} />
    </section>
  );
};

export default Footersocialmedia;
