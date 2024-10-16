import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const CustomNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarRef = useRef(null);

  const categories = [
    { name: "Tubular Batteries", path: "Batteries" },
    { name: "Inverter/Home UPS", path: "Home Ups" },
    { name: "HKVA Inverter/UPS", path: "HKVA Inverter" },
    { name: "Solar PCU", path: "Solar PCU" },
    { name: "MPPT'S", path: "MPPT" },
  ];

  // Close navbar when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };

    if (navbarOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [navbarOpen]);

  return (
    <Navbar
      expand="lg"
      className="custom-navbar"
      sticky="top"
      ref={navbarRef}
      expanded={navbarOpen}
    >
      <Container>
        {/* Brand logo */}
        <Navbar.Brand>
          <Link to="/">
            <img
              src="/logo-transparant.png"
              alt="Logo"
              className="navbar-logo"
            />
          </Link>
        </Navbar.Brand>

        {/* Hamburger toggle for mobile */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setNavbarOpen(!navbarOpen)}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-main">
            <Nav.Link>
              <Link to="/" className="text-decoration-none text-black nav-item">
                ABOUT
              </Link>
            </Nav.Link>

            <NavDropdown
              title="PRODUCTS"
              className="text-black"
              id="home-solutions-dropdown"
            >
              {categories.map((category, index) => (
                <NavDropdown.Item key={index}>
                  <Link
                    to={`/preview/${category.path}`}
                    className="text-decoration-none text-black"
                    onClick={() => setNavbarOpen(false)} // Close navbar on link click
                  >
                    {category.name}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link>
              <Link
                to="/dealer"
                className="text-decoration-none text-black nav-item"
                onClick={() => setNavbarOpen(false)} // Close navbar on link click
              >
                DEALER LOCATOR
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/contact"
                className="text-decoration-none text-black nav-item"
                onClick={() => setNavbarOpen(false)} // Close navbar on link click
              >
                CONTACT
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
