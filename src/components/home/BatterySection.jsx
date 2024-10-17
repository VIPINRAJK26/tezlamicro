import React,{useEffect} from "react";
import { FaBatteryHalf, FaShieldAlt } from "react-icons/fa"; 
import "./Battery.css";
import AOS from "aos";
import "aos/dist/aos.css";


const BatterySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const batteryFeatures = [
    { icon: <FaBatteryHalf />, title: "Extra Long Life" },
    { icon: <FaShieldAlt />, title: "Quick Recharge" },
    { icon: <FaShieldAlt />, title: "Ceramic Indicator" },
  ];
  

  return (
    <div className="battery-section pt-5 bg-white rounded-bottom-5 container">
      <h2 className="section-title  text-black">Plant Views</h2>
      <p className="text-center pb-4  fw-medium">
        Innovation hub with very advanced technology. Efficient, scalable
        production. Rigorous quality control ensures reliable batteries and
        inverters
      </p>
      <div className="battery-grid mt-5 gap-4">
        {batteryFeatures.map((feature, index) => (
          <div key={index} className="battery-item pt-0 align-content-center" data-aos="zoom-in">
            <div className="battery-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BatterySection;
