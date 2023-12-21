import React from "react";
import AboutBackground from "../Assets/realistic-kitchen-appliance_52683-83665.jpg";
import AboutBackgroundImage from "../Assets/gas-oven-hood-microwave-coffee-machine-set_107791-3325.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Navbar from "./Navbar";

const About = () => {
  return (
<div>
<div id="about_nav">
        <Navbar/>
      </div>
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        To me, every kitchen appliance is useful and nothing's overrated.
        </h1>
        <p className="primary-text">
        When I look at my little espresso machine, I don't see coffee.
         I see a steaming valve as an opportunity to make amazing creme brulee.
        </p>
        <p className="primary-text">
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
