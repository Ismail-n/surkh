import React, { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { govermentServices } from "@/data/homeData";
import "keen-slider/keen-slider.min.css";

const GovermentServicesSlider = () => {
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
    rtl: language === "ar",
    slides: {
      perView: 3,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(max-width: 576px)": {
        slides: {
          perView: 1.4,
          spacing: 15,
        },
      },
    },
  });

  return (
    <section className="govermentServices common_section">
      <Container ref={containerRef}>
        <Title title={t("Vision Meets Enablement")} />
        <SubTitle
          subTitle={t(
            "Powering real-world impact by integrating mission-critical services — securely and seamlessly."
          )}
        />
      {mounted && (
        <div  className="goverment_services_logos">
          <div className="inner_section">
            <div ref={sliderRef} className="keen-slider">
              {govermentServices.map((logo, index) => (
                <div className="keen-slider__slide" key={index}>
                  <div className="brand">
                    <Image
                      src={`images/home/govermentservices/${logo}.webp`}
                      width={160}
                      height={80}
                      alt={`${logo} logo`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      </Container>
    </section>
  );
};

export default GovermentServicesSlider;
