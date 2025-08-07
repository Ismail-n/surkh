import Image from "next/image";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ExecutionSection = ({ data }) => {
  const { t } = useTranslation();
  const { image, description, descriptionBackground: background } = data || {};
  return (
    <section className="common_section execution_section">
      <Container>
        <Row>
          <div className="inner_row">
            {image && (
              <div className="left_section">
                <Image
                  src={image}
                  width={396}
                  height={472}
                  priority
                  alt={t("Execution visual")}
                />
              </div>
            )}
            <div className="right_section" style={{ background }}>
              <p>{t(description)}</p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default ExecutionSection;
