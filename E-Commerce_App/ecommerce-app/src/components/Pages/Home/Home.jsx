import React from "react";
import FeaturedProducts from "../../Utilities/FeaturedProducts/FeaturedProducts";
import ProductShowcase from "../../Utilities/ProductShowcase/ProductShowcase";
import Services from "../../Utilities/Services/Services";
import "./Home.css";
import BannerVideo from "./videos/AirPodsPro_Rebuiltfromthesoundup_Apple.mp4";

const Home = () => {
  const show = () => {
    setTimeout(() => {
      document.getElementById("banner-video").style.visibility = "visible";
    }, 500);
  };

  show();

  return (
    <React.Fragment>
      <div className="banner">
        <video id="banner-video" src={BannerVideo} loop muted></video>
      </div>
      <div className="product-overview">
        <ProductShowcase />
      </div>
      <Services />
      <FeaturedProducts />
    </React.Fragment>
  );
};

export default Home;
