import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaFacebook, FaTiktok, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send email
  const handleEmailSubmit = () => {
    const subject = encodeURIComponent("Contact Inquiry - Nyahim Farm");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:nyahimfarm@example.com?subject=${subject}&body=${body}`;
  };

  // Send WhatsApp message
  const handleWhatsAppSubmit = () => {
    const message = encodeURIComponent(
      `Contact Inquiry from ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/254700000000?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold text-success mb-4">Contact Us</h2>
        <Row className="gy-4">
          {/* Contact Info Section */}
          <Col md={5}>
            <div className="p-4 bg-white shadow-sm rounded">
              <h5 className="fw-bold text-success mb-3">Get in Touch</h5>
              <p className="text-muted">
                Have questions, feedback, or want to visit our farm? Reach out
                to us via email, phone, or WhatsApp. We’d love to hear from you!
              </p>

              <p className="mb-2">
                <FaEnvelope className="text-success me-2" />
                nyahimfarm@example.com
              </p>
              <p>
                <FaPhone className="text-success me-2" />
                +254 700 000 000
              </p>

              <hr />

              <h6 className="fw-semibold mb-2">Follow Us:</h6>
              <div className="d-flex gap-3">
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-success fs-4"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-success fs-4"
                >
                  <FaTiktok />
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-success fs-4"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-success fs-4"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Col>

          {/* Contact Form Section */}
          <Col md={7}>
            <div className="p-4 bg-white shadow-sm rounded">
              <h5 className="fw-bold text-success mb-3">Send Us a Message</h5>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                  />
                </Form.Group>

                <div className="d-flex gap-3">
                  <Button variant="success" onClick={handleEmailSubmit}>
                    Send via Email
                  </Button>
                  <Button variant="success" onClick={handleWhatsAppSubmit}>
                    Send via WhatsApp
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
