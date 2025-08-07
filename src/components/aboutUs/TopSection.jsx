import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TopSection = () => {
  const { t } = useTranslation();
  return (
    <section className="top_section">
      <Container>
        <div className="top_row text-md-center">
          <h1 className="top_section_title">
            {t("We Don't Just Build Tech We Build Possibility")}
          </h1>
          <p className="top_section_sub_title">
            {t(
              "At TOD, we turn bold ideas into smart digital solutions. We build technology that unlocks real business potential."
            )}
          </p>
        </div>
      </Container>
      <div className="top_bg">
        <Image
          src={"/images/aboutUs/topBg.webp"}
          width={1920}
          height={247}
          alt="bg image"
          priority
          className="d-none d-lg-block"
        />
        <Image
          src={"/images/home/mobileTopBgNew1.webp"}
          width={393}
          height={144}
          alt="bg image"
          className="d-lg-none"
          priority
        />
      </div>
    </section>
  );
};

export default TopSection;
