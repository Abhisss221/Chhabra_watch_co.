
import React from "react";
import { Card, CardContent } from "@/components/ui/Card"; // Use custom Card

export default function WallClock() {
  return (
    <div className="bg-black text-white">
      
      {/* HERO SECTION - Main banner */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1614588915392-652554a3b115?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury Wall Clock"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>

        {/* Hero Text */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="luxury-text text-6xl lg:text-8xl font-bold leading-tight text-white mb-6">
              Luxury Beyond Time
            </h1>
            <h2 className="luxury-text text-3xl lg:text-4xl font-bold text-gold mb-8">
              Wall Clocks for Elegant Living
            </h2>
            <p className="modern-text text-xl text-gray-light leading-relaxed">
              Transform your space with our curated collection of premium designer wall clocks. 
              Each piece combines timeless craftsmanship with modern elegance.
            </p>
          </div>
        </div>
      </section>

      {/* WALL CLOCK COLLECTIONS - Grid showcase */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="luxury-text text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-gold">Exclusive Collections</span>
            </h2>
            <p className="modern-text text-xl text-gray-light max-w-2xl mx-auto">
              Discover premium designer clocks that make a statement in any room
            </p>
          </div>

          {/* Clock Grid - Easy to add more clocks */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Clock 1 - The Minimalist */}
            <Card className="group cursor-pointer hover:shadow-2xl hover:shadow-gold/10">
              <CardContent>
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Minimalist Premium Wall Clock" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="luxury-text text-2xl font-bold text-gold mb-2">The Minimalist</h3>
                    <p className="modern-text text-gray-light text-sm">Clean lines, modern elegance</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Clock 2 - The Classic */}
            <Card className="group cursor-pointer hover:shadow-2xl hover:shadow-gold/10">
              <CardContent>
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1569048596859-1d48c8b672a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Classic Designer Wall Clock" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="luxury-text text-2xl font-bold text-gold mb-2">The Classic</h3>
                    <p className="modern-text text-gray-light text-sm">Timeless traditional design</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Clock 3 - The Modern */}
            <Card className="group cursor-pointer hover:shadow-2xl hover:shadow-gold/10">
              <CardContent>
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1612293821815-0d4f0c8c9a3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Modern Exclusive Wall Clock" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="luxury-text text-2xl font-bold text-gold mb-2">The Modern</h3>
                    <p className="modern-text text-gray-light text-sm">Contemporary artistic style</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Clock 4 - The Abstract */}
            <Card className="group cursor-pointer hover:shadow-2xl hover:shadow-gold/10">
              <CardContent>
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1517842649372-68c35395b057?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Abstract Luxury Wall Clock" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="luxury-text text-2xl font-bold text-gold mb-2">The Abstract</h3>
                    <p className="modern-text text-gray-light text-sm">Unique artistic expression</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Clock 5 - The Vintage */}
            <Card className="group cursor-pointer hover:shadow-2xl hover:shadow-gold/10">
              <CardContent>
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Vintage Style Wall Clock" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="luxury-text text-2xl font-bold text-gold mb-2">The Vintage</h3>
                    <p className="modern-text text-gray-light text-sm">Heritage meets luxury</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Clock 6 - The Industrial */}
            <Card className="group cursor-pointer hover:shadow-2xl hover:shadow-gold/10">
              <CardContent>
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1614588915392-652554a3b115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Industrial Design Wall Clock" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="luxury-text text-2xl font-bold text-gold mb-2">The Industrial</h3>
                    <p className="modern-text text-gray-light text-sm">Bold mechanical beauty</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* LIFESTYLE SECTION - Wall clocks in home settings */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side - Text content */}
            <div>
              <h2 className="luxury-text text-4xl lg:text-5xl font-bold text-white mb-8">
                Timeless <span className="text-gold">Craftsmanship</span> for Every Home
              </h2>
              <p className="modern-text text-lg text-gray-light leading-relaxed mb-6">
                Our wall clocks are more than time-telling devices; they are statement pieces that reflect your taste for elegance and design. Each clock is crafted with precision materials and an artistic vision.
              </p>
              <p className="modern-text text-lg text-gray-light leading-relaxed">
                Whether you prefer minimalist modern designs or classic vintage styles, our collection offers the perfect timepiece to become a focal point in any interior space.
              </p>
            </div>
            
            {/* Right side - Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Luxury wall clock in modern interior living room"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="luxury-text text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-gold">Our Wall Clocks</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="text-center p-8 bg-black border border-gold/20 rounded-lg hover:border-gold/40 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                <span className="luxury-text text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="luxury-text text-2xl font-bold text-white mb-4">Premium Materials</h3>
              <p className="modern-text text-gray-light">Handcrafted with the finest materials and attention to detail</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 bg-black border border-gold/20 rounded-lg hover:border-gold/40 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                <span className="luxury-text text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="luxury-text text-2xl font-bold text-white mb-4">Unique Designs</h3>
              <p className="modern-text text-gray-light">Exclusive collections that make a statement in any space</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 bg-black border border-gold/20 rounded-lg hover:border-gold/40 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                <span className="luxury-text text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="luxury-text text-2xl font-bold text-white mb-4">Lifetime Quality</h3>
              <p className="modern-text text-gray-light">Built to last with comprehensive warranty and support</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
