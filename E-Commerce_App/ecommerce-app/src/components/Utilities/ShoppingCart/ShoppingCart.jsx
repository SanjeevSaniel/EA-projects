import React from "react";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  return (
    <React.Fragment>
      <Link to="/Cart" className="cart-link">
        <div className="shopping-cart">
          <button>
            <span className="material-symbols-outlined">shopping_cart</span>2
            items
          </button>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default ShoppingCart;
