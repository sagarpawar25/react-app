import React from "react";

const SlideShowCard = (props) => {
  return (
    <div className="row">
      {props.row.map((item) => (
        <div className="col" key={item.id}>
          <img
            key={item.id}
            className="d-block w-100"
            src={item.src}
            alt="Second slide"
          />
        </div>
      ))}
    </div>
  );
};

export default SlideShowCard;
