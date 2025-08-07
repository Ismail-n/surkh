import Title from "@/components/common/Title";
import Image from "next/image";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const FeaturesOverview = ({ data }) => {
  const { t } = useTranslation();
  const {
    title,
    titleMaxWidth,
    items = [],
    description,
    maxItemWidth,
  } = data || {};
  return (
    <section className="common_section feature_section">
      <Container>
        <div style={{ maxWidth: titleMaxWidth || "auto" }}>
          <Title title={t(title)} />
        </div>
        <Row>
          <div className="feature_inner">
            <div
              className="feature_item"
              style={{
                maxWidth: maxItemWidth ? maxItemWidth : "auto",
                margin: "auto",
              }}
            >
              {items?.length > 0 &&
                items?.map(({ title, images, maxTitleWidth }, index) => (
                  <div key={`${title}-${index}`} className="single_feature">
                    {images?.url && (
                      <Image
                        src={images?.url}
                        width={images?.width}
                        height={images?.height}
                        alt={t(title)}
                      />
                    )}
                    <div className="w-100">
                      <h2 style={{ maxWidth: maxTitleWidth || "auto" }}>
                        {t(title)}
                      </h2>
                    </div>
                  </div>
                ))}
            </div>
            {description && <p className="description">{t(description)}</p>}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesOverview;
