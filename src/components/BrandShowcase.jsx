import React, { useState, useEffect, useRef } from "react";

export default function BrandShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const brands = [
    { name: "Patek Philippe", tagline: "Begin Your Own Tradition" },
    { name: "Audemars Piguet", tagline: "To Break The Rules, You Must First Master Them" },
    { name: "Vacheron Constantin", tagline: "One of Not Many" },
    { name: "Jaeger-LeCoultre", tagline: "Master of Complications" },
    { name: "A. Lange & Söhne", tagline: "When Nothing Else Will Do" },
    { name: "Richard Mille", tagline: "A Racing Machine on the Wrist" }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="luxury-text text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="text-gold">Premier</span> Partners
          </h2>
          <p className="modern-text text-xl text-gray-light">
            The world's most prestigious watchmaking houses
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`group cursor-pointer text-center transform transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <div className="relative p-6 border border-gray-700 hover:border-gold/40 transition-all duration-300 hover:bg-gray-900/50">
                <h3 className="luxury-text text-lg font-bold text-white group-hover:text-gold transition-colors duration-300 mb-2">
                  {brand.name}
                </h3>
                <div className="transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="modern-text text-xs text-gray-light leading-relaxed">
                    {brand.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}