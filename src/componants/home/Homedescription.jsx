import { Button } from "bootstrap";
import React, { Component } from "react";
import HappyCustomers from "../others/HappyCustomers";
import Mybutton from "../others/Mybutton";
import Contactdetailstrip from "./Contactdetailstrip";

const Homedescription = (props) => {
  return (
    <header className="bg-dark py-5">
      <Contactdetailstrip phone={props.phone} />
      <div className="p-5">
        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="my-5 text-center text-xl-start">
              <h1 className="display-6 fw-bolder text-white mb-2">
                {props.homedescription["header"]}
              </h1>
              <p className="lead fw-normal text-white-50 mb-4">
                {props.homedescription["subheader"]}
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <Mybutton options={props.homedescription["button1"]} />
                <Mybutton options={props.homedescription["button2"]} />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
            <HappyCustomers />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Homedescription;
