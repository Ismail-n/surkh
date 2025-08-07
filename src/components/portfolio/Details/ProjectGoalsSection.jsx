import Title from "@/components/common/Title";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ProjectGoalsSection = ({ data }) => {
  const { t } = useTranslation();
  const { title, image, goals = [] } = data || {};

  return (
    <section className="common_section goal_section">
      <Container>
        <div className="text-center">
          <Title title={t(title)} />
        </div>

        <Row className="goal_row">
          {/* LEFT COLUMN */}
          <div className="img_section d-lg-none">
            <Image
              src={image.url}
              width={image.width || 228}
              height={image.height || 466}
              alt={t("Project Illustration")}
            />
          </div>
          <Col className="text-end">
            {goals[0] && (
              <div className="single_goal">
                <h2>{t(goals[0].title)}</h2>
                <p>{t(goals[0].description)}</p>
              </div>
            )}
            {goals[1] && (
              <div className="single_goal">
                <h2>{t(goals[1].title)}</h2>
                <p>{t(goals[1].description)}</p>
              </div>
            )}
          </Col>

          {/* IMAGE COLUMN */}
          {image?.url && (
            <Col style={{ maxWidth: 328 }}>
              <div className="img_section d-none d-lg-block">
                <Image
                  src={image.url}
                  width={image.width || 228}
                  height={image.height || 466}
                  alt={t("Project Illustration")}
                />
              </div>
            </Col>
          )}

          {/* RIGHT COLUMN */}
          <Col>
            {goals[2] && (
              <div className="single_goal">
                <h2>{t(goals[2].title)}</h2>
                <p>{t(goals[2].description)}</p>
              </div>
            )}
            {goals[3] && (
              <div className="single_goal">
                <h2>{t(goals[3].title)}</h2>
                <p>{t(goals[3].description)}</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectGoalsSection;
