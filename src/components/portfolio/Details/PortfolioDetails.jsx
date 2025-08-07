import React from "react";
import TopSection from "./TopSection";
import AboutUsSection from "./AboutUsSection";
import { portfolioDetails } from "@/data/portfolioDetailsData";
import ConsultOurExperts from "@/components/home/ConsultOurExperts";
import ProblemSection from "./ProblemSection";
import SolutionSection from "./SolutionSection";


const PortfolioDetails = ({ slug }) => {
  const matchedPortfolio = portfolioDetails.find((item) => item.id === slug);

  if (!matchedPortfolio) return <div>Portfolio not found</div>;

  const {
    top,
    aboutUs,
    problem,
    solution,
  } = matchedPortfolio.sections || {};

  return (
    <>
      <TopSection data={top} />
      <AboutUsSection data={aboutUs} />
      <ProblemSection data={problem}/>
      <SolutionSection data={solution}/>
      <ConsultOurExperts />
    </>
  );
};

export default PortfolioDetails;
