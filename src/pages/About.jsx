import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Award, Users } from "lucide-react";

export default function About() {
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

  const stats = [
    { icon: Clock, value: "50+", label: "Years of Excellence" },
    { icon: Award, value: "1000+", label: "Luxury Timepieces" },
    { icon: Users, value: "10K+", label: "Satisfied Collectors" }
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Watchmaking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="luxury-text text-6xl lg:text-7xl font-bold text-white mb-8">
              Our <span className="text-gold">Legacy</span>
            </h1>
            <p className="modern-text text-xl lg:text-2xl text-gray-light leading-relaxed mb-8">
              For over five decades, Chronos Elite has been the premier destination 
              for discerning collectors seeking the world's finest timepieces.
            </p>
            <p className="modern-text text-lg text-gray-medium leading-relaxed">
              Founded on the principles of excellence, authenticity, and unparalleled service, 
              we have built lasting relationships with the most prestigious Swiss manufactures 
              and collectors worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transform transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                    <stat.icon className="w-10 h-10 text-black" />
                  </div>
                </div>
                <h3 className="luxury-text text-5xl font-bold text-gold mb-2">
                  {stat.value}
                </h3>
                <p className="modern-text text-xl text-gray-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              <h2 className="luxury-text text-5xl font-bold text-white mb-8">
                Craftsmanship & <span className="text-gold">Trust</span>
              </h2>
              <div className="space-y-6">
                <p className="modern-text text-lg text-gray-light leading-relaxed">
                  Every timepiece in our collection is carefully selected for its exceptional 
                  craftsmanship, innovative complications, and enduring value. We work directly 
                  with renowned manufactures to offer both contemporary masterpieces and rare vintage finds.
                </p>
                <p className="modern-text text-lg text-gray-light leading-relaxed">
                  Our team of certified horologists provides expert guidance, ensuring each client 
                  finds not just a watch, but a perfect companion for life's most precious moments. 
                  From acquisition to maintenance, we are committed to preserving the legacy of 
                  fine watchmaking.
                </p>
                <p className="modern-text text-lg text-gray-light leading-relaxed">
                  Trust is the foundation of our relationships. Every watch comes with a comprehensive 
                  authenticity guarantee and our exclusive lifetime service commitment.
                </p>
              </div>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Master Watchmaker"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h2 className="luxury-text text-5xl font-bold text-white mb-6">
              Visit Our <span className="text-gold">Salon</span>
            </h2>
            <p className="modern-text text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
              Experience our curated collection in an intimate, luxury setting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <h3 className="luxury-text text-xl font-semibold text-white mb-2">Address</h3>
                <p className="modern-text text-gray-light text-sm leading-relaxed">
                  123 Fifth Avenue<br />
                  New York, NY 10001
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <h3 className="luxury-text text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="modern-text text-gray-light text-sm">
                  +1 (212) 555-0123
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <h3 className="luxury-text text-xl font-semibold text-white mb-2">Email</h3>
                <p className="modern-text text-gray-light text-sm">
                  info@chronoselite.com
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <h3 className="luxury-text text-xl font-semibold text-white mb-2">Hours</h3>
                <p className="modern-text text-gray-light text-sm">
                  Mon-Sat: 10am-7pm<br />
                  Sunday: 12pm-5pm
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}