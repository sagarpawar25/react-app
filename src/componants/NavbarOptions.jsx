import React, { Component } from "react";

const NavbarOptions = (props) => {
  return (
    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
      {props.navbar.map((options) =>
        options.navbar == true ? (
          <li className="nav-item" key={options.id}>
            <a className="nav-link text-white" href={options.path}>
              {options.name}
            </a>
          </li>
        ) : (
          ""
        )
      )}
    </ul>
  );
};

export default NavbarOptions;
