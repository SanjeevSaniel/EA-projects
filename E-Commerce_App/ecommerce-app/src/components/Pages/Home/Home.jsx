import React from "react";
// import ReactPlayer from "react-player/lazy";
import "./Home.css";
import BannerVideo from "./videos/AirPodsPro_Rebuiltfromthesoundup_Apple.mp4";

const Home = () => {
  // const video = document.getElementById("banner-video");
  // const btn = document.getElementById("myBtn");

  // const handleVideo = () => {
  //   if (video.paused) {
  //     video.play();
  //     btn.innerHTML = "Pause";
  //   } else {
  //     video.pause();
  //     btn.innerHTML = "Play";
  //   }
  // };

  return (
    <div className="banner">
      <video id="banner-video" src={BannerVideo} autoPlay loop muted></video>

      {/* <div className="content">
        <h1>Heading</h1>
        <p>Lorem ipsum...</p>
        <button id="myBtn" onclick={handleVideo}>
          Pause
        </button>
      </div> */}
      {/* <span className="banner-title">AirPods Pro</span> */}
      {/* <ReactPlayer url={BannerVideo} playing={true} loop={true} /> */}
    </div>
  );
};

export default Home;
