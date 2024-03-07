import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar_k from "./Navbar_k";
import { FiArrowRight } from "react-icons/fi";
import "../css/landingpage.css";
import { useNavigate } from 'react-router-dom';
const Home_k = () => {
  const navigate = useNavigate();
  const handleRecipeButtonClick = () => {
    // Navigate to the Diet component with the selected dietTitle
  
    navigate(`/home`);
  };

  return (
    <div className="home-container">
      <Navbar_k />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          < img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          "Life is a combination of magic and pasta."
          </h1>
          <p className="primary-text">
          Cooking is not just about making food. It's about creating a moment that lasts a lifetime.
          </p>
          <button className="secondary-button" onClick={() => handleRecipeButtonClick()}>
            Get Started <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home_k;
