import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="selectables">
        <Dropdown id="language" options={["EN", "IN"]} />
        <Dropdown id="currency" options={["$", "₹"]} />
      </div>
    </div>
  );
};

export default TopBar;
