import React, { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

export default function PromotionalBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-black text-gold"
      >
        <div className="relative max-w-7xl mx-auto py-3 px-6 lg:px-8 flex items-center justify-center">
          <p className="modern-text font-medium text-sm sm:text-base">
            Welcome Offer: 10% off on your first visit.
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 p-1 rounded-full hover:bg-gold/10 transition-colors duration-200"
            aria-label="Dismiss promotional banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}