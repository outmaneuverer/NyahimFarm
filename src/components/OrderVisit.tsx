import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const OrderVisit: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent("Order/Visit Enquiry - Nyahim Farm");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProduct: ${formData.product}\nQuantity: ${formData.quantity}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:nyahimfarm@example.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppSubmit = () => {
    const message = encodeURIComponent(
      `Order/Visit Enquiry from Nyahim Farm\nName: ${formData.name}\nPhone: ${formData.phone}\nProduct: ${formData.product}\nQuantity: ${formData.quantity}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/254716182453?text=${message}`, "_blank");
  };

  return (
    <section id="order" className="py-5 bg-light">
      <Container>
        <h2 className="text-success fw-bold mb-4 text-center">Order / Visit Nyahim Farm</h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Form>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Product (Optional)</Form.Label>
                    <Form.Control
                      type="text"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      placeholder="Product you want to order"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Quantity (Optional)</Form.Label>
                    <Form.Control
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="Quantity"
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message or special request"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-flex gap-3 mt-4 justify-content-center">
                <Button variant="success" onClick={handleEmailSubmit}>
                  Send via Email
                </Button>
                <Button variant="success" onClick={handleWhatsAppSubmit}>
                  Send via WhatsApp
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OrderVisit;
