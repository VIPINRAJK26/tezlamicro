import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductFilter from "../components/products/ProductFilter";
import ProductCard from "../components/products/ProductCard";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

const Products = () => {
  const { category: routeCategory, series: routeSeries } = useParams();
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: routeCategory ? [routeCategory] : [],
    series: routeSeries ? [routeSeries] : [],
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const categoryQuery = filters.category.length
          ? `category=${filters.category.join(",")}`
          : "";
        const seriesQuery = filters.series.length
          ? `series=${filters.series.join(",")}`
          : "";

        const queryString = [categoryQuery, seriesQuery]
          .filter(Boolean)
          .join("&");

        const response = await axios.get(
          `https://server.tezla.in/product/?${queryString}`
        );
        setProductData(response.data);
      } catch (error) {
        console.error("There was an error fetching the products!", error);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters]);

  return (
    <div className="product-page p-0 text-center container-fluid ">
      <div className="justify-content-center text-start row m-0">
        <Col md={3}>
          <ProductFilter onFilterChange={handleFilterChange} />
        </Col>
        <Col md={9}>
          <Row className="justify-content-center pro-card ">
            <div className="col-md-10 justify-content-center text-center">
              <h2 className="fw-bold text-muted text-center pt-md-4 pb-md-3 pt-5 pb-2">
                {filters.category.length > 0
                  ? filters.category.join(", ")
                  : "No Category Selected"}
              </h2>
            </div>
            {loading ? (
              <p>Loading products...</p>
            ) : error ? (
              <p>{error}</p>
            ) : productData.length <= 0 ? (
              <div className="text-center">
                <h1>No Products Found</h1>
              </div>
            ) : (
              productData.map((product, index) => (
                <Col className="px-md-2" key={index} xs={12} sm={6} md={4} lg={3}>
                  <ProductCard {...product} />
                </Col>
              ))
            )}
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default Products;
