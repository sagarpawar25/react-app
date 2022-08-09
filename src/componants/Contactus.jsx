import React, { Component } from "react";
import Contactusform from "./forms/Contactusform";
import Mapview from "./map/Mapview";

class Contactus extends Component {
  render() {
    return (
      <section className="page-section bg-light">
        <div className="row">
          <div className="col-sm">
            <div className="container">
              <Mapview location={this.props.location} />
            </div>
          </div>
          <div className="col-sm">
            <div className="container">
              <Contactusform />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contactus;
