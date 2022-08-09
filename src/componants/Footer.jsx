import React, { Component } from "react";
import CopyrightFooter from "./CopyrightFooter";
import Footerimplinks from "./footer/Footerimplinks";
import Footersocialmedia from "./footer/Footersocialmedia";

const Footer = (props) => {
  return (
    <React.Fragment>
      <footer className="bg-footer mt-auto">
        <Footersocialmedia socialmedia={props.socialmedia} />
        <Footerimplinks
          contactlist={props.contactlist}
          usefullinks={props.usefullinks}
          models={props.models}
          company={props.company}
        />
        <CopyrightFooter developer={props.developer} />
      </footer>
    </React.Fragment>
  );
};

export default Footer;
