import Title from "@/components/common/Title";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const AboutUsSection = ({ data }) => {
  const { t } = useTranslation();
  const { image, title, description, tags } = data || {};
  return (
    <section className="common_section about_us_section">
      <Container>
        <Row className="inner_row">
          <Col lg={12}>
            <div className="right_section">
              <Title title={t("About Us")} />
              {description?.length > 0 &&
                description?.map((item) => (
                  <p key={item} className="desc">
                    {t(item)}
                  </p>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsSection;
