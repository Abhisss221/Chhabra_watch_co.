import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Shield } from "lucide-react";

export default function FeaturedSection() {
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

  const features = [
    {
      icon: Award,
      title: "Swiss Craftsmanship",
      description: "Each timepiece is meticulously crafted by master watchmakers with generations of expertise."
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "We stand behind our watches with comprehensive warranty and expert servicing."
    },
    {
      icon: Star,
      title: "Exclusive Collections",
      description: "Access to limited edition pieces and exclusive designs unavailable elsewhere."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="luxury-text text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-gold">Chronos Elite</span>
          </h2>
          <p className="modern-text text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
            More than timepieces, we curate experiences that celebrate the art of horology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`transform transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold/20 hover:border-gold/40 transition-all duration-500 group hover:shadow-2xl hover:shadow-gold/10">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <h3 className="luxury-text text-2xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="modern-text text-gray-light leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}