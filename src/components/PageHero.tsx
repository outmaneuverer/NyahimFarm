// src/components/PageHero.tsx
import React from "react";
import { Container } from "react-bootstrap";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, image }) => {
  return (
    <section
      className="text-white text-center d-flex align-items-center justify-content-center position-relative bordeRadius'0 0 25 25'"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "60vh",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      ></div>

      <Container className="position-relative z-1">
        <h1 className="fw-bold display-5">{title}</h1>
        {subtitle && <p className="lead mt-3">{subtitle}</p>}
      </Container>
    </section>
  );
};

export default PageHero;
