import React from "react";
import Hero from "../components/Hero";
import FeatureBanner from "../components/FeatureBanner";
import CoverflowSection from "../components/CoverflowSection";
import CollectionsSection from "../components/CollectionsSection";
import BrandShowcase from "../components/BrandShowcase";
import LifestyleSection from "../components/LifestyleSection";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <FeatureBanner />
      <CoverflowSection />
      {/*<CollectionsSection />*/}
      {/*<BrandShowcase />*/}
      <LifestyleSection />
    </div>
  );
}
