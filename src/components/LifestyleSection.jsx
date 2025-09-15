import React, { useState, useEffect, useRef } from "react";

export default function LifestyleSection() {
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

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <h2 className="luxury-text text-4xl lg:text-6xl font-bold text-white mb-8">
              Craftsmanship That <span className="text-gold">Defines Time</span>
            </h2>
            <p className="modern-text text-xl text-gray-light leading-relaxed mb-6">
              Every timepiece tells a story of precision, passion, and centuries-old traditions 
              passed down through generations of master watchmakers.
            </p>
            <p className="modern-text text-lg text-gray-light leading-relaxed">
              From the intricate complications to the finest finishing touches, 
              experience the artistry that transforms metal and movement into poetry on your wrist.
            </p>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1609587312208-cea54be969e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Watch Detail"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}