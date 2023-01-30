import React, { useState, useEffect, useContext } from "react";
import "./BestSellers.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import {
  // CartCountContext,
  CurrencyContext,
  LanguageContext,
} from "../../Pages/LandingPage/LandingPage";
import AddToCart from "../AddToCart/AddToCart";
import { CartContext } from "./../../Pages/LandingPage/LandingPage";

const BestSellers = () => {
  const [currency] = useContext(CurrencyContext);
  const [language] = useContext(LanguageContext);

  const [cart, setCart] = useContext(CartContext);
  // const [cartCount, setCartCount] = useContext(CartCountContext);

  const data = require("../../api/bestSellers.json");
  const [fullProducts, setFullProducts] = useState(data);
  const [products, setProducts] = useState(data);
  const [alignment, setAlignment] = useState("all");
  const [visible, setVisible] = useState(4);

  console.log(language);
  console.log(currency);
  console.log("Loaded Items", visible);
  console.log("Total Number of Items", data.length);

  const addToCart = (id, index) => {
    // if (cart[id]) {
    let newItem = { ...products[id], quantity: 1 };

    setCart((current) => [...current, newItem]);

    // }
    // cart.filter(
    //   (c) =>
    //     c._id === products[index]._id
    //       ? (c.quantity += 1)
    //       : setCart((current) => [...current, products[index]])
    // : cart.push(products[index], { quantity: 1 })
    // );
  };

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

  useEffect(() => {
    setFullProducts(data);
  }, [data]);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <h2 className="best-sellers-heading">BEST SELLERS</h2>
      <nav className="category-filters">
        <ToggleButtonGroup
          id="toggle-group"
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
                <Stack className="best-product-rating" spacing={1}>
                  <Rating
                    name="half-rating-read"
                    // defaultValue={2.5}
                    value={product.rating}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
                <div className="best-product-prices">
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
              {/* <button
                id={`btn-cart-collect-${index}`}
                className="btn-to-cart"
                onClick={() => addToCart(index, product._id)}
              >
                Add to cart
              </button> */}

              <div id={`btn-cart-collect-${index}`} className="btn-to-cart">
                {<AddToCart onClick={() => addToCart(index, product._id)} />}
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
