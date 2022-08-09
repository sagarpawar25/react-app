import React from "react";

const CustomerCard = () => {
  return (
    <div className="card">
      {/* <!-- Product image--> */}
      <img className="card-img-top" src="product/cam.jpg" alt="..." />
      {/* <!-- Product details--> */}
      <div className="card-body p-3">
        <div className="text-center">
          {/* <!-- Product name--> */}
          <h5 className="fw-bolder">Fancy Product</h5>
          {/* <!-- Product reviews--> */}
          <div className="d-flex justify-content-center small text-warning mb-2">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
          {/* <!-- Product price--> */}
          $40.00 - $80.00
        </div>
      </div>
      {/* <!-- Product actions--> */}
      <div className="card-footer p-3 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <a className="btn btn-outline-dark mt-auto" href="#">
            View options
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
