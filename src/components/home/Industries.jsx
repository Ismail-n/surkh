import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { industries } from "@/data/homeData";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";

const Industries = () => {
  const { t } = useTranslation();
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const [sliderRef, instanceRef] = useKeenSlider({
  //   slides: {
  //     perView: 1.1,
  //     spacing: 16,
  //   },
  //   loop: false,
  //   slideChanged(slider) {
  //     setCurrentSlide(slider.track.details.rel);
  //   },
  // });

  return (
    <section className="industries common_section">
      <Container>
        <Title title={t("Industries")} />
        <SubTitle subTitle={t("Industry Solutions Built for local Market")} />
        {/* <div className="sub_title_2_div">
          <p className="sub_title_2">
            {t(
              "We understand the unique digital needs of the Saudi market — from food delivery apps to secure healthcare systems to Takween Solutions or the ever growing local market."
            )}
          </p>
        </div> */}
        {/* Desktop Grid View */}
        <Row className="industries_row">
          {industries.map((item) => (
            <IndustryCard item={item} key={item.title} />
          ))}
        </Row>

        {/* Mobile Slider View */}
        {/* <div className="d-block d-md-none industries_row">
          <div ref={sliderRef} className="keen-slider">
            {industries.map((item) => (
              <div className="keen-slider__slide" key={item.title}>
                <div className="single_industry">
                  <Image
                    src={`/images/icons/industries/${item.icon}.svg`}
                    width={64}
                    height={64}
                    alt={t(item.title)}
                  />
                  <h3>{t(item.title)}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="common_dots">
            {industries.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`dot ${currentSlide === idx ? "active" : ""}`}
              />
            ))}
          </div>
        </div> */}
      </Container>
    </section>
  );
};

export default Industries;

const IndustryCard = ({ item }) => {
  const { icon, title, points } = item || {};

  const { t } = useTranslation();
  return (
    <Col lg={3} sm={6}>
      <div className="single_industry">
        <Image
          src={`/images/home/industries/${icon}.svg`}
          width={64}
          height={64}
          alt={t(title)}
        />
        <h3>{t(title)}</h3>
        {points?.map((point, index) => {
          <p>{t(point)}</p>
        })}
        <div className="points">
          {points?.map((point, index) => (
            <ul className="single_point" key={index}>
              <li>{t(point)}</li>
            </ul>
          ))}
        </div>
      </div>
    </Col>
  );
};
