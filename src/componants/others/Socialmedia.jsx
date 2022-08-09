import React, { Component } from "react";

const Socialmedia = (props) => {
  return (
    <div>
      {props.socialmedia.map((media) =>
        media.link !== "" ? (
          <a key={media.id} href={media.link} className="text-white me-4">
            <i className={media.icon}></i>
          </a>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Socialmedia;
