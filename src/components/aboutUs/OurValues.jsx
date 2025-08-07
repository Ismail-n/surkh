import { coreValues } from "@/data/aboutUsData";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const OurValues = () => {
  const { t } = useTranslation();
  return (
    <section className="our_values">
      <Container>
        <Row className="mx-0">
          <div className="inner_section">
            <h2>{t("Our Values")}</h2>
            <h3>
              {t(
                "At TOD, our work is driven by a strong set of core values that define who we are and how we deliver:"
              )}
            </h3>
            <Row className="core_values">
              {coreValues?.map((item) => (
                <CoreValueCard item={item} key={item.id} />
              ))}
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default OurValues;

const CoreValueCard = ({ item }) => {
  const { t } = useTranslation();
  const { icon, title, description } = item || {};
  return (
    <Col lg={6}>
      <div className="single_value">
        <div className="icon">
          <Image
            src={`/images/icons/ourValues/${icon}.svg`}
            width={48}
            height={48}
            alt=""
          />
        </div>
        <div className="content">
          <h2>{t(title)}</h2>
          <p>{t(description)}</p>
        </div>
      </div>
    </Col>
  );
};
