import ConsultOurExperts from "@/components/home/ConsultOurExperts";
import Industries from "@/components/home/Industries";
import PortfoliosSection from "@/components/portfolio/PortfoliosSection";
import TopSection from "@/components/portfolio/TopSection";
import SEO from "@/components/SEO";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore our portfolio at TOD — a showcase of innovative web projects, creative UI/UX designs, and cutting-edge digital solutions crafted with precision and passion."
      />
      <main className="portfolio">
        <TopSection />
        <PortfoliosSection />
        <Industries />
        <ConsultOurExperts />
      </main>
    </>
  );
};

export default Portfolio;
