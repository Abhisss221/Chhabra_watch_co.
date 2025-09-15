import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import WallClockPage from "./pages/WallClock";
import Brands from "./pages/Brands";

// Layout
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/wallclock" element={<WallClockPage />} />
          <Route path="/about" element={<About />} />
          {/* 404 Page */}
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-white text-4xl">Page Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
