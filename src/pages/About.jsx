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
    { icon: Clock, value: "65+", label: "Years of Excellence" },
    { icon: Award, value: "3rd Generations", label: "Family-Owned Legacy" },
    { icon: Users, value: "16+", label: "Trusted Brands Partnered" }
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
 {/* Hero Section */}
<section className="relative py-24">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      alt="Luxury Watchmaking"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
    <div className="max-w-3xl text-center mx-auto">
      {/* Headline */}
      <h1
        className="text-6xl lg:text-7xl font-extrabold text-white mb-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Our <span className="text-gold">Legacy</span>
      </h1>

      {/* Paragraph 1 */}
      <p
        className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-6"
        style={{ fontFamily: "'Merriweather', serif" }}
      >
        For over <span className="font-bold text-gold">six decades</span>, <span className="font-bold text-gold">Chhabra Watch Co.</span> has been a trusted name in timekeeping. 
        Founded in <span className="font-bold text-gold">1960</span> by our <span className="font-bold text-gold">grandfather</span>, 
        we began as a humble shop driven by a passion for precision and craftsmanship.
      </p>

      {/* Paragraph 2 */}
      <p
        className="text-lg text-gray-400 leading-relaxed"
        style={{ fontFamily: "'Merriweather', serif" }}
      >
        What started as a small family business has grown into a destination for generations 
        seeking authentic watches, elegant wall clocks, and timeless designs. 
        Our commitment remains unchanged  quality, trust, and personal service in every timepiece.
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
              {/* Change icon color to white or gold-light */}
              <stat.icon className="w-10 h-10 text-white" />
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
      
      {/* Text Content */}
      <div className={`transform transition-all duration-1000 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
      }`}>
        <h2 className="text-5xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
          Craftsmanship & <span className="text-gold">Trust</span>
        </h2>
        <div className="space-y-6">
          <p className="text-lg text-gray-light leading-relaxed" style={{ fontFamily: "'Merriweather', serif" }}>
            From the very beginning, our philosophy has been simple to provide quality timepieces backed by integrity and personal service.
          </p>
          <p className="text-lg text-gray-light leading-relaxed" style={{ fontFamily: "'Merriweather', serif" }}>
            Each watch in our collection is chosen for its craftsmanship, reliability, and timeless appeal. Whether it’s a classic wristwatch, a wall clock, or a modern design, we ensure that every piece reflects our commitment to excellence.
          </p>
          <p className="text-lg text-gray-light leading-relaxed" style={{ fontFamily: "'Merriweather', serif" }}>
            For over <span className="font-bold text-gold">60 years</span>, families have trusted us not only for authentic watches but also for expert guidance and service.
          </p>
          <p className="text-lg text-gray-light leading-relaxed" style={{ fontFamily: "'Merriweather', serif" }}>
            We don’t just sell timepieces  we build lasting relationships, offering after-sales care and support that honors the tradition started by our <span className="font-bold text-gold">grandfather in 1960</span>.
          </p>
          <p className="text-lg text-gray-light leading-relaxed" style={{ fontFamily: "'Merriweather', serif" }}>
            Trust and craftsmanship remain the heart of who we are, as we continue to help every customer find a timepiece that becomes part of their story.
          </p>
        </div>
      </div>
      
      {/* Image */}
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
              Visit Our <span className="text-gold">Watch Shop</span>
            </h2>
            <p className="modern-text text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
              Experience our curated collection in an intimate, luxury setting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold/20 hover:border-gold/40 transition-all duration-300">
  <CardContent className="p-8 text-center">
    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
      {/* Change icon color to white or gold-light */}
      <MapPin className="w-6 h-6 text-white" />
    </div>
    <h3 className="luxury-text text-xl font-semibold text-white mb-2">Address</h3>
    <p className="modern-text text-gray-light text-sm leading-relaxed">
    Gandhi Chowk, Pathankot, Punjab<br />
      
    </p>
  </CardContent>
</Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gold/20 hover:border-gold/40 transition-all duration-300">
  <CardContent className="p-8 text-center">
    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
      {/* Change text-black to text-white or text-gold-light */}
      <Phone className="w-6 h-6 text-white" />
    </div>
    <h3 className="luxury-text text-xl font-semibold text-white mb-2">Phone</h3>
    <p className="modern-text text-gray-light text-sm">
      +91 9815481350
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
      {/* Change icon color to white or gold-light */}
      <Clock className="w-6 h-6 text-white" />
    </div>
    <h3 className="luxury-text text-xl font-semibold text-white mb-2">Hours</h3>
    <p className="modern-text text-gray-light text-sm">
      Mon-Sun: 10am-9pm
    </p>
  </CardContent>
</Card>

          </div>
        </div>
      </section>
    </div>
  );
}