import React, { useState } from "react";
import { Carousel, Card } from "react-bootstrap";
import "./CardSlider.css";
import { Link } from "react-router-dom";

const CardSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ["Newly Launched"];

  const cardsData = {
    "Newly Launched": [
      {
        title: "Tubular Battery",
        image: "/tez-battery.jpg",
        path: "TUBULAR BATTERY", // Path for Tubular Battery
      },
      {
        title: "HKVA Inverter",
        image: "/home-ups.jpg",
        path: "HKVA INVERTER", // Path for HKVA Inverter
      },
      {
        title: "Inverter/Home UPS",
        image: "/inverter1.jpg",
        path: "INVERTER", // Path for Inverter/Home UPS
      },
    ],
  };

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="card-slider container justify-content-center p-2 p-md-5 pb-5">
      {/* Headings */}
      <h2 className="text-center fw-bold pt-5 pb-3">Our Products</h2>

      {/* Card Carousel */}
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={null}
      >
        {categories.map((category, index) => (
          <Carousel.Item key={index}>
            <div className="row container justify-content-center">
              {cardsData[category].map((card, i) => (
                <div key={i} className="col-lg-3 col-md-6 mb-4">
                  <Link
                    className="text-decoration-none"
                    to={`/preview/${card.path}`}
                  >
                    <Card className="h-100 rounded-5 mt-3">
                      <Card.Img
                        className="rounded-top-5"
                        variant="top"
                        src={card.image}
                        alt={card.title}
                      />
                      <Card.Body>
                        <Card.Title className="fw-bold text-center">
                          {card.title}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CardSlider;
