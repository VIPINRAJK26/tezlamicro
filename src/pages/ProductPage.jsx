import React from "react";
// import ProductFilter from "../components/products/ProductFilter";
import ProductCard from "../components/products/ProductCard";
import { Row, Col } from "react-bootstrap";
import "./ProductPage.css";
import { useParams } from "react-router-dom";

const batteryData = [
  {
    image: "/tez-battery.jpg",
    title: "C20 TBL ",
    sku: "12V-100AH/20HR",
  },
  {
    image: "/tez-battery.jpg",

    title: "C20TBL1200T ",
    sku: "12V-120AH/20HR",
    price: "$200",
    oldPrice: "$220",
  },
  {
    image: "/tez-battery.jpg",

    title: "C20TBL1500T ",
    sku: "12V-150AH/20HR",
    price: "$300",
    oldPrice: "$320",
  },
  {
    image: "/tez-battery.jpg",

    title: "C20TBL2000T",
    sku: "12V – 200AH",
    price: "$400",
    oldPrice: "$420",
  },
  {
    image: "/tez-battery.jpg",

    title: "C10TBL1000",
    sku: "12V-100AH / 10HR",
  },
  {
    image: "/tez-battery.jpg",

    title: "C10TBL1200",
    sku: "12V120AH/10HR",
  },
  {
    image: "/tez-battery.jpg",

    title: "C10TBL1300",
    sku: "12V – 130AH/10HR",
  },
  {
    image: "/tez-battery.jpg",

    title: "C10TBL1300",
    sku: "12V – 130AH/10HR",
  },
  {
    image: "/tez-battery.jpg",

    title: "C10TBL1300",
    sku: "12V – 130AH/10HR",
  },
  {
    image: "/tez-battery.jpg",

    title: "C10TBL1300",
    sku: "12V – 130AH/10HR",
  },
  {
    image: "/tez-battery.jpg",

    title: "C102000",
    sku: "12V-200AH/10HR",
  },
  {
    image: "/tez-battery.jpg",

    title: "C10TBL2200",
    sku: "12V-220AH /10HR",
  },
];

const upsData = [
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "Series Higher",
    sku: "TZA1975/24VDC/150VA",
  },
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "Series Higher",
    sku: "TZA2000/24VDC/200VA",
    price: "$200",
    oldPrice: "$220",
  },
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "Series Higher",
    sku: "TZA2500/24VDC/2500VA",
  },
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "Series Higher",
    sku: "TZA3000/36VDC/3000VA",
  },
  {
    image: "/home-ups.jpg",
    title: "Series Higher",
    sku: "TZA3500/36VDC/3500VA",
  },
  {
    image: "/home-ups.jpg",
    title: "Series Higher",
    sku: "TZA4000/48VDC/4000VA",
  },
  {
    image: "/home-ups.jpg",
    title: "Series Higher",
    sku: "TZA5000/48VDC/5000VA",
  },
  {
    image: "/home-ups.jpg",
    title: "Series Higher",
    sku: "TZA6000/72VDC/6000VA",
  },
  {
    image: "/home-ups.jpg",
    title: "Series Higher",
    sku: "TZA7500/96VDC/7500VA",
  },
  {
    image: "/home-ups.jpg",
    title: "Series Higher",
    sku: "TZA10000/120VDC/10000VA",
  },
];

const hkvaData = [
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "ups 1",
    sku: "SKU123",
  },
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "ups 2",
    sku: "SKU124",
  },
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "ups 3",
    sku: "SKU125",
  },
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "ups 4",
    sku: "SKU126",
  },
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "ups 5",
    sku: "SKU127",
  },
];
const solarData = [
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "Series Solar",
    sku: "TZA1875/12VDC/30A/50PV",
  },
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "Series Solar",
    sku: "TZA2000/24VDC/40A/100PV",
  },
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "Series Solar",
    sku: "TZA3000/38VDC/60A/150PV",
  },
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "Series Solar",
    sku: "TZA4000/48VDC/60A/200PV",
  },
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "Series Solar",
    sku: "TZA5000/48VDC/60A/200PV",
  },
];
const mpptData = [
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "ups 1",
    sku: "SKU123",
    price: "$100",
    oldPrice: "$120",
  },
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "ups 2",
    sku: "SKU124",
    price: "$200",
    oldPrice: "$220",
  },
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "ups 3",
    sku: "SKU125",
    price: "$300",
    oldPrice: "$320",
  },
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "ups 4",
    sku: "SKU126",
    price: "$400",
    oldPrice: "$420",
  },
  {
    image:
      "https://www.elistaworld.com/productimg/product_1_1689570642ffff.png",
    title: "ups 5",
    sku: "SKU127",
    price: "$500",
    oldPrice: "$520",
  },
];



const Products = () => {
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

  const details = {
    Batteries:
      " Tubular Batteries",
    "Home Ups":
      " Home UPS",
    "HKVA Inverter":
      "HKVA Inverters.",
    "Solar PCU":
      "Solar PCU ",
    MPPT: "s",
  };

  return (
    <div className="product-page  justify-content-center text-center d-flex pt-5">
      <div className="justify-content-center d-flex">
        {/* <Col md={3}>
          <ProductFilter />
        </Col> */}
        <Col md={10}>
          <Row className="justify-content-center">
            <div className="col-md-10 justify-content-center text-center">
              <h1 className="fw-bold text-muted text-center pb-5">
                {details[category] || "no data"}
              </h1>
            </div>
            {productData.map((product, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <ProductCard {...product} />
              </Col>
            ))}
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default Products;
