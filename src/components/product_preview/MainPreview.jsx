import React from "react";
import { useParams } from "react-router-dom";

const MainPreview = () => {
  const { category } = useParams();

  // Define images for each category
  const images = {
    Batteries: "/home-slider.jpg",
    "Home Ups":
      "https://www.tatagreenbattery.com/wp-content/uploads/2020/11/Banner_01_1920x837-4-1.jpg",
    "HKVA Inverter":
      "https://www.tulsibattery.com/wp-content/uploads/Luminous-iCruze-Banner.webp",
    "Solar PCU":
      "https://www.upsinverter.com/wp-content/uploads/2020/09/solar-pcu31-min.jpg",
    "MPPT":
      "https://i.ytimg.com/vi/6BBsLsQKByc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDwdUos8eAburUa3-veTWFlviajcQ",
  };

  // Fallback image if category doesn't match
  const defaultImage = "https://www.example.com/default-image.jpg";

  return (
    <div className="header-section mb-5">
      <img
        src={images[category] || defaultImage}
        alt={`${category} preview`}
        className="img-fluid"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default MainPreview;
