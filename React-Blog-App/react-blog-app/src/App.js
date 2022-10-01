import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home/>}></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
