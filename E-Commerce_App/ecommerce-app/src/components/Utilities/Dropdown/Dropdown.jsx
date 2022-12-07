import React, { Fragment, useState } from "react";
import "./Dropdown.css";

const Dropdown = (props) => {
  const [language, setLanguage] = useState("EN");
  const [currency, setCurrency] = useState("₹");

  const handleDropdownSelection = (params) =>
    props.id === "currency" ? setCurrency(params) : setLanguage(params);

  const handleDropdownClicked = (event) => {
    event.stopPropagation();
    const dropdown = document.getElementById(`${props.id}`);

    toggleDropdown(!dropdown.classList.contains("open"));
  };

  const toggleDropdown = (shouldOpen) => {
    const dropdown = document.getElementById(`${props.id}`);
    const icon = document.getElementById(`${props.id}-icon`);

    if (shouldOpen) dropdown.classList.add("open");
    else dropdown.classList.remove("open");

    icon.innerText = dropdown.classList.contains("open")
      ? "close"
      : "expand_more";
  };

  return (
    <Fragment>
      <div className="dropdown" id={props.id}>
        <button className="btn-dropdown" onClick={(event) => handleDropdownClicked(event)}>
          <span className="dropdown-value">{props.id === "currency" ? currency : language}</span>
          <span id={`${props.id}-icon`} className="material-symbols-outlined">
            expand_more
          </span>
        </button>

        <div className="menu">
          {props.options.map((option, index) => {
            return (
              <button
                key={index}
                onClick={(event) => {
                  handleDropdownClicked(event);
                  handleDropdownSelection(option);
                }}
              >
                <span>{option}</span>
              </button>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Dropdown;
