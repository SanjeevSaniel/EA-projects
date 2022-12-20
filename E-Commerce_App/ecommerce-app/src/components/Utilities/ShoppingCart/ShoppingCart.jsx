import React from "react";
import { Link } from "react-router-dom";

import "./ShoppingCart.css";

const ShoppingCart = () => {
  // const cartCount = useContext(CartCountContext);

  return (
    <React.Fragment>
      <Link to="/Cart" className="cart-link">
        <div className="shopping-cart">
          <button className="btn-cart">
            <span className="material-symbols-outlined">shopping_cart</span>
            {/*{cartCount === 0 ? (
              <span className="hide count-bubble">{cartCount}</span>
            ) : (
              <span className="count-bubble">{cartCount}</span>
            )} */}
          </button>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default ShoppingCart;
