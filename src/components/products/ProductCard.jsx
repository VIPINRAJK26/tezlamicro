import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ image, title, sku, price, oldPrice }) => {
  return (
    <Card
      className="mb-4"
      style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
    >
      <Link to="/single">
        <Card.Img variant="top" src={image} alt={title} />
      </Link>
      <Card.Body>
        <Card.Text>
          <div className="text-primary text-center fw-bold">{title}</div>

          <div className="text-black text-center small">{sku}</div>
        </Card.Text>
        <Link to={"/single"}>
          <Button variant="outline-primary">Enquire Now</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
