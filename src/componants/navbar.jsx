import React, { Component } from "react";
import NavbarOptions from "./NavbarOptions";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-footer fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand" href="#page-top">
              <img
                src={this.props.company.logo}
                alt={this.props.company.name}
              />
            </a>
            <button
              className="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fa fa-bars ms-1"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <NavbarOptions navbar={this.props.navbar} />
            </div>
          </div>
        </nav>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-footer"
          id="mainNav"
        ></nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
