import React from "react";
import "./Greeting.css";

const Greeting = () => {
  return (
    <div className="greetings">
      <section className="greeting-container">
        <div className="greeting-title-one">
          <span>hi, nice</span>
          <span>to see</span>
          <span>you here</span>
        </div>

        <div className="greeting-title-two">
          <span>happy</span>
          <span>shopping! 😊</span>
        </div>
      </section>
    </div>
  );
};

export default Greeting;
