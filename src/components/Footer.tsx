import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTiktok,
  FaXTwitter,
  FaLinkedinIn,
  FaLeaf,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-success text-white pt-5 pb-3 mt-5">
      <Container>
        <Row className="gy-4">
          {/* Logo and description */}
          <Col md={4}>
            <div className="d-flex align-items-center gap-2 mb-3">
              <FaLeaf className="fs-3 text-light" />
              <h5 className="fw-bold mb-0">Nyahim Farm</h5>
            </div>
            <p>
              Fresh vegetables, poultry, and fish — sustainably grown along the
              serene River Yala in Anyiko, Kochilo, Gem, Siaya.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4}>
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white text-decoration-none">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white text-decoration-none"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Col>

          {/* Contact & Socials */}
          <Col md={4}>
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p className="mb-1">📞 +254 712 345 678</p>
            <p className="mb-3">📧 info@nyahimfarm.co.ke</p>

            <div className="d-flex gap-3">
              <a
                href="https://facebook.com"
                className="text-white fs-5"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://tiktok.com"
                className="text-white fs-5"
                target="_blank"
                rel="noreferrer"
              >
                <FaTiktok />
              </a>
              <a
                href="https://twitter.com"
                className="text-white fs-5"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white fs-5"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-light mt-4 mb-3" />

        {/* Copyright */}
        <div className="text-center small">
          © {new Date().getFullYear()} Nyahim Farm | All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
