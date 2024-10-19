import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({  name, spec,image }) => {
  return (
    <Card
      className="mb-4"
      style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
    >
      <Link to="#">
        <Card.Img variant="top" src={image} alt={"no image"} />
      </Link>
      <Card.Body className="text-center">
        <Card.Text>
          <div className="text-primary text-center fw-bold">{name}</div>
          <div className="text-black text-center small">{spec}</div>
        </Card.Text>
          <Button
            href="https://wa.me/917902777727
"
            variant="outline-primary"
          >
            Enquire Now
          </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
