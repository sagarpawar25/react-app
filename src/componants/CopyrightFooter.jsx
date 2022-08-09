import React, { Component } from "react";

const CopyrightFooter = (props) => {
  return (
    <div className="bg-copyright row align-items-center justify-content-between flex-column flex-sm-row">
      <div className="col-auto ms-5">
        <div className="small m-0 text-white">
          Copyright &copy; Your Website {props.developer.copyright_year}
        </div>
      </div>
      <div className="col-auto me-5">
        <span className="link-light small m-2">Designed & Developed by</span>
        <a className="link-light small" href={props.developer.url}>
          {props.developer.name}
        </a>
      </div>
    </div>
  );
};

export default CopyrightFooter;
