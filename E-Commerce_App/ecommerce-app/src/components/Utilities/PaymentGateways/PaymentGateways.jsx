import React from "react";
import Rupay from "./images/rupay.png";
import Visa from "./images/visa.png";
import MasterCard from "./images/mastercard.png";
import Paypal from "./images/paypal.png";
import Amex from "./images/amex.png";
import "./PaymentGateways.css";

const PaymentGateways = () => {
  return (
    <div>
      <div className="payment-gateways">
        <img className="payment-logo payment-logo-five" src={Amex} alt="Amex" />
        <img
          className="payment-logo payment-logo-four"
          src={Paypal}
          alt="Paypal"
        />
        <img
          className="payment-logo payment-logo-three"
          src={MasterCard}
          alt="Mastercard"
        />
        <img className="payment-logo payment-logo-two" src={Visa} alt="Visa" />
        <img
          className="payment-logo payment-logo-one"
          src={Rupay}
          alt="Rupay"
        />
      </div>
    </div>
  );
};

export default PaymentGateways;
