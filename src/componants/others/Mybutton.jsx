import React, { Component } from "react";

const Mybutton = (props) => {
  return (
    <a
      className={"btn " + props.options.style + " btn-lg px-4 me-sm-3"}
      href={props.options.link}
      target={props.options.target}
    >
      {props.options.name}
    </a>
  );
};

export default Mybutton;
