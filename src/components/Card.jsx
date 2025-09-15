import React from 'react';

/**
 * Main Card container
 * - Black background
 * - Rounded corners
 * - Smooth border and hover effect
 */
export const Card = ({ children, className = '', ...props }) => (
  <div
    className={`bg-black border border-gray-700 hover:border-gold/40 transition-all duration-500 rounded-xl overflow-hidden shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

/**
 * Card content container
 * - Padding can be customized via className
 */
export const CardContent = ({ children, className = 'p-6', ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
);

/**
 * Card header section
 * - Usually for titles or top info
 */
export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-4 border-b border-gold/20 ${className}`} {...props}>
    {children}
  </div>
);

/**
 * Card title
 * - Styled heading for card
 */
export const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`luxury-text text-xl lg:text-2xl font-bold text-white ${className}`} {...props}>
    {children}
  </h3>
);

/**
 * Optional Card footer
 * - Can be used for actions like buttons
 */
export const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`p-4 border-t border-gold/20 ${className}`} {...props}>
    {children}
  </div>
);
