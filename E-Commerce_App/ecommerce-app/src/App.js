import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Utilities/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import TopBar from "./components/Utilities/TopBar/TopBar";
import Error from "./components/Pages/Error/Error";
import Store from "./components/Pages/Store";
import IPhone from "./components/Pages/iPhone";
import IPad from "./components/Pages/iPad";
import Macbook from "./components/Pages/Macbook";
import Accessories from "./components/Pages/Accessories";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />}></Route>
            <Route path="/Store" element={<Store />}></Route>
            <Route path="/iPhone" element={<IPhone />}></Route>
            <Route path="/iPad" element={<IPad />}></Route>
            <Route path="/Macbook" element={<Macbook />}></Route>
            <Route path="/Accessories" element={<Accessories />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
