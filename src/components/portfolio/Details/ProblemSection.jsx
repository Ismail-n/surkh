import React from 'react'
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Title from '@/components/common/Title';

function ProblemSection({ data }) {
  const { t } = useTranslation();
  const { image, imageAlt, description } = data || {};
  return (
    <section className="common_section problem_section">
      <div className="problem_section_wrapper">
        <div className="left_section">
          <Image
            src={image}
            width={650}
            height={650}
            alt={imageAlt}
          />
        </div>
        <div className="right_section">
          <div className="content_container">
            <Title title={t("Problem")} />
            {description?.length > 0 &&
              description?.map((item) => (
                <p key={item} className="desc">
                  {t(item)}
                </p>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection
