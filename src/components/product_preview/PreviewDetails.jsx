import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./PreviewDetails.css";

const PreviewDetails = () => {
  const { category } = useParams(); 

  const [batteryData, setBatteryData] = useState([]);
  const [upsData, setUpsData] = useState([]);
  const [hkvaData, setHkvaData] = useState([]);
  const [solarData, setSolarData] = useState([]);
  const [mpptData, setMpptData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://server.tezla.in/preview/");
        const fetchedData = response.data;

        setBatteryData(
          fetchedData.filter((item) => item.category.toUpperCase() === "TUBULAR BATTERY")
        );
        setUpsData(
          fetchedData.filter((item) => item.category.toUpperCase() === "INVERTER")
        );
        setHkvaData(
          fetchedData.filter((item) => item.category.toUpperCase() === "HKVA INVERTER")
        );
        setSolarData(
          fetchedData.filter((item) => item.category.toUpperCase() === "SOLAR PCU")
        );
        setMpptData(
          fetchedData.filter((item) => item.category.toUpperCase() === "MPPT S")
        );
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let productData = [];
  if (category === "TUBULAR BATTERY") {
    productData = batteryData;
  } else if (category === "INVERTER") {
    productData = upsData;
  } else if (category === "HKVA INVERTER") {
    productData = hkvaData;
  } else if (category === "SOLAR PCU") {
    productData = solarData;
  } else if (category === "MPPT S") {
    productData = mpptData;
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="preview container mx-0 px-0 mt-md-0">
      {productData.map((product, index) => (
        <div className="preview-main-card rounded-2 card my-5" key={index}>
          <div className="preview-body card-body px-5 pt-5">
            <h2 className="fw-bold text-white card-title text-center">
              {product.series}
            </h2>
            <h4 className="fw-bold text-white card-title text-center">
              {product.sub_name}
            </h4>
            <p className="card-text fw-medium d-none">{product.slogan}</p>

            <div className="detail-section justify-content-center text-center pt-2">
              <div className="d-md-flex detail-main align-content-center align-items-center justify-content-center">
                <div className="detail-sub col-md-5 pt-1">
                  <ul className="list-unstyled fw-bold text-md-start py-md-0 py-4">
                    {product.features1.map((feature, idx) => (
                      <li key={idx} className="feature-box">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="detail-sub-img col-md-5">
                  <img
                    src={product.image}
                    alt=""
                    className="img-fluid rounded-4"
                  />
                </div>
              </div>

              <div className="pt-2">
                <div className="pb-2">
                  <h5 className="fw-bold">{product.Compactable}</h5>
                </div>
                <div className="fw-bold pt-2">{product.protection}</div>
              </div>

              <div className="text-center view-all pt-2">
                <Link to={`/products/${category}/${product.series}`}>
                  <button className="btn btn-primary mb-3 mb-md-0 rounded-5 me-md-3">
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

          <div className="d-md-flex text-center justify-content-center pb-5 fw-bold small gap-5">
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
