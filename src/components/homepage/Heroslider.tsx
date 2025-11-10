import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1663011351547-3cabf5b46837?auto=format&fit=crop&q=60&w=1200",
      title: "Farm-Fresh Vegetables",
      subtitle: "Organic & Nutrient-Rich",
      description:
        "Experience the taste of truly fresh vegetables, grown organically on the fertile soils near River Yala. Our sustainable farming practices ensure every harvest is packed with natural goodness and full of flavor.",
      features: ["100% Organic", "Pesticide-Free", "Locally Grown", "Harvested Daily"],
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661833346711-4bc22f68adf3?auto=format&fit=crop&q=60&w=1200",
      title: "Premium Poultry",
      subtitle: "Free-Range & Natural",
      description:
        "Our chickens roam freely across spacious pastures, feeding on natural grains and vegetation. This ethical approach produces superior meat and eggs with rich flavor and high nutrition.",
      features: ["Free-Range", "Antibiotic-Free", "Natural Feed", "Ethical Farming"],
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1757293933339-f7621d82ac44?auto=format&fit=crop&q=60&w=1200",
      title: "Fresh Fish Daily",
      subtitle: "From River to Table",
      description:
        "Harvested from our ponds fed by River Yala’s waters — ensuring the freshest, most flavorful fish for your family’s table.",
      features: ["River-Fed Ponds", "Daily Fresh Catch", "No Additives", "Sustainable Practice"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1722962674387-cb63ea17fda4?auto=format&fit=crop&q=60&w=1200",
      title: "Advanced Greenhouse",
      subtitle: "Year-Round Excellence",
      description:
        "Our state-of-the-art greenhouse ensures a steady supply of premium vegetables all year round, with water-efficient and climate-controlled systems.",
      features: ["Climate Controlled", "All-Season Supply", "Water Efficient", "Maximum Quality"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1588152850700-c82ecb8ba9b1?auto=format&fit=crop&q=60&w=1200",
      title: "Welcome to Nyahim Farm",
      subtitle: "Your Trusted Farm Partner",
      description:
        "Located in Gem, Yala Anyiko — we’re committed to sustainable agriculture and community wellness. Discover the joy of truly fresh produce.",
      features: ["Family Owned", "Community Focused", "Sustainable", "Quality Guaranteed"],
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(index);
    }
  };

  // Reset animation flag after each slide transition
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 3000);
    return () => clearInterval(autoSlide);
  }, [currentSlide]);

  return (
    <section id="home" className="position-relative overflow-hidden" style={{ height: "100vh" }}>
      <div className="container-fluid h-100 p-0 mb-0">
        <div className="row g-0 h-100 flex-column flex-lg-row">
          {/* Left: Image Section */}
          <div className="col-lg-6 position-relative h-50 h-lg-100">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`position-absolute w-100 h-100 transition-opacity ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transition: "opacity 0.8s ease-in-out",
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="position-absolute w-100 h-100"
                  style={{
                    background: "linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.1))",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Right: Content Section */}
          <div className="col-lg-6 d-flex align-items-center bg-light position-relative h-50 h-lg-100">
            <div className="p-4 p-md-5 w-100 text-center text-lg-start" style={{ maxWidth: "600px", margin: "0 auto" }}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`${index === currentSlide ? "d-block" : "d-none"}`}
                  style={{ animation: index === currentSlide ? "fadeInUp 0.8s ease-out" : "none" }}
                >
                  <span
                    className="badge bg-success px-3 py-2 text-uppercase mb-2"
                    style={{ letterSpacing: "1px", fontSize: "0.75rem" }}
                  >
                    {slide.subtitle}
                  </span>

                  <h1 className="display-5 fw-bold text-dark mb-3">{slide.title}</h1>
                  <p className="lead text-secondary mb-4">{slide.description}</p>

                  <div className="row g-3 mb-4">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="col-6">
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                          <div
                            className="bg-success rounded-circle me-2"
                            style={{ width: "8px", height: "8px" }}
                          />
                          <span className="text-dark fw-medium">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                    <button className="btn btn-success btn-lg px-4 fw-medium">
                      Explore Products
                    </button>
                    <button className="btn btn-outline-success btn-lg px-4 fw-medium">
                      Contact Us
                    </button>
                  </div>
                </div>
              ))}

              {/* Indicators */}
              <div className="d-flex justify-content-center justify-content-lg-start gap-2 mt-5">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`border-0 rounded-pill ${
                      index === currentSlide ? "bg-success" : "bg-secondary"
                    }`}
                    style={{
                      width: index === currentSlide ? "40px" : "12px",
                      height: "12px",
                      transition: "all 0.3s ease",
                      opacity: index === currentSlide ? 1 : 0.5,
                      cursor: "pointer",
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Nav Arrows */}
            <button
              onClick={prevSlide}
              className="btn btn-success position-absolute start-0 top-50 translate-middle-y ms-2 rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "35px", height: "35px", zIndex: 10 }}
              aria-label="Previous slide"
            >
              <FaChevronLeft size={10} />
            </button>
            <button
              onClick={nextSlide}
              className="btn btn-success position-absolute end-0 top-50 translate-middle-y me-2 rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "35px", height: "35px", zIndex: 10 }}
              aria-label="Next slide"
            >
              <FaChevronRight size={10} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          section#home {
            height: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
