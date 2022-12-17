import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import Search from "../Search/Search";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import UserProfile from "../UserProfile/UserProfile";
import "./TopBar.css";

const TopBar = ({ languages, currencies }) => {
  return (
    <div className="topbar">
      <div className="selectables">
        <Dropdown id="language" options={languages} />
        <Dropdown id="currency" options={currencies} />
      </div>
      <div className="actionables">
        <UserProfile />
        <ShoppingCart />
        <Search />
      </div>
    </div>
  );
};

export default TopBar;
