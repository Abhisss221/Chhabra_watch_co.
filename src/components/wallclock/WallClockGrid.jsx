import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const clocks = [
  { name: "The Minimalist", image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&w=800&q=80", alt: "Minimalist premium wall clock" },
  { name: "The Classic", image: "https://images.unsplash.com/photo-1569048596859-1d48c8b672a9?auto=format&fit=crop&w=800&q=80", alt: "Classic designer wall clock" },
  { name: "The Modern", image: "https://images.unsplash.com/photo-1612293821815-0d4f0c8c9a3d?auto=format&fit=crop&w=800&q=80", alt: "Modern exclusive wall clock" },
  { name: "The Abstract", image: "https://images.unsplash.com/photo-1517842649372-68c35395b057?auto=format&fit=crop&w=800&q=80", alt: "Abstract luxury wall clock" },
];

export default function WallClockGrid() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="luxury-text text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-gold">Exclusive Wall Clocks</span>
          </h2>
          <p className="modern-text text-xl text-gray-light max-w-2xl mx-auto">
            Discover a curated selection of premium designer clocks.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clocks.map((clock) => (
            <Card key={clock.name} className="group cursor-pointer bg-black border border-gray-700 hover:border-gold/40 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img src={clock.image} alt={clock.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="luxury-text text-xl font-bold text-gold">{clock.name}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}