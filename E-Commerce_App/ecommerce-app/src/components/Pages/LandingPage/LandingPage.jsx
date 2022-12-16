import React from "react";
import TopBar from "./../../Utilities/TopBar/TopBar";
import Greeting from "./../../Utilities/Greeting/Greeting";
import Routers from "./../../Utilities/Routers/Routers";
import About from "./../../Utilities/About/About";
import Footer from "./../../Utilities/Footer/Footer";
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div>
      <TopBar />
      <Greeting />
      <Routers />
      <section className="app-footer">
        <About />
        <Footer />
      </section>
    </div>
  );
};

export default LandingPage;
