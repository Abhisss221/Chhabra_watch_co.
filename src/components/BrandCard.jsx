
import React from "react";
import { Card, CardContent } from "@/components/ui/Card"; // Use custom Card

export default function BrandCard({ brand, image, description, isSignature = false, alt }) {
  return (
    <Card className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
      isSignature 
        ? 'bg-gradient-to-br from-gold/10 to-gold-dark/5 border-2 border-gold/30 hover:border-gold/60' 
        : ''
    } hover:shadow-2xl hover:shadow-gold/20`}>
      <CardContent>
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={alt}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {isSignature && (
            <div className="absolute top-4 right-4">
              <span className="bg-gold text-black px-3 py-1 text-xs font-semibold luxury-text rounded-full">
                SIGNATURE
              </span>
            </div>
          )}
          
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="luxury-text text-2xl font-bold text-white mb-2">
              {brand}
            </h3>
            <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="modern-text text-gray-light text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
