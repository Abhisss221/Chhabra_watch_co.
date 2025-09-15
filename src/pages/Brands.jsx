import React, { useState, useEffect, useRef } from "react";
import BrandCard from "../components/BrandCard";

export default function Brands() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const signatureCollections = [
    {
      brand: "Royal Collection",
      image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Handcrafted masterpieces featuring rare complications and precious metals. Limited to 50 pieces worldwide."
    },
    {
      brand: "Heritage Series",
      image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Vintage-inspired timepieces that honor traditional watchmaking while embracing modern innovation."
    }
  ];

  const premiumBrands = [
    {
      brand: "Audemars Piguet",
      image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Swiss luxury watchmaking at its finest, known for innovative designs and exceptional complications."
    },
    {
      brand: "Patek Philippe",
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "The pinnacle of horological excellence, creating timepieces for generations of discerning collectors."
    },
    {
      brand: "Vacheron Constantin",
      image: "https://images.unsplash.com/photo-1523170335258-f5c54ae6c5a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "One of the oldest watchmakers, combining artistic craftsmanship with technical mastery."
    },
    {
      brand: "Jaeger-LeCoultre",
      image: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Innovative complications and refined elegance from the Swiss Jura mountains."
    },
    {
      brand: "A. Lange & Söhne",
      image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "German precision engineering with distinctive design language and meticulous finishing."
    },
    {
      brand: "Richard Mille",
      image: "https://images.unsplash.com/photo-1611530873387-0c2a8d71b9a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Cutting-edge materials and avant-garde design meet high-performance watchmaking."
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="luxury-text text-6xl lg:text-7xl font-bold text-white mb-6">
            Our <span className="text-gold">Brands</span>
          </h1>
          <p className="modern-text text-xl text-gray-light max-w-3xl mx-auto leading-relaxed">
            Curated collection of the world's most prestigious watchmakers, 
            each representing decades of horological excellence and innovation.
          </p>
        </div>
      </section>

      {/* Signature Collections */}
      <section ref={sectionRef} className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h2 className="luxury-text text-5xl font-bold text-white mb-6">
              Our <span className="text-gold">Signature Collections</span>
            </h2>
            <p className="modern-text text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
              Exclusive timepieces available only at Chronos Elite
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {signatureCollections.map((collection, index) => (
              <div
                key={collection.brand}
                className={`transform transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                <BrandCard 
                  {...collection} 
                  isSignature={true}
                />
              </div>
            ))}
          </div>

          {/* Premium Brands */}
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h2 className="luxury-text text-5xl font-bold text-white mb-6">
              <span className="text-gold">Premium</span> Partners
            </h2>
            <p className="modern-text text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
              The world's most prestigious watchmaking houses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumBrands.map((brand, index) => (
              <div
                key={brand.brand}
                className={`transform transition-all duration-1000 delay-${(index + 1) * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                <BrandCard {...brand} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}