import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CoverflowSection() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle item
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const watches = [
    {
      id: 1,
      brand: "Patek Philippe",
      model: "Nautilus",
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      brand: "Audemars Piguet",
      model: "Royal Oak",
      image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      brand: "Rolex",
      model: "Submariner",
      image: "https://images.unsplash.com/photo-1548068205-1247c4fcaac3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      brand: "Vacheron Constantin",
      model: "Patrimony",
      image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      brand: "Jaeger-LeCoultre",
      model: "Reverso",
      image: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      brand: "Richard Mille",
      model: "RM 27-03",
      image: "https://images.unsplash.com/photo-1611530873387-0c2a8d71b9a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      brand: "A. Lange & Söhne",
      model: "Lange 1",
      image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

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

  // Auto-scroll functionality
  useEffect(() => {
    if (isVisible) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex >= watches.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible, watches.length]);

  const handlePrevious = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : watches.length - 1);
  };

  const handleNext = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentIndex(currentIndex < watches.length - 1 ? currentIndex + 1 : 0);
  };

  const getSlideStyle = (index) => {
    const diff = index - currentIndex;
    const absDistance = Math.abs(diff);
    
    let transform = "";
    let zIndex = 10 - absDistance;
    let opacity = 1;
    let scale = 1;
    
    if (diff === 0) {
      // Active slide - center
      transform = "translateX(0) rotateY(0deg) scale(1.1)";
      zIndex = 20;
      scale = 1.1;
    } else if (diff === -1) {
      // Left of center
      transform = "translateX(-120px) rotateY(35deg) scale(0.8)";
      opacity = 0.7;
      scale = 0.8;
    } else if (diff === 1) {
      // Right of center
      transform = "translateX(120px) rotateY(-35deg) scale(0.8)";
      opacity = 0.7;
      scale = 0.8;
    } else if (diff === -2) {
      // Far left
      transform = "translateX(-200px) rotateY(45deg) scale(0.6)";
      opacity = 0.4;
      scale = 0.6;
    } else if (diff === 2) {
      // Far right
      transform = "translateX(200px) rotateY(-45deg) scale(0.6)";
      opacity = 0.4;
      scale = 0.6;
    } else {
      // Hidden slides
      opacity = 0;
      transform = diff < 0 
        ? "translateX(-300px) rotateY(60deg) scale(0.4)"
        : "translateX(300px) rotateY(-60deg) scale(0.4)";
    }

    return {
      transform,
      zIndex,
      opacity,
      scale,
      transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    };
  };

  return (
    <section ref={sectionRef} className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="luxury-text text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gold">Masterpieces</span>
          </h2>
          <p className="modern-text text-xl text-gray-light">
            Experience the pinnacle of horological artistry
          </p>
        </div>

        {/* 3D Coverflow Container */}
        <div className="relative h-96 flex items-center justify-center perspective-1000">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-8 z-30 p-3 bg-black/50 border border-gold/30 rounded-full text-gold hover:bg-gold hover:text-black transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-8 z-30 p-3 bg-black/50 border border-gold/30 rounded-full text-gold hover:bg-gold hover:text-black transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slides Container */}
          <div className="relative w-full h-80 flex items-center justify-center">
            {watches.map((watch, index) => (
              <div
                key={watch.id}
                className="absolute cursor-pointer group"
                style={getSlideStyle(index)}
                onClick={() => setCurrentIndex(index)}
              >
                <div className={`relative w-72 h-80 rounded-lg overflow-hidden ${
                  index === currentIndex 
                    ? 'shadow-2xl shadow-gold/20 ring-2 ring-gold/50' 
                    : 'shadow-xl shadow-black/50'
                }`}>
                  <img
                    src={watch.image}
                    alt={`${watch.brand} ${watch.model}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 ring-2 ring-transparent group-hover:ring-gold/60 transition-all duration-300 rounded-lg ${
                    index === currentIndex ? 'ring-gold/40' : ''
                  }`} />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="luxury-text text-2xl font-bold text-gold mb-1">
                      {watch.brand}
                    </h3>
                    <p className="modern-text text-white text-sm opacity-90">
                      {watch.model}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {watches.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gold shadow-lg shadow-gold/50' 
                    : 'bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
          perspective-origin: center center;
        }
      `}</style>
    </section>
  );
}