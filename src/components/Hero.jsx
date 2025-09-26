import React, { useState, useEffect } from "react";
// Removed Button, ArrowRight, Link imports
import { createPageUrl } from "@/utils";
import heroImage from "@/assets/logo3.jpeg"; // Import local image

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Promo Strip */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-black z-10">
        <div className="max-w-7xl mx-auto px-6 py-2 text-center">
          <p className="modern-text text-sm font-medium">
            
          </p>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Watch Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      {/* Content (text removed) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <div
            className={`transform transition-all duration-1500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            {/* Headline removed */}
          </div>
        </div>
      </div>
    </section>
  );
}
