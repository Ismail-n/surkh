import Title from '@/components/common/Title';
import Image from 'next/image';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


function SolutionSection({ data }) {

  const { t } = useTranslation();
  const { steps, description } = data || {};
  console.log(description);
  return (
    <section className="common_section solution_section">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="solution_story">
              <Title title={t("Our Solution")} />
              {description?.length > 0 &&
                description?.map((item) => (
                  <p key={item} className="desc">
                    {t(item)}
                  </p>
                ))}
            </div>
          </Col>
          {steps?.length > 0 &&
            steps?.map((item, index) => (
              <Col lg={6} sm={12}>
                <div className="single_solution_step_wrapper">
                  <Image
                    src={"/images/icons/tickCircleFilled.svg"}
                    width={24}
                    height={24}
                    alt="tick"
                  />
                  <div className="solution_single_step_content">

                    <h2 key={index} className="title">{t(item.title)}</h2>
                    <p key={index} className="desc">{t(item.description)}</p>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
}

export default SolutionSection
