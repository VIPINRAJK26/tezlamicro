import React from "react";
import { useParams } from "react-router-dom";
import "./MainPreview.css";

const MainPreview = () => {
  const { category } = useParams();

  const images = {
    "TUBULAR BATTERY": "/home-slider.jpg",
    INVERTER: "/home-slider.jpg",
    "HKVA INVERTER": "/home-slider.jpg",
    "SOLAR PCU": "/home-slider.jpg",
    "MPPT S": "/home-slider.jpg",
  };

  const details = {
    "TUBULAR BATTERY":
      " Tubular Batteries, designed for superior performance in UPS, inverters, and solar systems. Built with advanced tubular technology, they offer reliable, long-lasting power backup, even in deep discharges. Ideal for residential and commercial use, Tezla batteries enhance energy storage for off-grid solar systems, ensuring uninterrupted power supply.",
    "INVERTER":
      "We are a leading manufacturer of Inverters, Home UPS, and Solar UPS, offering innovative, reliable energy solutions. Our products ensure seamless power transitions, uninterrupted electricity, and eco-friendly solar power. With precision engineering, durability, and efficiency, we cater to residential, commercial, and industrial needs, delivering sustainable and uninterrupted power supply solutions.",
    "HKVA INVERTER":
      "We are a leading manufacturer of Inverters, Home UPS, and Solar UPS, offering innovative, reliable energy solutions. Our products ensure seamless power transitions, uninterrupted electricity, and eco-friendly solar power. With precision engineering, durability, and efficiency, we cater to residential, commercial, and industrial needs, delivering sustainable and uninterrupted power supply solutions.",
    "SOLAR PCU":
      "Tezla Solar PCU offers an efficient solution for harnessing solar energy while ensuring reliable power management. Designed for both residential and commercial applications, it seamlessly integrates solar power with grid or battery backup, providing uninterrupted electricity, reducing energy costs, and promoting sustainable, eco-friendly power usage.",
    "MPPT S": "Tezla Solar PCU offers an efficient solution for harnessing solar energy while ensuring reliable power management. Designed for both residential and commercial applications, it seamlessly integrates solar power with grid or battery backup, providing uninterrupted electricity, reducing energy costs, and promoting sustainable, eco-friendly power usage.",
  };

  const head = {
    "TUBULAR BATTERY": "Tubular Batteries.",
    "INVERTER": "Inverter & Home UPS",
    "HKVA INVERTER":
      "We are a leading manufacturer of Inverters, Home UPS, and Solar UPS, offering innovative, reliable energy solutions. Our products ensure seamless power transitions, uninterrupted electricity, and eco-friendly solar power. With precision engineering, durability, and efficiency, we cater to residential, commercial, and industrial needs, delivering sustainable and uninterrupted power supply solutions.",
    "SOLAR PCU":
      "Tezla Solar PCU offers an efficient solution for harnessing solar energy while ensuring reliable power management. Designed for both residential and commercial applications, it seamlessly integrates solar power with grid or battery backup, providing uninterrupted electricity, reducing energy costs, and promoting sustainable, eco-friendly power usage.",
    "MPPT S":
      "Tezla Solar PCU offers an efficient solution for harnessing solar energy while ensuring reliable power management. Designed for both residential and commercial applications, it seamlessly integrates solar power with grid or battery backup, providing uninterrupted electricity, reducing energy costs, and promoting sustainable, eco-friendly power usage.",
  };

  const defaultImage = "https://www.example.com/default-image.jpg";

  return (
    <div className="header-section mb-md-0">
      <div>
        <img
          src={images[category] || defaultImage}
          alt={`${category} preview`}
          className="img-fluid"
          style={{ width: "100%" }}
        />
      </div>
      <div className=" preview-data container mt-md-4">
        <p className="">
          {details[category] || "Details not available."}
        </p>
      </div>
    </div>
  );
};

export default MainPreview;
