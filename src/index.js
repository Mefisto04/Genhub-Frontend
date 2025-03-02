import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Predict from "./Predict";
import About from "./About";
import "./index.css";
import ContactUs from "./components/ContactUs";

// Get the root element
const container = document.getElementById("root");

// Create a root
const root = createRoot(container);

// Render the app
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/predict" element={<Predict />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  </Router>
);
