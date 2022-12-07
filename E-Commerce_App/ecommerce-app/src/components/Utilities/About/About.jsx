import React from "react";
import "./About.css";
import Instagram from "./images/instagram.png";
import Twitter from "./images/twitter.png";
import Facebook from "./images/facebook.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="box-about one">
        <span className="about-title">iSHOP</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe iusto
          ab facere dolorum provident nemo!
        </p>
      </div>
      <div className="box-about two">
        <h5>Follow Us</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, aliquam?
        </p>
        <div>
          <a
            href="https://www.instagram.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img className="about-socials" src={Instagram} alt="Instagram" />
          </a>
          <a href="https://twitter.com/" target={"_blank"} rel="noreferrer">
            <img className="about-socials" src={Twitter} alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img className="about-socials" src={Facebook} alt="Facebook" />
          </a>
        </div>
      </div>
      <div className="box-about three">
        <h5>Contact Us</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus optio vel error officiis labore. Commodi.
        </p>
      </div>
    </div>
  );
};

export default About;
