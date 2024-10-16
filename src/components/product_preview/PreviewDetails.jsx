import React from "react";
import { Link, useParams } from "react-router-dom";
import "./PreviewDetails.css";

// Example product data for various categories
const batteryData = [
  {
    name: "Nikola",
    slogan:
      "The power that lasts, keep your devices running longer and stronger.",
    features1: [
      "Ultra Low Maintenance",
      "Ecofriendly",
      "Specially designed for Solar Power",
    ],
    features2: [
      "Advance Dura Core",
      "Capacity: 135 Ah - 150 Ah",
      "Warranty: Upto 42 Months",
    ],
    Image: "https://path_to_image.jpg",
  },
  // Add more battery products...
];

const upsData = [
  {
    name: "Spider",
    slogan: "Switch on to a brighter tomorrow with our inverter or UPS.",
    features1: ["IPS TECHNOLOGY", "32 BIT", "OVERLOAD PROTECTION"],
    features2: [
      "Technology: Pure Sinewave",
      "Range: 1500 VA",
      "Warranty: 3 Years",
    ],
    Image: "https://path_to_image.jpg",
  },
  // Add more UPS products...
];

// Add more data arrays for other categories if needed

const PreviewDetails = () => {
  const { category } = useParams(); 

  // Map categories to product data
  let productData = [];
  if (category === "Tubular Battery") {
    productData = batteryData;
  } else if (category === "Inverter/Home UPS") {
    productData = upsData;
  } // Add more conditions for other categories

  return (
    <div className="preview container mx-0 px-0 mt-5">
      <div className="preview-main row">
        {productData.map((product, index) => (
          <div className="col-md-8 col-lg-6 col-12 p-1 mb-4" key={index}>
            <div
              className="preview-main-card rounded-0 card bg-info"
              style={{
                backgroundImage: `url(${product.Image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "550px",
              }}
            >
              <div className="preview-body ps-5 card-body">
                <h2 className="fw-bold card-title text-white">
                  {product.name}
                </h2>
                <p className="card-text fw-medium fs-5 w-75 text-white">
                  {product.slogan}
                </p>

                <div className="detail-section">
                  <ul
                    className="list-unstyled text-white fw-bold"
                    style={{ lineHeight: "30px" }}
                  >
                    {product.features1.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div className="text-start pt-5">
                    <Link to={`/products/${category}`}>
                      <button className="btn btn-primary rounded-5 me-3">
                        View All Variants
                      </button>
                    </Link>
                    <button className="btn btn-transparent rounded-5">
                      <i className="fa-solid fa-download me-2" />
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex text-center fw-bold small gap-1">
              {product.features2.map((feature, idx) => (
                <li className="list-unstyled" key={idx}>
                  {feature}
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewDetails;
