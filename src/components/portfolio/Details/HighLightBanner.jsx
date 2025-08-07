import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const HighLightBanner = ({ data }) => {
  const { t } = useTranslation();
  const { title, description, image, backgroundColor } = data || {};
  return (
    <section
      className="common_section highlight_section"
      style={{ backgroundColor }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <div className="content">
              <h2>{t(title)}</h2>
              <p>{t(description)}</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Image
        src={image}
        alt="Pudding"
        width={718}
        height={635}
        className="right_bg_img"
      />
    </section>
  );
};

export default HighLightBanner;
