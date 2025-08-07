import React from "react";
import { Container, Row } from "react-bootstrap";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { clientsLogo } from "@/data/homeData";
import { useKeenSlider } from "keen-slider/react";
import Marquee from "react-fast-marquee";

const Clients = () => {
  const { t } = useTranslation();

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 2.7,
        spacing: 20,
      },
    },
    [
      // Auto-scroll plugin
      (slider) => {
        let timeout;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000); // 3 seconds
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section className="clients common_section">
      <Container>
        <Title title={t("Clients")} />
        <SubTitle subTitle={t("10+ collaborations with top-tier partners")} />
        {/* DESKTOP */}
        {/* <div className="clients_logos d-none d-md-flex flex-wrap justify-content-center gap-4"> */}
        {/* <div className="clients_logos ">
            {clientsLogo?.map((logo) => (
              <Image
                key={logo}
                src={`/images/icons/clients/${logo}.svg`}
                width={160}
                height={80}
                alt={`${logo} logo`}
              />
              ))}
              </div> */}
      </Container>

      <div className="marqueeWrapper ltr">
        <div className="marquees">
          <Marquee gradient={false} speed={50}>
            {[
              ...clientsLogo,
              ...clientsLogo,
              ...clientsLogo,
              ...clientsLogo,
              ...clientsLogo,
              ...clientsLogo,
            ].map((logo, index) => (
              <div key={index} className="brand">
                <Image
                  key={logo}
                  src={`/images/icons/clients/${logo}.svg`}
                  width={160}
                  height={80}
                  alt={`${logo} logo`}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* MOBILE */}
      {/* <div className="clients_logos d-block d-md-none">
            <div ref={sliderRef} className="keen-slider">
              {clientsLogo?.map((logo) => (
                <div className="keen-slider__slide client_slide" key={logo}>
                  <Image
                    src={`/images/icons/clients/${logo}.svg`}
                    width={160}
                    height={80}
                    alt={`${logo} logo`}
                  />
                </div>
              ))}
            </div>
          </div> */}
    </section>
  );
};

export default Clients;
