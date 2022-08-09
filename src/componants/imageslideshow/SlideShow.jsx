import React from "react";
import Carousel from "react-bootstrap/Carousel";
import SlideShowCard from "./SlideShowCard";

const SlideShow = (props) => {
  //console.log(props.happycustomers);

  const rows = props.customerslieder["happycustomers"].reduce(function (
    rows,
    key,
    index
  ) {
    return (
      (index % 3 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  },
  []);

  //console.log(rows);
  return (
    <React.Fragment>
      <div className="text-center">
        <h2 className="mb-4">{props.customerslieder["name"]}</h2>
      </div>
      <Carousel
        id={props.customerslieder["id"]}
        variant="dark"
        controls={true}
        indicators={false}
      >
        {rows.map((row, index) => (
          <Carousel.Item key={index}>
            <SlideShowCard row={row} />
          </Carousel.Item>
        ))}
      </Carousel>
    </React.Fragment>
  );
};

export default SlideShow;
