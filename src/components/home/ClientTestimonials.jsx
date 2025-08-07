import React, { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { testimonials } from "@/data/homeData";

const ClientTestimonials = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const containerRef = useRef(null);

  const [leftPadding, setLeftPadding] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updatePadding = () => {
      if (containerRef.current) {
        const left = containerRef.current.getBoundingClientRect().left;
        setLeftPadding(left);
      }
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  const style = useMemo(
    () => ({
      paddingLeft: language === "ar" ? 0 : leftPadding,
      paddingRight: language === "ar" ? leftPadding : 0,
    }),
    [leftPadding, language]
  );

  const [sliderRef] = useKeenSlider({
    rtl: language === "ar" ? true : false,
    slides: {
      perView: 1.5,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 575px)": {
        slides: {
          perView: 1.14,
          spacing: 30,
        },
      },
    },
  });

  return (
    <section className="client_testimonial common_section">
      <Container ref={containerRef}>
        <Title title={t("Client Testimonials")} />
        <SubTitle subTitle={t("Success Stories from Our Partners")} />
      </Container>
      {mounted && (
        <div style={style}>
          <div className="inner_section">
            <div
              ref={sliderRef}
              className="keen-slider"
              aria-label="Client Testimonials Carousel"
            >
              {testimonials?.map((item, index) => (
                <TestimonialCard item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClientTestimonials;

const TestimonialCard = ({ item }) => {
  const { image, name, role, message } = item || {};
  return (
    <div className="keen-slider__slide" aria-label={`Testimonial from ${name}`}>
      <div className="single_testimonial">
        <Image
          src={`/images/home/${image}.png`}
          width={62}
          height={62}
          alt={`${name} profile photo`}
        />
        <h3>{name}</h3>
        <h4>{role}</h4>
        <Image
          src="/images/icons/doubleQuotes.svg"
          width={36}
          height={36}
          alt="Double Quotes"
          title="Quote icon"
        />
        <p>{message}</p>
      </div>
    </div>
  );
};
