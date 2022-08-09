import React, { Component } from "react";
import Aboutfooter from "./Aboutfooter";
import Contactlist from "./Contactlist";
import Otherlist from "./Otherlist";
import Usefullinks from "./Usefullinks";

const Footerimplinks = (props) => {
  return (
    <section className="pt-5 pb-5 me-5">
      <div className="text-left text-md-start">
        <div className="row">
          {/* About */}

          <Aboutfooter className="pt-3" company={props.company} />

          {/* Other list */}
          <Otherlist className="pt-3" models={props.models} />

          {/*<!-- Usefullinks -->*/}
          <Usefullinks usefullinks={props.usefullinks} />

          {/*<!-- contach details -->*/}
          <Contactlist contactlist={props.contactlist} />
        </div>
      </div>
    </section>
  );
};

export default Footerimplinks;
