import React from "react";
import "./ProductShowcase.css";
import iPhone from "./images/iphone-14-pro-model-preview.png";

const ProductShowcase = () => {
  return (
    <div className="ProductShowcase-container">
      <div className="box-ProductShowcase-one">
        <div>
          <h1 className="ProductShowcase-title">iPhone 14 Pro Max</h1>
          <p>
            <span className="ProductShowcase-quote-one">Pro.</span>
            <span className="ProductShowcase-quote-two">Beyond.</span>
          </p>
          <button className="btn-ProductShowcase">Buy</button>
        </div>
      </div>
      <div className="box-ProductShowcase-two">
        <img src={iPhone} alt="iPhone 14 Pro Max" />
      </div>
    </div>
  );
};

export default ProductShowcase;
