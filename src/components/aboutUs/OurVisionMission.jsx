import { ourVisionMission } from "@/data/aboutUsData";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const OurVisionMission = () => {
  const { t } = useTranslation();
  return (
    <section className="our_vision_mission">
      <Container>
        <Row className="inner_row mx-0">
          {ourVisionMission?.map(({ id, title, description, className }) => (
            <Col md={6} key={id}>
              <div className={`inner_section ${className}`}>
                <h3>{t(title)}</h3>
                <p>{t(description)}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurVisionMission;
