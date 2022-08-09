import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ProductCard from "./ProductCard";

const HappyCustomers = (props) => {
  return (
    <Carousel variant="dark" controls={true} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="product/headphones.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="product/watch.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HappyCustomers;
