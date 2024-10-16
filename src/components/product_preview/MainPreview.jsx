import React from "react";
import { useParams } from "react-router-dom";
import "./MainPreview.css";

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
    MPPT: "https://i.ytimg.com/vi/6BBsLsQKByc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDwdUos8eAburUa3-veTWFlviajcQ",
  };

  const details = {
    Batteries:
      " Tubular Batteries, designed for superior performance in UPS, inverters, and solar systems. Built with advanced tubular technology, they offer reliable, long-lasting power backup, even in deep discharges. Ideal for residential and commercial use, Tezla batteries enhance energy storage for off-grid solar systems, ensuring uninterrupted power supply.",
    "Home Ups":
      "We are a leading manufacturer of Inverters, Home UPS, and Solar UPS, offering innovative, reliable energy solutions. Our products ensure seamless power transitions, uninterrupted electricity, and eco-friendly solar power. With precision engineering, durability, and efficiency, we cater to residential, commercial, and industrial needs, delivering sustainable and uninterrupted power supply solutions.",
    "HKVA Inverter":
      "We are a leading manufacturer of Inverters, Home UPS, and Solar UPS, offering innovative, reliable energy solutions. Our products ensure seamless power transitions, uninterrupted electricity, and eco-friendly solar power. With precision engineering, durability, and efficiency, we cater to residential, commercial, and industrial needs, delivering sustainable and uninterrupted power supply solutions.",
    "Solar PCU":
      "Tezla Solar PCU offers an efficient solution for harnessing solar energy while ensuring reliable power management. Designed for both residential and commercial applications, it seamlessly integrates solar power with grid or battery backup, providing uninterrupted electricity, reducing energy costs, and promoting sustainable, eco-friendly power usage.",
    MPPT: "Tezla Solar PCU offers an efficient solution for harnessing solar energy while ensuring reliable power management. Designed for both residential and commercial applications, it seamlessly integrates solar power with grid or battery backup, providing uninterrupted electricity, reducing energy costs, and promoting sustainable, eco-friendly power usage.",
  };

  const head = {
    Batteries: "Tubular Batteries.",
    "Home Ups":
      "Inverter & Home UPS",
    "HKVA Inverter":
      "We are a leading manufacturer of Inverters, Home UPS, and Solar UPS, offering innovative, reliable energy solutions. Our products ensure seamless power transitions, uninterrupted electricity, and eco-friendly solar power. With precision engineering, durability, and efficiency, we cater to residential, commercial, and industrial needs, delivering sustainable and uninterrupted power supply solutions.",
    "Solar PCU":
      "Tezla Solar PCU offers an efficient solution for harnessing solar energy while ensuring reliable power management. Designed for both residential and commercial applications, it seamlessly integrates solar power with grid or battery backup, providing uninterrupted electricity, reducing energy costs, and promoting sustainable, eco-friendly power usage.",
    MPPT: "Tezla Solar PCU offers an efficient solution for harnessing solar energy while ensuring reliable power management. Designed for both residential and commercial applications, it seamlessly integrates solar power with grid or battery backup, providing uninterrupted electricity, reducing energy costs, and promoting sustainable, eco-friendly power usage.",
  };

  // Fallback image if category doesn't match
  const defaultImage = "https://www.example.com/default-image.jpg";

  return (
    <div className="header-section mb-5">
      <div>
        <img
          src={images[category] || defaultImage}
          alt={`${category} preview`}
          className="img-fluid"
          style={{ width: "100%" }}
        />
      </div>
      <div className="w-75 m-auto preview-data">
        <p className="w-75 m-auto">
          {details[category] || "Details not available."}
        </p>
      </div>
    </div>
  );
};

export default MainPreview;
