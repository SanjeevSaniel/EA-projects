import React from "react";
import About from "../../Utilities/About/About";
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
      <hr className="hr-one"/>
      <About />
    </React.Fragment>
  );
};

export default Home;
