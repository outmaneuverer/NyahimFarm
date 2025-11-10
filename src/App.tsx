// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FarmNavbar from "./components/navbar";
import HomePage from "./Pages/homePage";
import ProductsPage from "./Pages/ProductsPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./components/Footer";
import OrderVisitpage from "./Pages/OrderVisitpage";

const App: React.FC = () => {
  return (
    <Router>
      <FarmNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/order" element={<OrderVisitpage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
