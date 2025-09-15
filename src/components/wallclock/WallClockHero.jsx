import React, { useState, useEffect } from "react";

export default function WallClockHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1614588915392-652554a3b115?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Premium Wall Clock in a luxury setting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`max-w-2xl transform transition-all duration-1500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h1 className="luxury-text text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-gold">Luxury Beyond Time</span>
            <br />
            <span className="text-white">Wall Clocks for Elegant Living</span>
          </h1>
        </div>
      </div>
    </section>
  );
}