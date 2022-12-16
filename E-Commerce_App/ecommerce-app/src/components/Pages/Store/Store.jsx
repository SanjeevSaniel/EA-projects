import React from "react";
import ColorToggleButton from "../../Utilities/ColorToggleButton/ColorToggleButton";
import RangeSlider from "../../Utilities/Slider/Slider";
import "./Store.css";
import ProductShowcase from "./../../Utilities/ProductShowcase/ProductShowcase";

const Store = () => {
  return (
    <div className="store__container">
      <div className="product-banner">
        <ProductShowcase />
      </div>

      <aside className="store__accessories__container">
        <div className="store__accessories__items">
          <ul className="store__accessories__list">
            <h6 className="store__sidebar__headings">ACCESSORIES</h6>
            <li className="store__accessories__item">
              <span>Apple Car</span>
              <span>2</span>
            </li>
            <li className="store__accessories__item">
              <span>Air Pod & Wireless</span>
              <span>48</span>
            </li>
            <li className="store__accessories__item">
              <span>Cables & Docks</span>
              <span>14</span>
            </li>
            <li className="store__accessories__item">
              <span>Cases & Films</span>
              <span>15</span>
            </li>
            <li className="store__accessories__item">
              <span>Charging Devices</span>
              <span>23</span>
            </li>
            <li className="store__accessories__item">
              <span>Connected Home</span>
              <span>1</span>
            </li>
            <li className="store__accessories__item">
              <span>Headphones</span>
              <span>95</span>
            </li>
          </ul>
        </div>

        <div className="store__accessories__prices">
          <h6 className="store__sidebar__headings">PRICES</h6>
          <RangeSlider />
        </div>

        <div className="store__accessorries__colors">
          <h6 className="store__sidebar__headings">COLOR</h6>
          <ColorToggleButton />
        </div>
      </aside>

      <main className="store__main__container"></main>
    </div>
  );
};

export default Store;
