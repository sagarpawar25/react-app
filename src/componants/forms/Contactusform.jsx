import React, { Component } from "react";
import Mybutton from "../others/Mybutton";

const Contactusform = (props) => {
  const buttn = {
    name: "Send Message",
    link: "/contactus",
    style: "bg-primary text-white",
  };
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Contact Us</h2>
        <h3 className="lead text-muted mb-5 text-black">
          Fill the form to send us message
        </h3>
      </div>
      <form>
        <div className="row align-items-stretch mb-5">
          <div className="">
            <div className="form-group mb-3">
              {/* <!-- Name input--> */}
              <label className="text-left ms-1">Your Name*</label>
              <input type="text" className="form-control" id="name" required />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="form-group mb-3">
              {/* <!-- Email address input--> */}
              <label className="text-left ms-1">Email address*</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="form-group mb-3">
              {/* <!-- Email address input--> */}
              <label className="text-left ms-1">Phone Number*</label>
              <input
                type="phone"
                className="form-control"
                id="phone"
                required
              />
            </div>
            <div className="form-group mb-3">
              {/* <!-- Email address input--> */}
              <label className="text-left ms-1">Message*</label>
              <textarea
                className="form-control"
                id="message"
                required
              ></textarea>
            </div>
          </div>
        </div>
        {/* <!-- Submit success message--> */}
        {/* <!----> */}
        {/* <!-- This is what your users will see when the form--> */}
        {/* <!-- has successfully submitted--> */}
        <div className="d-none" id="submitSuccessMessage">
          <div className="text-center text-white mb-3">
            <div className="fw-bolder">Form submission successful!</div>
            To activate this form, sign up at
            <br />
            <a href="https://startbootstrap.com/solution/contact-forms">
              https://startbootstrap.com/solution/contact-forms
            </a>
          </div>
        </div>
        {/* <!-- Submit error message--> */}
        {/* <!----> */}
        {/* <!-- This is what your users will see when there is--> */}
        {/* <!-- an error submitting the form--> */}
        <div className="d-none" id="submitErrorMessage">
          <div className="text-center text-danger mb-3">
            Error sending message!
          </div>
        </div>
        {/* <!-- Submit Button--> */}
        <div className="text-center">
          <Mybutton options={buttn} />
        </div>
      </form>
    </div>
  );
};

export default Contactusform;
