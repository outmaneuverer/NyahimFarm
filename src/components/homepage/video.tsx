import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-5 bg-light">
      <Container>
        <h2 className="fw-bold text-success mb-4 text-center">
          Experience Nyahim Farm in Action 🌾
        </h2>

        <Row className="align-items-center gy-4">
          {/* Farm Overview Video */}
          <Col md={6}>
            <div className="ratio ratio-16x9 rounded shadow overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/Q3rIMgFe9QQ?autoplay=1&mute=1&rel=0"
                title="Nyahim Farm overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-2 text-center text-muted">
              Farm overview: vegetables, poultry, and fish production.
            </p>
          </Col>

          {/* Fingerlings / Poultry Video */}
          <Col md={6}>
            <div className="ratio ratio-16x9 rounded shadow overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/RhSu55aVsLI?autoplay=1&mute=1&rel=0"
                title="Fingerlings / Poultry"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-2 text-center text-muted">
              Fingerlings / Poultry: Ethical and natural farming practices.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VideoSection;
