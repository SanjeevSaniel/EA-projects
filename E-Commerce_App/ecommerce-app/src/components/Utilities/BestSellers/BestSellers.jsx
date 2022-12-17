import React, { useState, useEffect, useContext } from "react";
import "./BestSellers.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import {
  CurrencyContext,
  LanguageContext,
} from "../../Pages/LandingPage/LandingPage";
import AddToCart from "../AddToCart/AddToCart";

const BestSellers = () => {
  const [currency] = useContext(CurrencyContext);
  const [language] = useContext(LanguageContext);

  const data = require("../../api/bestSellers.json");
  const [fullProducts, setFullProducts] = useState(data);
  const [products, setProducts] = useState(data);
  const [alignment, setAlignment] = useState("all");
  const [visible, setVisible] = useState(4);

  console.log(language);
  console.log(currency);
  console.log("Loaded Items", visible);
  console.log("Total Number of Items", data.length);

  useEffect(() => {
    setFullProducts(data);
  }, [data]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log(newAlignment);

    if (newAlignment === "all") {
      setProducts(fullProducts);
      return;
    }

    const filteredProducts = fullProducts.filter(
      (product) => product.category.toLowerCase() === newAlignment
    );
    setProducts(filteredProducts);
    console.log(filteredProducts);
  };

  const showMoreArticles = () => {
    setVisible((previousValue) => previousValue + 4);
  };

  return (
    <div>
      <h2 className="best-sellers-heading">BEST SELLERS</h2>
      <nav className="category-filters">
        <ToggleButtonGroup
          className="toggle-group"
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Category"
        >
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="mac">Mac</ToggleButton>
          <ToggleButton value="iphone">iPhone</ToggleButton>
          <ToggleButton value="ipad">iPad</ToggleButton>
          <ToggleButton value="watch">Watch</ToggleButton>
          <ToggleButton value="accessories">Accessories</ToggleButton>
          <ToggleButton value="others">Others</ToggleButton>
        </ToggleButtonGroup>
      </nav>
      <div className="products-container">
        {products.slice(0, visible).map((product, index) => {
          return (
            <div key={index} className="product-card">
              {product.demand.toLowerCase() === "high" ? (
                <span
                  id={`product-demand-label-${index}`}
                  className="product-demand-label"
                >
                  HOT
                </span>
              ) : (
                () => {
                  document.getElementById(
                    `product-demand-label-${index}`
                  ).style.display = "none";
                }
              )}

              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
              <p className="product-name">{product.name}</p>
              <div className="product-prices-and-rating">
                <Stack className="product-rating" spacing={1}>
                  <Rating
                    name="half-rating-read"
                    // defaultValue={2.5}
                    value={product.rating}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
                <div className="product-prices">
                  <span className="new-cost">
                    <span>{currency}</span>
                    {currency === "$"
                      ? product.newPrice / 80
                      : product.newPrice}
                  </span>
                  <span className="old-cost">
                    <span>{currency}</span>
                    {currency === "$"
                      ? product.oldPrice / 80
                      : product.oldPrice}
                  </span>
                </div>
              </div>
              <div id={`btn-cart-collect-${index}`} className="btn-to-cart">
                {<AddToCart />}
              </div>
            </div>
          );
        })}
      </div>
      <div className="load-more">
        {visible >= products.length ? (
          " "
        ) : (
          <button className="load-more-btn" onClick={showMoreArticles}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2267/2267918.png"
              alt=""
            />
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default BestSellers;
