import React from "react";

const TestimonialCard = (props) => {
  return (
    <div className="row">
      {props.row.map((item) => (
        <div className="col-6 container text-center card p-5" key={item.id}>
          <div className="">
            <small>{item.content}</small>
          </div>
          <div>
            <strong>-{item.author}</strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
