import React from "react";
import "./Services.css";
import Shipping from "./images/shipping.svg";
import Refund from "./images/refund.svg";
import Support from "./images/support.svg";

const Services = () => {
  return (
    <div className="services-container">
      <div className="service-box">
        <img src={Shipping} alt="Shipping" />
        <h5 className="label">FREE SHIPPING</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          in sunt numquam ratione blanditiis. Neque, suscipit excepturi? At,
          saepe doloribus?
        </p>
      </div>
      <div className="service-box">
        <img src={Refund} alt="" />
        <h5 className="label">100% REFUND</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          in sunt numquam ratione blanditiis. Neque, suscipit excepturi? At,
          saepe doloribus?
        </p>
      </div>
      <div className="service-box">
        <img src={Support} alt="" />
        <h5 className="label">SUPPORT 24/7</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          in sunt numquam ratione blanditiis. Neque, suscipit excepturi? At,
          saepe doloribus?
        </p>
      </div>
    </div>
  );
};

export default Services;
