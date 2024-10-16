import React from "react";
import { Link, useParams } from "react-router-dom";
import "./PreviewDetails.css";

const batteryData = [
  {
    name: "C20 TALL TUBULAR BATTERIES",
    sub_name: "INVERTER & HOME UPS",
    slogan:
      "Tezla Batteries are made with advanced features to ensure efficient performance of power backup systems such as inverters, UPS, solar systems, and commercial and industrial power backups. These batteries ensure an uninterrupted energy supply for any segments of General and critical usage.",
    features1: [
      "Low Maintenance",
      "Longer Life",
      "Quick Recharge Formulation",
      "100% Tubular Batteries",
      "Ceramic Water Level Indicator",
      "99.98% Pure LEAD Used",
      "PE Envelope Separator",
      "Factory Charged Battery",
      "Longer Backup Time",
    ],
    features2: [
      "Capacity: 100 Ah - 200 Ah",
      "Rating: 20Hr",
      "SPG : 1.240@27oC",
      "LWH : 503 X 190 X 412",
    ],
    Image: "/tez-battery.jpg",
  },
  {
    name: "C10 TALL TUBULAR BATTERIES",
    sub_name: "INVERTER , HOME UPS & SOLAR APPLICATIONS",
    slogan:
      "Tezla Tubular Battery is a high-potential energy storage solution with a 10-hour rate capacity. Engineered for superior performance, this battery combines Tezla's innova¬tion with tubular technology, ensuring extended power backup for residential, com¬mercial, and industrial applications.",
    features1: [
      "Low Maintenance",
      "Longer Life",
      "Quick Recharge ",
      "100% Tubular Batteries",
      "Level Indicator",
      "99.98% Pure LEAD ",
      "PE Envelope Separator",
      "Longer Backup Time",
    ],
    features2: [
      "Capacity: 100 Ah - 220 Ah",
      "Rating: 10Hr",
      "SPG : 1.240@27oC",
      "LWH : 503 X 190 X 412",
    ],
    Image: "/tez-battery.jpg",
  },
  {
    name: "C20TALL TUBULAR BATTERIES",
    sub_name: "INVERTER , HOME UPS & SOLAR APPLICATIONS",
    slogan:
      "The versatile CIO Tubular Batteries by Tezla are extensively employed across diverse applications, guaranteeing reliable and efficient power storage. Widely used for running of inverters, UPS, Solar Systems, emergency backups, and any other residential, commercial & industrial power backup systems. Our specific advanced manufacturing technology ensures maximum durability and backup efficiency.",
    features1: [
      "Low Maintenance",
      "Longer Life",
      "Quick Recharge",
      "100% Tubular Batteries",
      "Water Level Indicator",
      "99.98% Pure LEAD ",
      "PE Envelope Separator",
      "Longer Backup Time",
    ],
    features2: [
      "Capacity: 100 Ah - 200 Ah",
      "Rating: 20Hr",
      "SPG : 1.240@27oC",
      "LWH : 503 X 190 X 412",
    ],
    Image: "/tez-battery.jpg",
  },
  // Add more battery products...
];

