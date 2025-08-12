import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { useTranslation } from "react-i18next";
import { mindsBehindSurkh, strategicAdvisoryPanel } from '@/data/aboutUsData';
import Image from 'next/image';




function OurTeamSection() {
  const { t } = useTranslation();

  return (
    <section className="our_team_section common_section">
      <Container>
        <Title title={t("Our Team")} />
        <SubTitle
          subTitle={t("Built by Engineers Who Lead and Build")}
        />

        <div className="surkh_innovative_it_solutions">
          <p>{t("At Surkh, we don't just develop solutions — we engineer impact. Our leadership team and advisors bring decades of experience across AI, energy, analytics, and enterprise-scale transformation. Together, they ensure Surkh stays agile, future-ready, and deeply grounded in both tech innovation and industry relevance.")}</p>
        </div>
        <div className="minds_behind_surkh">
          <h2>{t("Meet the Minds Behind Surkh")}</h2>
          <p>{t("At Surkh, we don't just build solutions — we engineer breakthroughs. Our leadership team brings together decades of experience in AI, advanced analytics, software architecture, and domain-specific problem-solving across Europe, the Middle East, and Asia.With deep roots in energy, banking, telecom, government, and non-profit sectors, we speak the language of both code and business impact.")}</p>
          <div className="minds_behind_surkh_main_wrapper">
            <Row>
              {
                mindsBehindSurkh?.map((item, index) => {
                  return <MindsBehindSurkhCard key={index} item={item} teamType="mind_behind_surkh" />;
                })
              }
            </Row>
          </div>
          <div className="stretegic_adwisory_panel minds_behind_surkh_main_wrapper">
            <h2>{t("Strategic Advisory Panel")}</h2>
            <p>{t("Guiding Innovation with Industry Expertise")}</p>
            <Row>
              {
                strategicAdvisoryPanel?.map((item, index) => {
                  return <MindsBehindSurkhCard key={index} item={item} teamType="strategic_advisory_panel" />;
                })
              }
            </Row>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default OurTeamSection

const MindsBehindSurkhCard = ({ item, teamType }) => {
  const { id, image, name, roles, location, email, description, additional } = item || {};
  const { t } = useTranslation();
  

  const [showAdditional, setShowAdditional] = useState(false);
  const [minHeight, setMinHeight] = useState(0);
  const storyRef = useRef(null);

  // Measure max height for same teamType
  

  return (
    <Col lg={6} xs={12}>
      <div className="mind_behind_surkh_single" teamtype={teamType}>
        <div className="person_details">
          {/* Top Section */}
          <div className="top">
            <Image
              src={`/images/aboutUs/mindsBehindSurkh/${image}.webp`}
              width={140}
              height={140}
              alt={t(name)}
            />
            <div className="details_main_wrapper">
              <h2>{t(name)}</h2>
              <p>{t(roles)}</p>
              <div className="single_address">
                <Image
                  src={"/images/icons/location.svg"}
                  width={24}
                  height={24}
                  alt="location"
                />
                <a href="#" target="_blank" rel="noopener noreferrer">
                  {t(location)}
                </a>
              </div>
              <div className="single_address">
                <Image
                  src={"/images/icons/sms.svg"}
                  width={24}
                  height={24}
                  alt="email"
                />
                <a href={`mailto:${email}`}>
                  {t(email)}
                </a>
              </div>
            </div>
          </div>

          <div className="vertical_saperator"></div>

          {/* Story Section with min height */}
          <div className="story" ref={storyRef} style={{ minHeight }}>
            <h2>“{t(description)}”</h2>
          </div>

          {/* Collapsible Section */}
          {showAdditional && (
            <div className="collapsible_additional_information_wrapper open">
              {additional?.map((additionalData, index) => (
                <div key={index}>
                  <p className={additionalData?.isBold ? "bold" : "normal"}>
                    {additionalData?.para}
                  </p>
                  <ul>
                    {additionalData?.points?.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <div
          className={`read_more_wrapper ${showAdditional ? "expanded" : ""}`}
          onClick={() => setShowAdditional((prev) => !prev)}
          style={{ cursor: "pointer" }}
        >
          <button type="button" className="read_more_button">
            {showAdditional ? t("Read less") : t("Read more")}
          </button>
          <Image
            src="/images/icons/surkhLanguageSwitcherArrowRed.svg"
            width={24}
            alt="language switcher arrow"
            height={24}
            className="arrow_icon"
          />
        </div>
      </div>
    </Col>
  );
};

