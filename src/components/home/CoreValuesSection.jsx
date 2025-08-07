
import { coreValues } from "@/data/homeData";
import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";


const CoreValuesSection = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <section className="core_values_section common_section">
      <Container>
        <Row className="mb-4">
          <Col lg={6}>
            <h2>{t("What Sets Us Apart")}</h2>
          </Col>
          <Col lg={6}>
            <h3>
              {t(
                "At Surkh, our core values guide how we think, create, and deliver with purpose."
              )}
            </h3>
          </Col>
        </Row>
        <div className="d-gl-block">
          <div className="core_value_cards">
            {coreValues.map((item, index) => (
              <CoreValuesCard
                key={index}
                icon={item.logo}
                title={t(item.title)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default CoreValuesSection;

const CoreValuesCard = ({ icon, title }) => {
  return (
    <div className="core_card">
      <div className="icon-wrapper">
        <img
          src={`/images/home/coreValues/${icon}.svg`}
          height={56}
          width={56}
          alt={title}
        />
      </div>
      <h3>{title}</h3>
    </div>
  );
};
