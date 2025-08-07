
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { serviceModels } from "@/data/homeData";
import { ChevronDown, ChevronUp } from "lucide-react";

const AIToolsBySurkh = () => {
  const { t } = useTranslation();
  return (
    <section className="common_section ai_tools_by_surkh">
      <Container>
        <Title title={t("AI Tools")} />
        <SubTitle subTitle={t("AI Tools Engineered by Surkh")}/>
        <Row className="models_cards">
          {serviceModels?.map((item, index) => (
            <AIToolCard item={item} key={index} />
          ))}
        </Row>
        <Row className="mobile_models_cards d-lg-none">
          {serviceModels?.map((item, index) => (
            <MobileAIToolsCard item={item} key={index} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AIToolsBySurkh;

const AIToolCard = ({ item }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const {
    image,
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
          src={`images/home/aiTools/${image}.webp`}
          width={300}
          height={107}
          alt={image || "ai tools by surkh"}
        />
        <h2 style={getTitleStyle()}>{t(title)}</h2>
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

const MobileAIToolsCard = ({ item }) => {
  const { t } = useTranslation();
  const { image, title, description, points, id } = item || {};
  const [selectedCardId, setSelectedCardId] = useState(
    serviceModels[0]?.icon || null
  );

  return (
    <Col lg={4}>
      <div
        className={`single_card ${selectedCardId === image ? "open" : ""}`}
        id={id}
        onClick={() => setSelectedCardId(selectedCardId === image ? null : image)}
      >
        <div className="gradient_effect"></div>
        <div className="g_between">
          <div className="d-flex gap-2 align-items-center">
            
            <h2>{t(title)}</h2>
          </div>
          {selectedCardId === image ? <ChevronUp /> : <ChevronDown />}
        </div>
        {selectedCardId === image && (
          <div className="content">
            <p>{t(description)}</p>
            <div className="points">
              <Image className="ai_tools_single_image"
              src={`images/home/aiTools/${image}.webp`}
              width={36}
              height={36}
              alt={image || "engagement icon"}
            />
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
