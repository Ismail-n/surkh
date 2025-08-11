import ConsultOurExperts from "@/components/home/ConsultOurExperts";
import Industries from "@/components/home/Industries";
import Services from "@/components/ourServices/Services";
import TopSection from "@/components/ourServices/TopSection";
import SEO from "@/components/SEO";
import { servicesData } from "@/data/servicesData";
import React, { useState } from "react";

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0] || {});

  return (
    <>
      <SEO
        title="Our Services"
        description="Explore the full range of services offered by TOD — from mobile app and full-stack development to AI/ML, cloud solutions, UI/UX design, and Odoo customisation tailored to your business needs."
      />
      <main className="our_services">
        <TopSection selectedService={selectedService} />
        <Services
          servicesData={servicesData}
          setSelectedService={setSelectedService}
          selectedService={selectedService}
        />
        <ConsultOurExperts />
      </main>
    </>
  );
};

export default OurServices;
