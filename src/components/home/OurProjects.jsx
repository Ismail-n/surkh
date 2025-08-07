import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import { portfolios } from "@/data/portfolioData";

const ourProjectsData = [
  {
    id: "half-million",
    logoDetails: {
      logo: "halfMillionLogo",
      logoWidth: 80,
      logoHeight: 80,
    },
    title: "Half Million",
    description:
      "Experience the Richness of Artisan Coffee — Anytime, Anywhere. Your Favorite Brews, Delivered Fresh from the Café to Your Pocket.",
    appStoreLink:
      "https://apps.apple.com/in/app/half-million-%D9%87%D8%A7%D9%81-%D9%85%D9%84%D9%8A%D9%88%D9%86/id1559864940",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.halfmillion.android&hl=en_IN",
    caseStudyLink: "",
    imageDetails: {
      image: "halfMillion",
      imageWidth: 344,
      imageHeight: 398,
    },
    background: "linear-gradient(to left, #87C5B2, #D3B48C)",
  },
  {
    id: "half-million",
    logoDetails: {
      logo: "halfMillionLogo",
      logoWidth: 80,
      logoHeight: 80,
    },
    title: "Half Million",
    description:
      "Experience the Richness of Artisan Coffee — Anytime, Anywhere. Your Favorite Brews, Delivered Fresh from the Café to Your Pocket.",
    appStoreLink:
      "https://apps.apple.com/in/app/half-million-%D9%87%D8%A7%D9%81-%D9%85%D9%84%D9%8A%D9%88%D9%86/id1559864940",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.halfmillion.android&hl=en_IN",
    caseStudyLink: "",
    imageDetails: {
      image: "halfMillion",
      imageWidth: 344,
      imageHeight: 398,
    },
    background: "linear-gradient(to left, #87C5B2, #D3B48C)",
  },
];

const OurProjects = () => {
  const { t } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderInstanceRef, slider] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 16,
    },
    loop: true,
    slideChanged: (slider) => {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(max-width: 575px)": {
        slides: {
          perView: 1,
          spacing: 16,
          origin: "center",
        },
      },
    },
  });

  return (
    <section className="our_projects common_section">
      <Container>
        <Title title={t("What Do We Offer?")} />
      </Container>
      <Container fluid="sm">
        <div className="position-relative wrapper_section">
          <div
            className="keen-slider portfolio_inner_section"
            ref={sliderInstanceRef}
          >
            {portfolios?.map(
              (
                {
                  id,
                  logoDetails,
                  title,
                  description,
                  appStoreLink,
                  playStoreLink,
                  caseStudyLink,
                  imageDetails,
                  background,
                },
                index
              ) => (
                <div
                  className={`portfolio_inner keen-slider__slide ${
                    currentSlide === index ? "active" : ""
                  }`}
                  key={id}
                  id={id}
                  style={{
                    background,
                  }}
                >
                  <div className="left">
                    <div className="content">
                      <h3>{t(title)}</h3>
                      <p>{t(description)}</p>
                      
                    </div>
                    {caseStudyLink && (
                      <Link href={`/portfolio/${caseStudyLink}`} className="case_study_btn">
                        <span>{t("View Case Study")}</span>
                        <ArrowRight />
                      </Link>
                    )}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Custom Slider Buttons */}
          <div className="project_slider_controls">
            <Image
              src={"/images/icons/sliderLeft.svg"}
              width={56}
              height={56}
              alt="Previous"
              className="slider_btn"
              id="left-btn"
              onClick={() => slider.current?.prev()}
            />
            <Image
              src={"/images/icons/sliderRight.svg"}
              width={56}
              height={56}
              alt="Next"
              id="right-btn"
              className="slider_btn"
              onClick={() => slider.current?.next()}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurProjects;
