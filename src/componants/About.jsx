import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About Us</h2>
            <h3 className="lead text-muted mb-5  text-black">
              Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Aut eaque, laboriosam veritatis,
              quos non quis ad perspiciatis, totam corporis ea, alias ut unde.
              Start Bootstrap was built on the idea that quality, functional
              website templates and themes should be available to everyone. Use
              our open source, free products, or support us by purchasing one of
              our premium products or services.
            </h3>
          </div>
          <div className="text-center">
            <h3 className="section-heading text-uppercase mb-5">
              <u>Our Team</u>
            </h3>
            <div className="row">
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="./team/1.jpg"
                    alt="..."
                  />
                  <h4>Abc Kumar</h4>
                  <p className="text-muted">Sales Associate</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="./team/2.jpg"
                    alt="..."
                  />
                  <h4>Diana</h4>
                  <p className="text-muted">Sales Associate</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="./team/3.jpg"
                    alt="..."
                  />
                  <h4>Larry</h4>
                  <p className="text-muted">Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
