import React from "react";
import BannerBackground from "../Assets/bg1.jpg";
import BannerImage from "../Assets/bg4.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <div id="h-nav">
        <Navbar/>
      </div>
      <div className="home-banner-container">

        <div className="home-bannerImage-container">

          <img src={BannerBackground} alt=" "/>

        </div>

        <div className="home-text-section">
          <h1 className="primary-heading">
            Choose Your Necessary Appliances here!.
          </h1>
          <p className="primary-text">
          Eliminate the energy vampires in your house. 
          Connect all of your appliances to power strips and turn them off they're when not in use.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
