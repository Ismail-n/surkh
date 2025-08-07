import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { serviceModels } from "@/data/homeData";
import { ChevronDown, ChevronUp } from "lucide-react";

const EngagementModels = () => {
  const { t } = useTranslation();
  return (
    <section className="common_section engagement_models">
      <Container>
        <Title title={t("Our Engagement Models")} />
        <SubTitle
          subTitle={t(
            "Choose how you work with us — flexible, scalable, and always aligned with your needs."
          )}
        />
        <Row className="models_cards">
          {serviceModels?.map((item, index) => (
            <EngagementCard item={item} key={index} />
          ))}
        </Row>
        <Row className="mobile_models_cards d-lg-none">
          {serviceModels?.map((item, index) => (
            <MobileEngagementCard item={item} key={index} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default EngagementModels;

const EngagementCard = ({ item }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const {
    icon,
    title,
    description,
    points,
    id,
    maxTitleWidth,
    maxTitleArWidth,
  } = item || {};

  const getTitleStyle = () => {
    if (language === "ar") {
      return maxTitleArWidth
        ? { maxWidth: maxTitleArWidth }
        : maxTitleWidth
        ? { maxWidth: maxTitleWidth }
        : {};
    }
    return maxTitleWidth ? { maxWidth: maxTitleWidth } : {};
  };
  return (
    <Col lg={4}>
      <div className="single_card" id={id}>
        <div className="gradient_effect"></div>
        <Image
          src={`images/icons/engagementModels/${icon}.svg`}
          width={64}
          height={64}
          alt={icon || "engagement icon"}
        />
        <h2 style={getTitleStyle()}>{t(title)}</h2>
        <p>{t(description)}</p>
        <div className="points">
          {points?.map((point, index) => (
            <div className="single_point" key={index}>
              <Image
                src={"/images/icons/tick.svg"}
                width={24}
                height={24}
                alt="tick"
              />
              <h3>{t(point)}</h3>
            </div>
          ))}
        </div>
      </div>
    </Col>
  );
};

const MobileEngagementCard = ({ item }) => {
  const { t } = useTranslation();
  const { icon, title, description, points, id } = item || {};
  const [selectedCardId, setSelectedCardId] = useState(
    serviceModels[0]?.icon || null
  );

  return (
    <Col lg={4}>
      <div
        className={`single_card ${selectedCardId === icon ? "open" : ""}`}
        id={id}
        onClick={() => setSelectedCardId(selectedCardId === icon ? null : icon)}
      >
        <div className="gradient_effect"></div>
        <div className="g_between">
          <div className="d-flex gap-2 align-items-center">
            <Image
              src={`images/icons/engagementModels/${icon}.svg`}
              width={36}
              height={36}
              alt={icon || "engagement icon"}
            />
            <h2>{t(title)}</h2>
          </div>
          {selectedCardId === icon ? <ChevronUp /> : <ChevronDown />}
        </div>
        {selectedCardId === icon && (
          <div className="content">
            <p>{t(description)}</p>
            <div className="points">
              {points?.map((point, index) => (
                <div className="single_point" key={index}>
                  <Image
                    src={"/images/icons/tick.svg"}
                    width={24}
                    height={24}
                    alt="tick"
                  />
                  <h3>{t(point)}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Col>
  );
};