const upsData = [
  {
    name: "SERIES 12V",
    sub_name: "RESIDENTIAL & COMMERCIAL",
    slogan:
      "Tezla home ups range is available in a variety of power configurations to meet power back-up requirements for all homes and offices. All our power back-up for home office products go through good quality control and come with after-sales support and warranty Jive the unlimited energy lifestyle with Tezla home-ups.based on IPS (Intely power saving) technology. This saves so much electricity.",
    features1: [
      "SPECIAL FEATURES :",
      "IPS TECHNOLOGY",
      "32 BIT",
      "INPUT MAINS PROTECTION THROUGH-MCB",
      "CHARGING COMMENCES EVEN LOW AS 110 AC",
      "SMART CHARGING TECHNOLOGY",
    ],
    features2: [
      "OVERLOAD / SHORT CIRCUIT",
      "SMART THERMAL MANAGEMENT SYSTEM",
      "OVERCHARGE AND DISCHARGE PROTECTION",
      "CAPACITY : 750 VA - 1300 VA",
    ],
    Image: "/home-ups.jpg",
  },
  // Add more UPS products...
];
const hkvaData = [
  {
    name: "SERIES Higher",
    sub_name: "HEAVY DUTY INVERTER & UPS SYSTEMS",
    slogan:
      "TEZLA higher(HKVA) offers high-quality and reliable power backup for running office and sensitive equipment",
    features1: [
      "FEATURES :",
      "HIGH OVERLOAD CAPACITY",
      "IPS TECHNOLOGY",
      "ENHANCES BATTERY LIFE UP TO 70%",
      "INPUT MAINS PROTECTION",
      "INTELLIGENT THERMAL MANAGEMENT SYSTEM",
    ],
    Compactable: [
      "COMPACTABLE : ",
      " Hospital ,",
      " IT Centers ,",
      " Labs ,",
      " Factory",
      "etc.",
    ],
    protection: [
      "PROTECTION : ",
      " OVERLOAD/SHORT CIRCUIT , ",
      " OVERCHARGE AND DISCHARGE PROTECTION",
    ],
    features2: [
      "CAPACITY : 150 VA - 10000 VA",
      "VOLTAGE : 24 VDC - 120 VDC",
      "3 YEARS WARRANTY",
    ],
    Image:
      "https://5.imimg.com/data5/SELLER/Default/2022/4/MA/WC/RF/18017009/luminous-zolt-1700-home-pure-sinewave-inverter.jpg",
  },
  // Add more UPS products...
];
const solarData = [
  {
    name: "SERIES SOLAR",
    sub_name: "INBUILT SOLAR PCU",
    slogan:
      "Tezla solar ups range is a hybrid that intelligently uses grid and solar power with the ablity to operate in a wide voltage range, Tezla solar is the ideal starter solar solution for home & office appliances.",
    features1: [
      "ISOT TECHNOLOGY",
      "FAST CHARGING",
      "ECO & UPS MODE",
      "SAFETY & PROTECTION",
      "PURE SINE WAVE OUTPUT",
    ],
    features2: [
      "Voltage : 120 VDC - 48 VDC",
      "Max Champ : 30A ",
      "Max Panel Volt : 50PV - 200PV ",
      "Warranty : 3 Years",
    ],
    Image:
      "https://leaderbattery.com/wp-content/uploads/2023/03/1175-1024x1024.png",
  },
  // Add more UPS products...
];
const mpptData = [
  {
    name: "SERIES 12V",
    sub_name: "RESIDENTIAL & COMMERCIAL",
    slogan:
      "Tezla home ups range is available in a variety of power configurations to meet power back-up requirements for all homes and offices. All our power back-up for home office products go through good quality control and come with after-sales support and warranty Jive the unlimited energy lifestyle with Tezla home-ups.based on IPS (Intely power saving) technology. This saves so much electricity.",
    features1: [
      "SPECIAL FEATURES :",
      "IPS TECHNOLOGY",
      "32 BIT",
      "INPUT MAINS PROTECTION THROUGH-MCB",
      "CHARGING COMMENCES EVEN LOW AS 110 AC",
      "SMART CHARGING TECHNOLOGY",
    ],
    features2: [
      "OVERLOAD / SHORT CIRCUIT",
      "SMART THERMAL MANAGEMENT SYSTEM",
      "OVERCHARGE AND DISCHARGE PROTECTION",
      "CAPACITY : 750 VA - 1300 VA",
    ],
    Image: "/home-ups.jpg",
  },
  // Add more UPS products...
];

const PreviewDetails = () => {
  const { category } = useParams();

  let productData = [];
  if (category === "Batteries") {
    productData = batteryData;
  } else if (category === "Home Ups") {
    productData = upsData;
  } else if (category === "HKVA Inverter") {
    productData = hkvaData;
  } else if (category === "Solar PCU") {
    productData = solarData;
  } else if (category === "MPPT") {
    productData = mpptData;
  }

  return (
    <div className="preview container mx-0 px-0 mt-5">
      {productData.map((product, index) => (
        <div className="preview-main-card rounded-2 card my-5" key={index}>
          {/* <div
            className="card-header"
            style={{
              backgroundImage: `url(${product.Image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          /> */}
          <div className="preview-body card-body p-5">
            <h2 className="fw-bold card-title text-center">{product.name}</h2>
            <h4 className="fw-bold card-title text-center">
              {product.sub_name}
            </h4>
            <p className="card-text fw-medium fs-5 text-center pt-4 ">
              {product.slogan}
            </p>

            <div className="detail-section justify-content-center text-center pt-4">
              <div className="d-flex detail-main align-content-center align-items-center justify-content-center">
                <div className="detail-sub col-md-5">
                  <ul
                    className="list-unstyled fw-bold text-start"
                    style={{ lineHeight: "30px" }}
                  >
                    {product.features1.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="detail-sub-img col-md-5">
                  <img
                    src={product.Image}
                    alt=""
                    className="img-fluid rounded-4"
                  />
                </div>
              </div>


              <div className="pt-5">
                <div className="pb-2">
                  <h5 className="fw-bold">{product.Compactable}</h5>
                </div>
                <div className="fw-bold pt-2 ">{product.protection}</div>
              </div>


              <div className="text-center pt-5">
                <Link to={`/products/${category}`}>
                  <button className="btn btn-primary rounded-5 me-3">
                    View All Variants
                  </button>
                </Link>
                <button className="btn text-white btn-transparent rounded-5">
                  <i className="fa-solid fa-download text-white me-2" />
                  Download Brochure
                </button>
              </div>
            </div>
          </div>

          <div className="d-flex text-center justify-content-center pb-5 fw-bold small gap-5">
            {product.features2.map((feature, idx) => (
              <li className="list-unstyled" key={idx}>
                {feature}
              </li>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviewDetails;
