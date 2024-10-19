import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    type: "",
    product_category: "", 
    city: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://server.tezla.in/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitStatus("success");
          setFormData({
            name: "",
            number: "",
            type: "",
            product_category: "",
            city: "",
            message: "",
          });
        } else {
          setSubmitStatus("error");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setSubmitStatus("error");
      });
  };

  return (
    <div className="container my-4">
      <h3 className="mb-5 fw-bold text-muted">Submit Your Query or Feedback</h3>

      {submitStatus === "success" && (
        <div className="alert alert-success" role="alert">
          Thank you! Your query has been submitted successfully.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="alert alert-danger" role="alert">
          Oops! There was an issue submitting your query. Please try again
          later.
        </div>
      )}

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="name">
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="contact">
              <Form.Control
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Enter your contact number"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={6}>
            <Form.Group controlId="userType">
              <Form.Control
                as="select"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Dealer">Dealer</option>
                <option value="Distributor">Distributor</option>
                <option value="Customer">Customer</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="queryType">
              <Form.Control
                as="select"
                name="product_category" 
                value={formData.product_category} 
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Tubular Battery">Tubular Battery</option>
                <option value="Inverter / Home Ups">Inverter / Home Ups</option>
                <option value="Solar PCU">Solar PCU</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={6}>
            <Form.Group controlId="city">
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Form.Group controlId="message">
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message (maximum 500 characters)"
                maxLength="500"
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="mt-4">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FeedbackForm;
