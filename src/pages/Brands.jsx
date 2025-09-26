import React, { useState, useEffect, useRef } from "react";
import BrandCard from "../components/BrandCard";

export default function Brands() {
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


  const premiumBrands = [
    {
      brand: "",
      image: "https://cdn.shopify.com/s/files/1/0564/1519/1240/files/ANNE_KLEIN.jpg?v=1732090229",
      description: "Elegant, fashion-forward designs created exclusively for women with a taste for sophistication."
    },
    {
      brand: "Casio",
      image: "https://www.casio.com/content/experience-fragments/casio/en/feature/timepiece/watch/casiotron/trn-50ze/kv/master/_jcr_content/root/container_2106131580/image_copy.casiocoreimg.jpeg/1725515437486/kv.jpeg",
      description: "Japanese innovation at its best. From rugged G-Shock to sporty Edifice, Casio watches are built for performance and durability."
    },
    {
      brand: "Citizen",
      image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Pioneers of Eco-Drive technology, Citizen combines precision, sustainability, and sleek design in every timepiece."
    },
    {
      brand: "Fossil",
      image: "https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw55dbd0de/2025/FA25/set_07212025_global_early_fall/icons/mens/mobile-mens-icons-3-everettA-327x400.jpg",
      description: "A brand that combines classic American style with modern technology, offering a range of watches for every occasion."
    },
    {
      brand: "Fastrack",
      image: "https://www.fastrack.in/on/demandware.static/-/Library-Sites-FastrackSharedLibrary/default/dwa120a1a9/images/login/autologin-banner-desktop-fastrack_500x500.jpg",
      description: "Bold, youthful, and full of attitude perfect for those who love to stay on trend."
    },
    {
      brand: "Guess",
      image: "//guesswatches.com/cdn/shop/files/GW0945L4_Q.png?v=1753284484&width=768",
      description: "Chic and contemporary, Guess watches are bold fashion statements designed for trendsetters."
    },
    {
      brand: "Kenneth Cole",
      image: "https://img.youtube.com/vi/XeP_8pEkfpY/0.jpg",
      description: "Classic New York style, where fashion meets functionality in sleek watch designs."
    },
    {
      brand: "Lee Cooper",
      image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/25977756/2023/12/18/b6f59ea2-77a1-407b-8555-7e9af7b910401702873838297-Lee-Cooper-Men-Textured-Dial--Silicon-Straps-Analogue-Watch--6.jpg",
      description: "A global lifestyle brand, bringing British denim-inspired style to the wrist."
    },
    {
      brand: "Logues",
      image: "https://cdn.prod.website-files.com/669a292e74131814a39384e5/66ac97587cc7527377d7c59d_01-p-500.png",
      description: "Stylish and affordable, Logues brings versatile designs for the modern lifestyle."
    },
    {
      brand: "Maxima",
      image: "",
      description: "Reliable everyday watches, combining affordability with long-lasting performance."
    },
    {
      brand: "Police",
      image: "https://www.watchpilot.com/cdn/shop/files/POLICE_MENS_Mobile_414_x_414px.jpg?v=6051442967423119317",
      description: "Bold, urban, and edgy — watches that make a strong statement."
    },
    {
      brand: "Sonata",
      image: "https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb3a2e34c/images/Sonata/Catalog/77147YM02_1.jpg?sw=600&sh=600",
      description: "Affordable, reliable, and stylish everyday watches trusted by millions."
    },
    {
      brand: "Timex",
      image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/29175688/2025/7/29/62c3eed8-bef7-4e12-ac97-c01084e9fbe11753772623596-Timex-Men-Bracelet-Style-Straps-Analogue-Chronograph-Watch-T-15.jpg",
      description: "Heritage and durability meet modern functionality. A US brand loved worldwide for dependable timekeeping."
    },
    {
      brand: "Titan",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwbd8e8365/images/Titan/Catalog/90110WL04_1.jpg?sw=600&sh=600",
      description: "India’s most loved watch brand, known for timeless designs and unmatched trust. From elegant formals to stylish Raga and ultra-slim Edge collections."
    },
    {
      brand: "Tommy Hilfiger",
      image: "https://watchesprime.com/wp-content/uploads/2023/07/1791965-tommy-hilfiger-watch-men-blue-dial-leather-brown-strap-quartz-analog-chronograph-5atm-165-feet-water-resistant-owen_7.webp",
      description: "American style, timeless elegance. From casual to dressy, Tommy Hilfiger watches blend modern design with classic appeal."
    },
    {
      brand: "Xylys",
      image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw291dc4be/images/Xylys/Catalog/40043KL02_1.jpg?sw=600&sh=600",
      description: "Premium Swiss-made watches with refined craftsmanship and precision."
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
    <h1 className="luxury-text text-6xl lg:text-7xl font-bold text-white mb-6">
      Our <span className="text-gold">Variety</span>
    </h1>
    <p className="modern-text text-xl text-gray-light max-w-3xl mx-auto leading-relaxed">
      We offer a wide range of watches starting at just 
      <span className="text-gold font-semibold"> ₹300 </span>
      and going all the way up to premium 
      <span className="text-gold font-semibold"> Swiss brands</span>.
      There’s something for every style and budget.
    </p>
  </div>
</section>


      {/* Signature Collections */}
      <section ref={sectionRef} className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          

         

          {/* Premium Brands */}
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <h2 className="luxury-text text-5xl font-bold text-white mb-6">
              <span className="text-gold">Our Official </span> Partners
            </h2>
            <p className="modern-text text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
              Includes the  world's most prestigious watchmaking houses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumBrands.map((brand, index) => (
              <div
                key={brand.brand}
                className={`transform transition-all duration-1000 delay-${(index + 1) * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                <BrandCard {...brand} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}