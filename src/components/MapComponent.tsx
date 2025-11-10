import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MapSection: React.FC = () => {
  return (
    <section id="map" className="py-5 bg-light">
      <Container>
        <h2 className="text-success fw-bold mb-4 text-center">
          Visit Nyahim Farm 🌾
        </h2>
        <Row className="justify-content-center">
          <Col lg={10}>
            <p className="text-center text-muted mb-4">
              We’re located in <strong>Anyiko, Kochilo, Gem, Siaya County</strong> —
              just near the scenic <strong>River Yala</strong>.  
              Come experience our sustainable vegetable gardens, poultry units, and fish ponds.
            </p>

            <div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.616771312436!2d34.53732!3d0.11908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177f48f77b91b51f%3A0x45d04173d1dfb7c3!2sAnyiko%2C%20Kochilo%2C%20Siaya%20County!5e0!3m2!1sen!2ske!4v1731224400000!5m2!1sen!2ske"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nyahim Farm Location Map"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MapSection;
