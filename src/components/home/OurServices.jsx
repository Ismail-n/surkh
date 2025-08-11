import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/homeData";
import { useKeenSlider } from "keen-slider/react";
import { useRouter } from "next/router";

const OurServices = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 30,
    },
    rtl:language === "ar",

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const groupedSlides = [];
  for (let i = 0; i < services.length; i += 3) {
    groupedSlides.push(services.slice(i, i + 3));
  }

  return (
    <section className="common_section our_services">
      <Container>
        <Title title={t("Our Services")} />
        <SubTitle
          subTitle={t(
            "Smart Solutions for Modern Enterprises"
          )}
        />

        {/* DESKTOP */}
        <div className="d-none d-md-block">
          <Row className="services_row">
            {services?.map((item) => (
              <ServiceCard item={item} t={t} key={item.title} />
            ))}
            <Col lg={8}>
              <div className="explore_services">
                <div className="gradient_effect"></div>
                <div className="content">
                  <h2>{t("Let's Build Something Amazing")}</h2>
                  <Link href="/our-solutions">
                    <button type="button" className="service_btn">
                      {t("Explore Services")} <ArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* MOBILE */}
        <div className="d-md-none">
          <div className="services_row mobile_services_row">
            <div className="services_slider_wrapper">
              <div ref={sliderRef} className="keen-slider">
                {groupedSlides.map((group, idx) => (
                  <div className="keen-slider__slide" key={idx}>
                    <div className="slide_group_row">
                      {group.map((item) => (
                        <ServiceCard
                          item={item}
                          t={t}
                          key={item.title}
                          language={language}
                        />
                      ))}
                      {idx === 2 && (
                        <div className="explore_services">
                          <div className="gradient_effect"></div>
                          <div className="content">
                            <h2>{t("Let's Build Something Amazing")}</h2>
                            <Link href="/our-solutions">
                              <button type="button" className="service_btn">
                                {t("Explore Services")} <ArrowRight />
                              </button>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="common_dots">
                {groupedSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                    className={`dot ${currentSlide === idx ? "active" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurServices;

const ServiceCard = ({ item }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const router = useRouter();

  const { icon, title, description, maxTitleWidth, maxTitleArWidth } =
    item || {};

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
    <Col lg={4} md={6}>
      <div className="single_service card__article">
        {/* <div className="gradient-border-box"></div> */}
        <div className="card-content">
          <Image
            src={`/images/icons/services/${icon}.svg`}
            width={48}
            height={48}
            alt={t(title)}
          />
          <h2 style={getTitleStyle()}>{t(item.title)}</h2>

          <p>{t(description)}</p>
        </div>
        {/* <button
          class="card__data"
          onClick={() =>
            router.push(
              `/contact-us?service=${encodeURIComponent(item?.title)}`
            )
          }
        >
          {t("Request This Service")}
        </button> */}
        <button
          className="card-button"
          onClick={() =>
            router.push(
              `/contact-us?service=${encodeURIComponent(item?.title)}`
            )
          }
        >
          {t("Request This Service")}
        </button>
      </div>
    </Col>
  );
};
