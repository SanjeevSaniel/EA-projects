import React from "react";
import About from "../../Utilities/About/About";
import Footer from "../../Utilities/Footer/Footer";
import Services from "../../Utilities/Services/Services";
import "./Home.css";
import BannerVideo from "./videos/AirPodsPro_Rebuiltfromthesoundup_Apple.mp4";

const Home = () => {
  return (
    <React.Fragment>
      <div className="banner">
        <video id="banner-video" src={BannerVideo} autoPlay loop muted></video>
      </div>
      <Services />
      <hr className="hr-one" />
      <About />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
