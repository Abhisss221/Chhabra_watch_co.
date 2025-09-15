import React from 'react';

// BEGINNER-FRIENDLY: This file contains custom Card components.
// You can change their base styles here.
// These components provide a consistent structure for all cards on the site.

// The main card container with a black background and border.
export const Card = ({ children, className = '', ...props }) => (
  <div
    className={`bg-black border border-gray-700 hover:border-gold/40 transition-all duration-500 rounded-lg overflow-hidden ${className}`}
    {...props}
  >
    {children}
  </div>
);

// A simple container for the main content inside a card.
export const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-0 ${className}`} {...props}>
    {children}
  </div>
);

// A container for the header section of a card.
export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-6 border-b border-gold/20 ${className}`} {...props}>
    {children}
  </div>
);

// A styled heading for the card's title.
export const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`luxury-text text-xl font-bold text-white ${className}`} {...props}>
    {children}
  </h3>
);