import React from "react";
import Carousel from "react-bootstrap/Carousel";
import TestimonialCard from "./TestimonialCard";

const Testimonials = (props) => {
  console.log(props.testimonialslieder["testimonial"]);

  const rows = props.testimonialslieder["testimonial"].reduce(function (
    rows,
    key,
    index
  ) {
    return (
      (index % 1 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  },
  []);

  //console.log(rows);
  return (
    <React.Fragment>
      <div className="text-center">
        <h2 className="mb-4">{props.testimonialslieder["name"]}</h2>
      </div>
      <Carousel
        id={props.testimonialslieder["id"]}
        variant="dark"
        controls={true}
        indicators={false}
      >
        {rows.map((row, index) => (
          <Carousel.Item key={index}>
            <TestimonialCard row={row} />
          </Carousel.Item>
        ))}
      </Carousel>
    </React.Fragment>
  );
};

export default Testimonials;
