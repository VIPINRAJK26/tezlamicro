import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    city: '',
    queryType: '',
    message: '',
    userType: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="container my-4">
      <h3 className="mb-5 fw-bold text-muted">Submit Your Query or Feedback</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="name">
              {/* <Form.Label>Name *</Form.Label> */}
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
              {/* <Form.Label>Contact No *</Form.Label> */}
              <Form.Control
                type="text"
                name="contact"
                value={formData.contact}
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
              {/* <Form.Label>Are you?</Form.Label> */}
              <Form.Control
                as="select"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                placeholder="select category"
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
              {/* <Form.Label>Select Query Type *</Form.Label> */}
              <Form.Control
                as="select"
                name="queryType"
                value={formData.queryType}
                onChange={handleChange}
                required
                placeholder="select query type"
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
              {/* <Form.Label>Enter City *</Form.Label> */}
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
              {/* <Form.Label>Message (maximum 500 characters)</Form.Label> */}
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message(maximum 500 characters)"
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
