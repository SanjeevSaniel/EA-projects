import React, { useContext } from "react";
import { CartContext } from "./../../Pages/LandingPage/LandingPage";
import { CartCountContext } from "../../Pages/LandingPage/LandingPage";
import "./AddToCart.css";

const AddToCart = ({ addToCart }) => {
  const [cartCount, setCartCount] = useContext(CartCountContext);

  const cart = useContext(CartContext);

  // const addToCart = (e) => {
  //   console.log(e.currentTarget);
  // };

  const increaseCartCount = () => {
    setCartCount((prevValue) => prevValue + 1);
    console.log(cartCount);
  };

  function run() {
    document.querySelectorAll(".btn--add-cart").forEach((button) =>
      button.addEventListener("click", (e) => {
        if (!button.classList.contains("loading")) {
          button.classList.add("loading");

          setTimeout(() => button.classList.remove("loading"), 3700);
        }
        e.preventDefault();
      })
    );
  }

  return (
    <div>
      <button
        className="btn--add-cart"
        onClick={(e) => {
          run();
          increaseCartCount();
          addToCart(e);
        }}
      >
        <span>Add to cart</span>
        <div className="cart">
          <svg viewBox="0 0 36 26">
            <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
            <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default AddToCart;
