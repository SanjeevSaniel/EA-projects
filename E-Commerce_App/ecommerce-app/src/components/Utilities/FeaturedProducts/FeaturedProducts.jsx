import React, { useState, useEffect, useContext } from "react";
// import ReactStars from "react-stars";
import "./FeaturedProducts.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { CurrencyContext } from "../../Pages/LandingPage/LandingPage";
// import AirPodsMax from "./images/airpods-max-select-green-202011.png";

const FeaturedProducts = () => {
  const [currency] = useContext(CurrencyContext);
  const data = require("../../api/FeaturedProducts.json");
  const [products, setProducts] = useState([]);

  const handleLeftClick = (e) => {
    const content = document.getElementById("content");
    content.scrollLeft -= 200;
    e.preventDefault();
  };

  const handleRightClick = (e) => {
    const content = document.getElementById("content");
    content.scrollLeft += 200;
    e.preventDefault();
  };

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <React.Fragment>
      <div className="featured-products-container">
        <h2 className="featured-products-heading">Featured Products</h2>
        <div className="featured-products-main-container">
          <div className="left-box">
            <button id="btn-left-arrow" onClick={handleLeftClick}>
              <span className="material-symbols-outlined">arrow_back_ios</span>
            </button>
          </div>
          <div className="featured-products-list" id="content">
            {products.map((product, index) => {
              return (
                <a
                  key={index}
                  className="feautured-product-link"
                  href="/"
                  target={"_blank"}
                >
                  <div className="featured-product">
                    <img src={product.image} alt={product.name} />
                    <div className="featured-product-info">
                      <div className="featured-product-name">
                        {product.name}
                      </div>

                      <Stack spacing={1}>
                        <Rating
                          name="half-rating-read"
                          //   defaultValue={2.5}
                          value={product.rating}
                          precision={0.5}
                          readOnly
                        />
                      </Stack>
                      <div>
                        <span className="new-cost">
                          <span>{currency}</span>
                          {currency === "$"
                            ? Math.round(product.newPrice / 80)
                            : Math.round(product.newPrice)}
                        </span>
                        <span className="old-cost">
                          <span>{currency}</span>
                          {currency === "$"
                            ? Math.round(product.oldPrice / 80)
                            : Math.round(product.oldPrice)}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="right-box">
            <button id="btn-right-arrow" onClick={handleRightClick}>
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FeaturedProducts;
