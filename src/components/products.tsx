import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  category: "Vegetables" | "Poultry" | "Fish";
  title: string;
  description: string;
  image: string;
  price?: string; // optional
}
const productsData: Product[] = [
  {
    id: 1,
    category: "Vegetables",
    title: "Fresh Kale",
    description: "Organic kale grown near River Yala.",
    image: "https://plus.unsplash.com/premium_photo-1678655491247-8e138732a82e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzYxfHx1bnNwbGFzaCUyMHdlYnNpdGUlMjBmcm9tJTIwZmFybSUyMGVudmlyb25tZW50JTIwa2FsZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    price: "sh.30 / bunch",
  },
  {
    id: 2,
    category: "Vegetables",
    title: "Tomatoes",
    description: "Juicy, ripe tomatoes, pesticide-free.",
    image: "https://plus.unsplash.com/premium_photo-1725001313912-8492832ca09f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2glMjB3ZWJzaXRlJTIwZnJvbSUyMGZhcm0lMjBlbnZpcm9ubWVudCUyMHRvbWF0b2VzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    price: "sh.200 / kg",
  },
  {
    id: 3,
    category: "Poultry",
    title: "Free-Range Chicken",
    description: "Healthy, ethically raised chickens.",
    image: "https://plus.unsplash.com/premium_photo-1664302587432-a91fc4e83001?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHVuc3BsYXNoJTIwd2Vic2l0ZSUyMGZyb20lMjBmYXJtJTIwZW52aXJvbm1lbnQlMjBoZW5zfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    price: "sh.500 / kg",
  },
  {
    id: 4,
    category: "Fish",
    title: "Tilapia",
    description: "Freshly harvested from our ponds.",
    image: "https://images.unsplash.com/photo-1624684981793-70c651670cb2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHVuc3BsYXNoJTIwd2Vic2l0ZSUyMGZyb20lMjBmYXJtJTIwZW52aXJvbm1lbnQlMjBmaXNoJTIwdGlsYXBpYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    price: "sh.250 / kg",
  },
  {
    id: 5,
    category: "Poultry",
    title: "Egg",
    description: "Fresh eggs from our chickens.",
    image: "https://images.unsplash.com/photo-1642463002808-08a667526e2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHVuc3BsYXNoJTIwd2Vic2l0ZSUyMGZyb20lMjBmYXJtJTIwZW52aXJvbm1lbnQlMjBlZ2dzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    price: "sh.250 / dozen",
  },
  {
    id: 6,
    category: "Fish",
    title: "Fingerlings",
    description: "Healthy fish fry ready for stocking ponds.",
    image: "https://media.istockphoto.com/id/1623275532/photo/rohu-carp-fish-seed-baby-fingerling-in-hand-in-nice-blur-background-fish-breeding-in-hatchery.webp?a=1&b=1&s=612x612&w=0&k=20&c=5CwO23BA4FF7tdU6pdxxaj0McbKAsRJ0o1N82l1WZcw=",
    price: "sh.100 / 100 pcs",
  },
  {
    id: 7,
    category: "Vegetables",
    title: "cow peas",
    description: "Organic, pesticide-free cow peas.",
    image: "https://images.unsplash.com/photo-1728898675285-f256434a056a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYwfHx1bnNwbGFzaCUyMHdlYnNpdGUlMjBmcm9tJTIwZmFybSUyMGVudmlyb25tZW50JTIwYmVhbnMlMjBsZWF2ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    price: "sh.20 / bunch",
  },
  {
    id: 8,
    category: "Poultry",
    title: "Chicken",
    description: "Healthy chickens raised naturally.",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&auto=format&fit=crop",
    price: "sh.500 / kg",
  },
  {
    id: 9,
    category: "Poultry",
    title: "Egg",
    description: "Fresh eggs from our chickens.",
    image: "https://images.unsplash.com/photo-1622273941878-81f75aa0a034?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHVuc3BsYXNoJTIwd2Vic2l0ZSUyMGZyb20lMjBmYXJtJTIwZW52aXJvbm1lbnQlMjBlZ2dzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    price: "sh.140/ dozen",
  }
];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    "Vegetables" | "Poultry" | "Fish" | "All"
  >("All");

  const filteredProducts =
    activeCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-5 bg-light">
      <Container>
        <h2 className="fw-bold text-success mb-4 text-center">Our Products</h2>

        {/* Category Filter */}
        <Nav
          variant="pills"
          className="justify-content-center mb-4"
          activeKey={activeCategory}
        >
          {["All", "Vegetables", "Poultry", "Fish"].map((cat) => (
            <Nav.Item key={cat}>
              <Nav.Link
                eventKey={cat}
                onClick={() =>
                  setActiveCategory(cat as "All" | "Vegetables" | "Poultry" | "Fish")
                }
                className="text-dark fw-medium px-4 py-2"
              >
                {cat}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* Products Grid */}
        <Row className="g-4">
          {filteredProducts.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="img-fluid"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">{product.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {product.description}
                  </Card.Text>
                  {product.price && (
                    <p className="fw-semibold text-success">{product.price}</p>
                  )}
                  <Button variant="success" className="mt-auto">
                    <Link
                      to="/order"
                      className="text-white text-decoration-none"
                    >
                      Order Now
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products;
