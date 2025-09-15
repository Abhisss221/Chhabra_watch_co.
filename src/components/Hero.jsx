
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button"; // Use custom Button
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

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
            10% OFF on First Purchase
          </p>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1548068205-1247c4fcaac3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury Wristwatch on a dark background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className={`transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h1 className="luxury-text text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-gold gold-shimmer">Timeless Luxury,</span>
              <br />
              <span className="text-white">Crafted for You</span>
            </h1>
          </div>

          <div className={`transform transition-all duration-1500 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <Link to={createPageUrl("Brands")}>
              <Button variant="outline" className="hover:shadow-lg">
                Explore Our Collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
