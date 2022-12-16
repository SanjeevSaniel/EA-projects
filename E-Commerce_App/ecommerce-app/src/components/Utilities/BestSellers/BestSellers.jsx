import React, { useState, useEffect } from "react";
import "./BestSellers.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const BestSellers = () => {
  const data = require("../../api/bestSellers.json");
  const [fullProducts, setFullProducts] = useState(data);
  const [products, setProducts] = useState(data);
  const [alignment, setAlignment] = useState("all");

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

  return (
    <div>
      <h2>BEST SELLERS</h2>
      <nav className="category-filters">
        <ToggleButtonGroup
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
        </ToggleButtonGroup>
      </nav>
      <div className="products-container">
        {products.map((product, index) => {
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
                  <span className="new-cost">₹ {product.newPrice}</span>
                  <span className="old-cost">₹ {product.oldPrice}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSellers;
