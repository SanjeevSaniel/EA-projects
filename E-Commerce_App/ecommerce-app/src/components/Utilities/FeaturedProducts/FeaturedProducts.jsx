import React, { useState, useEffect } from "react";
import ReactStars from "react-stars";
import "./FeaturedProducts.css";
// import AirPodsMax from "./images/airpods-max-select-green-202011.png";

const FeaturedProducts = () => {
  const data = require("./data.json");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <React.Fragment>
      <div className="featured-products-container">
        <h2 className="featured-products-heading">Featured Products</h2>
        <div className="featured-products-list">
          {products.map((product, index) => {
            return (
              <a className="feautured-product-link" href="/" target={"_blank"}>
                <div key={index} className="featured-product">
                  <img src={product.image} alt={product.name} />
                  <div className="featured-product-info">
                    <div className="featured-product-name">{product.name}</div>
                    <ReactStars
                      count={5}
                      value={product.rating}
                      size={16}
                      color2={"#ffd700"}
                    />
                    <div>
                      <span className="new-cost">₹ {product.newPrice}</span>
                      <span className="old-cost">₹ {product.oldPrice}</span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturedProducts;
