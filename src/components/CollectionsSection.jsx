
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/Card"; // Use custom Card
import { ArrowRight } from "lucide-react";

export default function CollectionsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const collections = [
    {
      title: "Heritage Collection",
      subtitle: "Timeless Classics",
      image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Vintage-inspired designs with modern precision",
      alt: "Vintage-style luxury watch"
    },
    {
      title: "Sport Collection",
      subtitle: "Performance Meets Style",
      image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Built for active lifestyles without compromise",
      alt: "Sporty luxury chronograph watch"
    },
    {
      title: "Dress Collection",
      subtitle: "Elegant Sophistication",
      image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Perfect for formal occasions and celebrations",
      alt: "Elegant dress watch with leather strap"
    },
    {
      title: "Limited Edition",
      subtitle: "Exclusive Masterpieces",
      image: "https://images.unsplash.com/photo-1611530873387-0c2a8d71b9a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Rare pieces for discerning collectors",
      alt: "Exclusive limited edition tourbillon watch"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="luxury-text text-4xl lg:text-5xl font-bold text-white mb-4">
            Signature <span className="text-gold">Collections</span>
          </h2>
          <p className="modern-text text-xl text-gray-light max-w-2xl mx-auto">
            Explore our carefully curated timepiece collections
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.title}
              className={`transform transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <Card className="group cursor-pointer hover:shadow-2xl hover:shadow-gold/10">
                <CardContent>
                  <div className="relative overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.alt}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="luxury-text text-xl font-bold text-white mb-1">
                        {collection.title}
                      </h3>
                      <p className="modern-text text-gold text-sm font-medium mb-2">
                        {collection.subtitle}
                      </p>
                      <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="modern-text text-gray-light text-xs leading-relaxed mb-3">
                          {collection.description}
                        </p>
                        <div className="flex items-center text-gold text-xs font-medium">
                          Explore <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
