import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { useTranslation } from "react-i18next";

const AboutUsSection = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="about_us_section common_section">
      <Container>
        <Title title={t("About Us")} />
        <SubTitle
          subTitle={t("Surkh — Innovative IT Solutions for a Smarter Tomorrow")}
        />

        <div className="surkh_innovative_it_solutions">
          <p>{t("Surkh is a European technology partner transforming businesses through intelligent AI systems, energy-sector data solutions, and scalable web platforms.")}</p>
          <p>{t("Our founders bring decades of experience across energy analytics, data science, and full-stack engineering. We're not just developers — we're problem solvers who understand the core of your industry.")}</p>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsSection;

