import React, { Fragment, useContext } from "react";
import "./Dropdown.css";
import {
  CurrencyContext,
  LanguageContext,
} from "./../../Pages/LandingPage/LandingPage";

const Dropdown = ({ id, options }) => {
  const [currency, setCurrency] = useContext(CurrencyContext);
  const [language, setLanguage] = useContext(LanguageContext);
  // const [language, setLanguage] = useState("EN");
  // const [currency, setCurrency] = useState("₹");

  const handleDropdownSelection = (option) =>
    id === "currency" ? setCurrency(option) : setLanguage(option);

  const handleDropdownClicked = (event) => {
    event.stopPropagation();
    const dropdown = document.getElementById(`${id}`);

    toggleDropdown(!dropdown.classList.contains("open"));
  };

  const toggleDropdown = (shouldOpen) => {
    const dropdown = document.getElementById(`${id}`);
    const icon = document.getElementById(`${id}-icon`);

    if (shouldOpen) dropdown.classList.add("open");
    else dropdown.classList.remove("open");

    icon.innerText = dropdown.classList.contains("open")
      ? "close"
      : "expand_more";
  };

  return (
    <Fragment>
      <div className="dropdown" id={id}>
        <button
          className="btn-dropdown"
          onClick={(e) => handleDropdownClicked(e)}
        >
          <span className="dropdown-value">
            {id === "currency" ? currency : language}
          </span>
          <span id={`${id}-icon`} className="material-symbols-outlined">
            expand_more
          </span>
        </button>

        <div className="menu">
          {options.map((option, index) => {
            return (
              <button
                key={index}
                onClick={(e) => {
                  handleDropdownClicked(e);
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
