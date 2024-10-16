import React from "react";
import { useParams } from "react-router-dom";

const MainPreview = () => {
  const { category } = useParams();

  // Define images for each category
  const images = {
    "Tubular Batteries":
      "https://www.megamaxsolar.com/blogs/wp-content/uploads/2023/10/Solar-InRoof.jpg",
    "Inverter/Home UPS": "https://www.yourwebsite.com/path-to-ups-image.jpg",
    "HKVA Inverter/UPS": "https://www.yourwebsite.com/path-to-ups-image.jpg",
    "Solar PCU": "https://www.yourwebsite.com/path-to-ups-image.jpg",
    "MPPT'S": "https://www.yourwebsite.com/path-to-ups-image.jpg",
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
