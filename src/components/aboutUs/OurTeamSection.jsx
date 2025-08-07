import React from 'react'
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

const MindsBehindSurkhCard = ({ item ,teamType }) => {
  console.log(item);

  const { image, name, roles, location, email, description } = item || {};

  const { t } = useTranslation();
  return (
    <Col lg={6} xs={12}>
      <div className="mind_behind_surkh_single" teamType={teamType}>
        <div className="person_details">
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
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
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
                <a href="mailto:business@tod.com.sa">
                  {t(email)}
                </a>
              </div>
            </div>
          </div>
          <div className="vertical_saperator"></div>
          <div className="story">
            <h2>"{t(description)}"</h2>
          </div>
        </div>
        <div className="read_more_wrapper">
          <a href='#'>
            {t('Read more')}
          </a>
          <Image
            src="/images/icons/surkhLanguageSwitcherArrowRed.svg"
            width={24}
            alt="language switcher arrow"
            height={24}
          />

        </div>
      </div>
    </Col>
  );
};
