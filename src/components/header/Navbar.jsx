import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const CustomNavbar = () => {
  const categories = [
    { name: "Tubular Batteries", path: "Batteries" },
    { name: "Inverter/Home UPS", path: "Home Ups" },
    { name: "HKVA Inverter/UPS", path: "HKVA Inverter" },
    { name: "Solar PCU", path: "Solar PCU" },
    { name: "MPPT'S", path: "MPPT" },
  ];

  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        {/* Brand logo */}
        <Navbar.Brand>
          <Link to="/">
            <img
              src="\logo-transparant.png"
              alt="Logo"
              className="navbar-logo"
            />
          </Link>
        </Navbar.Brand>

        {/* Hamburger toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link to="/" className="text-decoration-none text-black">
                About
              </Link>
            </Nav.Link>

            <NavDropdown title="Products" id="home-solutions-dropdown">
              {categories.map((category, index) => (
                <NavDropdown.Item key={index}>
                  <Link
                    to={`/preview/${category.path}`} // Dynamic category path
                    className="text-decoration-none text-black"
                  >
                    {category.name}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link>
              <Link to="/dealer" className="text-decoration-none text-dark">
                Dealer Locator
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" className="text-decoration-none text-black">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
