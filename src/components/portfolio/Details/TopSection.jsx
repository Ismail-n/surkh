import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TopSection = ({ data }) => {
  const { t, i18n: { language } } = useTranslation();
  const { background,maxTitleWidth, appStoreLinks, title, subtitle, image, textArAlign } = data || {};

  return (
    <div className="top_section" style={{ background }}>
      <Container>
        <Row className="inner_row">
          {/* LEFT */}
          <Col lg={12}>
            <div className="left_section">
              <div className="top_row">
                <h1
                  className="top_section_title"
                  style={{maxWidth:maxTitleWidth}}
                >
                  {t(title)}
                </h1>

                <p className="top_section_sub_title">{t(subtitle)}</p>
              </div>

              {/* DESKTOP STORE BUTTONS */}

            </div>
          </Col>
        </Row>
      </Container >
    </div >
  );
};

export default TopSection;
