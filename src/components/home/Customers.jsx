import React, { useEffect, useRef, useState } from "react";
import "./Customers.css";

const Customers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [dealerNetwork, setDealerNetwork] = useState(0);
  const [servicePoints, setServicePoints] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let customerCount = 0;
      let dealerCount = 0;
      let servicePointCount = 0;

      const customerInterval = setInterval(() => {
        if (customerCount < 2) {
          customerCount += 1;
          setHappyCustomers(customerCount);
        } else {
          clearInterval(customerInterval);
        }
      }, 300);

      const dealerInterval = setInterval(() => {
        if (dealerCount < 4) {
          dealerCount += 1;
          setDealerNetwork(dealerCount);
        } else {
          clearInterval(dealerInterval);
        }
      }, 350);

      const servicePointInterval = setInterval(() => {
        if (servicePointCount < 2384) {
          servicePointCount += 298;
          setServicePoints(servicePointCount);
        } else {
          clearInterval(servicePointInterval);
        }
      }, 350);

      return () => {
        clearInterval(customerInterval);
        clearInterval(dealerInterval);
        clearInterval(servicePointInterval);
      };
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="container high-tech justify-content-center py-5 "
    >
      {/* <div className="overlay">
        <div className="overlay-content">
          <h1 className="overlay-text display-3">
            {happyCustomers.toLocaleString()} L+
          </h1>
          <h2 className="overlay-text2">Happy Customers</h2>
        </div>
        <div className="overlay-content">
          <h1 className="overlay-text display-3">
            {dealerNetwork.toLocaleString()} L+
          </h1>
          <h2 className="overlay-text2  ">Dealer Network</h2>
        </div>
        <div className="overlay-content">
          <h1 className="overlay-text display-3">
            {servicePoints.toLocaleString()} +
          </h1>
          <h2 className="overlay-text2  ">Service Points</h2>
        </div>
      </div> */}

      <div className=" chairman-message d-md-flex d-block">
        <div className="chariman-head col-md-6 col-12 ">
          <h2 className="text-center fw-bold  w-100 m-auto ">
            High-Tech Machinery For <br /> Innovative Solutions
          </h2>
          <p className="w-75  m-auto pt-2 pt-md-5 ">
            "we always stand for investing in Advanced Technologies and
            infrastructure to stay ahead of the curve. Our commitment to quality
            is unwavering, ensuring that all our products meet high performance
            and international quality standards. Our manufacturing plants are
            equipped with the latest and most advanced machines sourced from
            various countries worldwide. Our impressive list of machinery
            includes "
          </p>
        </div>
        <div className="col-md-6 col-12 pt-md-0 pt-4">
          <img
            className="background img-fluid rounded-4"
            src="https://img.freepik.com/free-photo/blue-smooth-wall-textured-background_53876-106133.jpg?ga=GA1.1.1208105082.1712396076&semt=ais_hybrid-rr-similar" // Replace with actual image
            alt="Background"
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;
