import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
import About from "./components/Utilities/About/About";
import Footer from "./components/Utilities/Footer/Footer";
import Greeting from "./components/Utilities/Greeting/Greeting";

function App() {
  const timeout = { enter: 600, exit: 600 };

  return (
    <div className="App">
      <TopBar />
      <Greeting />
      <TransitionGroup>
        <CSSTransition
          // key={currentKey}
          timeout={timeout}
          classNames="fade"
          appear
        >
          <Router>
            <Routes>
              {/* <Switch location={location}> */}
              <Route path="/" element={<Navbar />}>
                <Route index element={<Home />}></Route>
                <Route path="/Store" element={<Store />}></Route>
                <Route path="/iPhone" element={<IPhone />}></Route>
                <Route path="/iPad" element={<IPad />}></Route>
                <Route path="/Macbook" element={<Macbook />}></Route>
                <Route path="/Accessories" element={<Accessories />}></Route>
                <Route path="*" element={<Error />}></Route>
              </Route>
              {/* </Switch> */}
            </Routes>
          </Router>
        </CSSTransition>
      </TransitionGroup>

      <section className="app-footer">
        <About />
        <Footer />
      </section>
    </div>
  );
}

export default App;
