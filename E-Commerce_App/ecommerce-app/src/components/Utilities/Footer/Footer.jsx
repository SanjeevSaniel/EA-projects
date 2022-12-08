import React from "react";
import "./Footer.css";
import Rupay from "./images/rupay.png";
import Visa from "./images/visa.png";
import MasterCard from "./images/mastercard.png";
import Paypal from "./images/paypal.png";
import Amex from "./images/amex.png";

const Footer = () => {
  return (
    <section className="section-container">
      <div className="footer-container">
        <div className="box-footer-items">
          <ul>
            <p>Information</p>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="box-footer-items">
          <ul>
            <p>Service</p>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="box-footer-items">
          <ul>
            <p>Extras</p>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="box-footer-items">
          <ul>
            <p>My Account</p>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="box-footer-items">
          <ul>
            <p>Useful Links</p>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="box-footer-items">
          <ul>
            <p>Our Offers</p>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
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
    </section>
  );
};

export default Footer;
