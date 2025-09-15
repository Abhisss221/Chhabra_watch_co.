import React from 'react';

export default function WallClockLifestyle() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="luxury-text text-4xl lg:text-5xl font-bold text-white mb-8">
              Timeless <span className="text-gold">Craftsmanship</span> for Every Home
            </h2>
            <p className="modern-text text-lg text-gray-light leading-relaxed">
              Our wall clocks are more than time-telling devices; they are statement pieces that reflect your taste for elegance and design. Each clock is crafted with precision materials and an artistic vision, ensuring it becomes a focal point in any interior.
            </p>
          </div>
          <div className="w-full aspect-square overflow-hidden rounded-lg shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1000&q=80"
              alt="Luxury wall clock in a modern interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}