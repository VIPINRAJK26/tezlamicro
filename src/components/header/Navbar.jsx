import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        {/* Brand logo */}
        <Navbar.Brand href="#home">
          <Link to={"/"}>
            <img
              src="\logo-transparant.png"
              alt="tezla Logo"
              className="navbar-logo"
            />
          </Link>
        </Navbar.Brand>

        {/* Hamburger toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#solar" className="nav-item">
              <Link to={"/"} className="text-decoration-none text-black">About</Link>
            </Nav.Link>
            <NavDropdown title="Products" id="home-solutions-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Home Inverter
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                High Capacity Inverter
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Inverter Battery
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Long Lasting
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#mobility" className="nav-item ">
              <Link to={"/dealer"} className="text-decoration-none text-dark">
                Dealer Locator
              </Link>
            </Nav.Link>

            <Nav.Link href="#shopping" className="nav-item">
              <Link to={"/contact"} className="text-decoration-none text-black">
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
