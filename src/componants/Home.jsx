import React, { Component } from "react";
import { Link } from "react-router-dom";
import Homedescription from "./home/Homedescription";
import HappyCustomers from "./others/HappyCustomers";
import SlideShow from "./imageslideshow/SlideShow";
import Testimonials from "./testimonialslideshow/Testimonials";
import Services from "./services/Services";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Homedescription
          homedescription={this.props.homedescription}
          phone={this.props.phone}
          productlist={this.props.productlist}
        />
        <Services />
        <header className="py-4 px-5 mb-5">
          <Testimonials testimonialslieder={this.props.testimonialslieder} />
        </header>
        <header className="py-4 px-5">
          <SlideShow customerslieder={this.props.customerslieder} />
        </header>
      </React.Fragment>
    );
  }
}

export default Home;
