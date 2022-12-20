import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";
import Home from "./../../Pages/Home/Home";
import Store from "./../../Pages/Store/Store";
import IPhone from "../../Pages/IPhone/IPhone";
import IPad from "../../Pages/IPad/iPad";
import Macbook from "../../Pages/Macbook/Macbook";
import Accessories from "../../Pages/Accessories/Accessories";
import Error from "./../../Pages/Error/Error";
import Cart from "./../Cart/Cart";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/iPhone" element={<IPhone />} />
          <Route path="/iPad" element={<IPad />} />
          <Route path="/Macbook" element={<Macbook />} />
          <Route path="/Accessories" element={<Accessories />} />
          <Route path="*" element={<Error />} />
          <Route path="/Cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routers;
