import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

const FarmNavbar: React.FC = () => {
  return (
    <Navbar expand="md" bg="white" variant="light" className="shadow-sm sticky-top">
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link as any} to="/" className="d-flex align-items-center gap-2">
          <FaLeaf className="text-success fs-3" />
          <span className="fw-bold text-success fs-4">Nyahim Farm</span>
        </Navbar.Brand>

        {/* Mobile toggle */}
        <Navbar.Toggle aria-controls="farm-navbar-nav" />

        {/* Collapsible menu */}
        <Navbar.Collapse id="farm-navbar-nav">
          <Nav className="ms-auto align-items-md-center">
            <Nav.Link as={Link as any} to="/" className="text-dark fw-medium">
              Home
            </Nav.Link>
            <Nav.Link as={Link as any} to="/products" className="text-dark fw-medium">
              Products
            </Nav.Link>
            <Nav.Link as={Link as any} to="/about" className="text-dark fw-medium">
              About
            </Nav.Link>
            <Nav.Link as={Link as any} to="/contact" className="text-dark fw-medium">
              Contact
            </Nav.Link>
            <Button
              as={Link as any}
              to="/order"
              variant="success"
              className="ms-md-3 mt-2 mt-md-0 px-4"
            >
              Order / Visit
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FarmNavbar;
