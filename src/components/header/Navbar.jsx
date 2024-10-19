import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const CustomNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  const categories = [
    {
      name: "Tubular Batteries",
      path: "TUBULAR BATTERY",
      series: [
        {
          name: "C20 Tall Tubular Batteries",
          path: "C20 TALL TUBULAR BATTERIES",
        },
        {
          name: "C10 Tall Tubular Batteries",
          path: "C10 TALL TUBULAR BATTERIES",
        },
        {
          name: "C10 Tall Tubular Batteries Premium",
          path: "C10 TALL TUBULAR BATTERIES PREMIUM",
        },
      ],
    },

    {
      name: "Inverter/Home UPS",
      path: "INVERTER",
      series: [
        {
          name: "Heavy Duty Inverter & UPS Systems",
          path: "HEAVY DUTY INVERTER & UPS SYSTEMS",
        },
        { name: "Inbuilt Solar PCU", path: "INBUILT SOLAR PCU" },
      ],
    },
    {
      name: "HKVA Inverter/UPS",
      path: "HKVA INVERTER",
      series: [],
    },

    {
      name: "Solar PCU",
      path: "SOLAR PCU",
      series: [],
    },
    {
      name: "MPPT'S",
      path: "MPPT S",
      series: [],
    },
  ];



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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${isScrolled ? "navbar-scrolled" : ""}`}
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
                  {category.name === "MPPT'S" ? (
                    <span className="text-muted">{category.name}</span> 
                  ) : (
                    <Link
                      to={`/preview/${category.path}`}
                      className="text-decoration-none text-black"
                      onClick={() => setNavbarOpen(false)}
                    >
                      {category.name}
                    </Link>
                  )}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link>
              <Link
                to="/dealer"
                className="text-decoration-none text-black nav-item"
                onClick={() => setNavbarOpen(false)}
              >
                DEALER LOCATOR
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/contact"
                className="text-decoration-none text-black nav-item"
                onClick={() => setNavbarOpen(false)}
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
