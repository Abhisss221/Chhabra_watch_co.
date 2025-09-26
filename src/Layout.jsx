import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Watch, Menu, X, User, Heart, ShoppingCart, HelpCircle, Instagram, MessageSquare } from "lucide-react";

export default function Layout({ children }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // NAVIGATION MENU ITEMS - Easy to modify for beginners
  const navigationItems = [
    { name: "Home", url: createPageUrl("Home") },
    { name: "Brands & Dealing", url: createPageUrl("Brands") },
    { name: "Wall Clocks", url: createPageUrl("WallClock") }, // Added Wall Clock page
    { name: "About", url: createPageUrl("About") }
  ];

  // TOP RIGHT ICONS - Easy to modify
  const iconNavItems = [
    { name: "Login", icon: User, url: "#" },
    { name: "Wishlist", icon: Heart, url: "#" },
    { name: "Cart", icon: ShoppingCart, url: "#" },
    { name: "Help", icon: HelpCircle, url: createPageUrl("About") }
  ];
  

  const isActive = (url) => location.pathname === url;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* CSS STYLES - Customize colors and fonts here */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
          
          :root {
            --gold: #D4AF37;
            --gold-light: #F4E154;
            --gold-dark: #B8941F;
            --black: #000000;
            --gray-light: #E5E5E5;
            --gray-medium: #9CA3AF;
          }
          
          * {
            scroll-behavior: smooth;
          }
          
          .luxury-text {
            font-family: 'Cinzel', serif;
          }
          
          .modern-text {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
      
      {/* NAVIGATION BAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-gold/20' : 'bg-black/80'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* LOGO - Left side */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-2">
              <div className="p-1.5 bg-gradient-to-br from-gold to-gold-dark rounded-full">
                <Watch className="w-5 h-5 text-black" />
              </div>
              <span className="luxury-text text-xl font-bold text-gold">
                Chhabra Watch Co.
              </span>
            </Link>

            {/* MAIN NAVIGATION - Center */}
            <div className="hidden md:flex space-x-10">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`modern-text font-medium transition-all duration-300 hover:text-gold relative group ${
                    isActive(item.url) ? 'text-gold' : 'text-white'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full ${
                    isActive(item.url) ? 'w-full' : ''
                  }`} />
                </Link>
              ))}
            </div>
            
            {/* ICON NAVIGATION - Right side */}
            <div className="hidden md:flex items-center space-x-5">
              {iconNavItems.map(item => (
                <Link
                  key={item.name}
                  to={item.url}
                  className="text-white hover:text-gold transition-colors duration-300 p-1"
                  title={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gold hover:bg-gold/10 rounded-lg transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gold/20">
            <div className="px-6 py-4 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block modern-text font-medium transition-colors duration-300 py-2 ${
                    isActive(item.url) ? 'text-gold' : 'text-white hover:text-gold'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* MAIN CONTENT */}
      <main className="pt-16">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-black border-t border-gold/20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* SHOP LOCATION MAP */}
            <div className="md:col-span-1">
  <h3 className="luxury-text text-xl text-gold mb-4">Our Shop</h3>
  <div className="w-full h-48 border border-gold/30 rounded-lg overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.7886219412726!2d75.64944847471573!3d32.27375650953648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c7f9022aadc41%3A0xdfef501a82d09ae1!2sCHHABRA%20WATCH%20CO.!5e1!3m2!1sen!2sin!4v1758919497506!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Shop Location"
    ></iframe>
  </div>
</div>


            {/* FOOTER LINKS & SOCIAL MEDIA */}
            <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="luxury-text text-xl text-gold mb-4">Explore</h3>
                <ul className="space-y-3 modern-text text-gray-light">
                  <li><Link to={createPageUrl("Brands")} className="hover:text-gold transition-colors">Watches</Link></li>
                  {/*<li><Link to={createPageUrl("WallClock")} className="hover:text-gold transition-colors">Wall Clocks</Link></li>*/}
                  <li><Link to={createPageUrl("About")} className="hover:text-gold transition-colors">About Us</Link></li>
                </ul>
              </div>
              <div>
                
              </div>
              <div>
                <h3 className="luxury-text text-xl text-gold mb-4">Connect</h3>
                <div className="flex space-x-5">
                  {/* SOCIAL MEDIA LINKS - Easy to modify URLs */}
                  <a href="https://www.instagram.com/chhabra_watch_co/" target="_blank" rel="noopener noreferrer" className="text-gold hover:scale-110 transition-transform" title="Instagram">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://wa.me/9815481350" target="_blank" rel="noopener noreferrer" className="text-gold hover:scale-110 transition-transform" title="WhatsApp">
                    <MessageSquare className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <hr className="border-gold/20" />

          {/* FOOTER COPYRIGHT */}
          <div className="text-center pt-8">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="p-1.5 bg-gradient-to-br from-gold to-gold-dark rounded-full">
                <Watch className="w-4 h-4 text-black" />
              </div>
              <span className="luxury-text text-lg font-bold text-gold">
                Chhabra Watch Co.
              </span>
            </div>
            <p className="modern-text text-xs text-gray-medium">
              © 2025 Chhabra Watch Co. Timeless Luxury, Crafted for You. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}