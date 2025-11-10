import React, { useState } from 'react';
import { FaArrowRight, FaWarehouse } from 'react-icons/fa';
import { FaDroplet } from 'react-icons/fa6';
import { LuEgg, LuHeart, LuSprout } from 'react-icons/lu';
import { PiFish } from 'react-icons/pi';

const WhatWeDo: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <LuSprout size={40} />,
      title: "Organic Vegetable Farming",
      shortDesc: "Fresh, chemical-free vegetables grown with care",
      fullDesc: "We cultivate a wide variety of organic vegetables using sustainable farming practices on the fertile soils near River Yala. Our commitment to natural growing methods ensures that every vegetable is packed with nutrients and free from harmful pesticides.",
      highlights: [
        "Over 20 varieties of seasonal vegetables",
        "100% organic, no synthetic fertilizers",
        "Soil health management practices",
        "Crop rotation for sustainability"
      ],
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop",
      color: "success"
    },
    {
      icon: <LuEgg size={40} />,
      title: "Free-Range Poultry",
      shortDesc: "Healthy chickens raised naturally for quality products",
      fullDesc: "Our poultry roam freely in spacious, natural environments where they can exhibit natural behaviors. Fed with quality grains and natural supplements, our chickens produce superior meat and eggs that are both delicious and nutritious.",
      highlights: [
        "Spacious free-range environment",
        "Natural grain-based diet",
        "No antibiotics or growth hormones",
        "Fresh eggs collected daily"
      ],
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&auto=format&fit=crop",
      color: "warning"
    },
    {
      icon: <PiFish size={40} />,
      title: "Sustainable Fish Farming",
      shortDesc: "Fresh fish from our river-fed ponds",
      fullDesc: "Our aquaculture ponds are fed by the pristine waters of River Yala, creating an ideal environment for raising healthy fish. We practice sustainable fish farming that maintains water quality and ensures the well-being of our aquatic stock.",
      highlights: [
        "River Yala water system",
        "Multiple fish species available",
        "Natural pond ecosystem",
        "Regular quality monitoring"
      ],
      image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=800&auto=format&fit=crop",
      color: "info"
    },
    {
      icon: <FaWarehouse size={40} />,
      title: "Greenhouse Production",
      shortDesc: "Year-round controlled environment farming",
      fullDesc: "Our modern greenhouse facilities allow us to maintain optimal growing conditions throughout the year. This technology enables consistent production of high-quality vegetables regardless of external weather conditions, ensuring a steady supply for our customers.",
      highlights: [
        "Climate-controlled environment",
        "All-season production capability",
        "Water-efficient irrigation systems",
        "Pest management without chemicals"
      ],
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&auto=format&fit=crop",
      color: "primary"
    },
    {
      icon: <FaDroplet size={40} />,
      title: "Water Conservation",
      shortDesc: "Sustainable water management systems",
      fullDesc: "We implement advanced water conservation techniques including rainwater harvesting, drip irrigation, and pond recycling systems. Our proximity to River Yala is managed responsibly to ensure sustainable water use for all our farming operations.",
      highlights: [
        "Rainwater collection systems",
        "Efficient drip irrigation",
        "Water recycling infrastructure",
        "Responsible river water usage"
      ],
      image: "https://images.unsplash.com/photo-1629285387821-7b30a90340b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5zcGxhc2glMjB3ZWJzaXRlJTIwZnJvbSUyMGZhcm0lMjBlbnZpcm9ubWVudCUyMHdhdGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      color: "secondary"
    },
    {
      icon: <LuHeart size={40} />,
      title: "Community Engagement",
      shortDesc: "Building strong local partnerships",
      fullDesc: "We believe in giving back to our community in Gem, Yala Anyiko. Through educational programs, employment opportunities, and partnerships with local businesses, we work to strengthen the agricultural community and promote sustainable farming practices.",
      highlights: [
        "Local employment opportunities",
        "Farm education programs",
        "Support for local markets",
        "Agricultural training workshops"
      ],
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop",
      color: "danger"
    }
  ];

  return (
    <section id="what-we-do" className="py-0" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container py-5">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="badge bg-success px-3 py-2 mb-3" style={{ letterSpacing: '1px', fontSize: '0.8rem' }}>
            OUR SERVICES
          </span>
          <h2 className="display-4 fw-bold mb-3">What We Do</h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
            At Nyahim Farm, we're dedicated to sustainable agriculture and quality production. 
            Discover how we bring fresh, healthy farm products from our fields to your table.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4 mb-5">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div 
                className={`card h-100 border-0 shadow-sm transition-all ${activeService === index ? 'shadow-lg' : ''}`}
                style={{ 
                  cursor: 'pointer',
                  transform: activeService === index ? 'translateY(-10px)' : 'translateY(0)',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setActiveService(index)}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="card-body p-4">
                  <div className={`text-${service.color} mb-3`}>
                    {service.icon}
                  </div>
                  <h4 className="fw-bold mb-3">{service.title}</h4>
                  <p className="text-secondary mb-3">{service.shortDesc}</p>
                  <button 
                    className={`btn btn-outline-${service.color} btn-sm d-flex align-items-center gap-2`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveService(index);
                    }}
                  >
                    Learn More <FaArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View */}
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div 
              className="rounded-3 overflow-hidden shadow-lg position-relative"
              style={{ height: '500px' }}
            >
              <img 
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-100 h-100 object-fit-cover"
                style={{ transition: 'opacity 0.5s ease' }}
              />
              <div 
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ 
                  background: `linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7))` 
                }}
              />
              <div className="position-absolute bottom-0 start-0 p-4 text-white">
                <div className={`text-${services[activeService].color} mb-2`}>
                  {services[activeService].icon}
                </div>
                <h3 className="fw-bold">{services[activeService].title}</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="ps-lg-4">
              <span className={`badge bg-${services[activeService].color} px-3 py-2 mb-3`}>
                Featured Service
              </span>
              <h3 className="display-6 fw-bold mb-4">
                {services[activeService].title}
              </h3>
              <p className="lead text-secondary mb-4" style={{ lineHeight: '1.8' }}>
                {services[activeService].fullDesc}
              </p>

              <div className="row g-3">
                {services[activeService].highlights.map((highlight, idx) => (
                  <div key={idx} className="col-12">
                    <div className="d-flex align-items-start gap-3">
                      <div 
                        className={`bg-${services[activeService].color} bg-opacity-10 rounded-circle p-2 d-flex align-items-center justify-content-center`}
                        style={{ minWidth: '40px', height: '40px' }}
                      >
                        <div 
                          className={`bg-${services[activeService].color} rounded-circle`}
                          style={{ width: '8px', height: '8px' }}
                        />
                      </div>
                      <div>
                        <p className="mb-0 fw-medium">{highlight}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3">
                <button className={`btn btn-${services[activeService].color} btn-lg px-5 py-3 fw-medium`}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row g-4 mt-5 pt-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm bg-success text-white">
              <div className="card-body p-5">
                <div className="row g-4 text-center">
                  <div className="col-6 col-md-3">
                    <h2 className="display-4 fw-bold mb-2">15+</h2>
                    <p className="mb-0 text-white-50">Years Experience</p>
                  </div>
                  <div className="col-6 col-md-3">
                    <h2 className="display-4 fw-bold mb-2">500+</h2>
                    <p className="mb-0 text-white-50">Happy Customers</p>
                  </div>
                  <div className="col-6 col-md-3">
                    <h2 className="display-4 fw-bold mb-2">20+</h2>
                    <p className="mb-0 text-white-50">Product Varieties</p>
                  </div>
                  <div className="col-6 col-md-3">
                    <h2 className="display-4 fw-bold mb-2">100%</h2>
                    <p className="mb-0 text-white-50">Organic Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .transition-all {
          transition: all 0.3s ease;
        }
        .object-fit-cover {
          object-fit: cover;
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;