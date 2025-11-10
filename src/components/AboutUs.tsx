import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold text-success mb-4">
          About Nyahim Farm
        </h2>

        <Row className="align-items-center gy-4">
          {/* Image Section */}
          <Col md={6}>
            <Image
              src="https://images.unsplash.com/photo-1662127246701-3af1348ee54b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHVuc3BsYXNoJTIwd2Vic2l0ZSUyMGZyb20lMjBmYXJtJTIwZW52aXJvbm1lbnRuZWFyJTIwYSUyMHJpdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"
              alt="Nyahim Farm"
              fluid
              rounded
              className="shadow"
            />
          </Col>

          {/* Text Section */}
          <Col md={6}>
            <h4 className="fw-semibold text-success">Our Story at Nyahim Farm</h4>
            <p className="text-muted">
              Nyahim Farm, nestled near the serene waters of River Yala, is a
              beacon of sustainable agriculture. What started as a small family
              initiative has grown into a thriving eco-farm dedicated to
              producing organic vegetables, poultry, and fish using natural and
              environment-friendly methods.
            </p>
            <p className="text-muted">
              We believe in harmonizing tradition and innovation — combining
              indigenous farming wisdom with modern sustainable practices to
              nourish our community and protect the earth for generations to
              come.
            </p>
          </Col>
        </Row>

        {/* Mission, Vision, Values Section */}
        <Row className="mt-5 gy-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="text-success fw-bold">Our Mission</Card.Title>
                <Card.Text className="text-muted">
                  To promote sustainable food production by embracing organic
                  farming techniques and empowering local communities with
                  knowledge and healthy produce.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="text-success fw-bold">Our Vision</Card.Title>
                <Card.Text className="text-muted">
                  To become a leading model in eco-friendly farming in Kenya —
                  inspiring young farmers and creating a greener, healthier
                  future for all.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="text-success fw-bold">Our Values</Card.Title>
                <Card.Text className="text-muted">
                  .Integrity in our work <br />
                  .Stewardship of nature <br />
                  .Empowerment of communities <br />
                  .Commitment to healthy living
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
