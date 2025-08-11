import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TopSection = () => {
  const { t } = useTranslation();
  const router = useRouter();
  
  const words = [
    "Digital Transformation",
    "Mobile Applications",
    "Web Applications",
    "Odoo Customisation",
    "Artificial Intelligence",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // Typing effect
  useEffect(() => {
    const currentWord = t(words[wordIndex]);
    if (letterIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentWord.charAt(letterIndex));
        setLetterIndex(letterIndex + 1);
      }, 100); // Typing speed per letter

      return () => clearTimeout(timeout);
    } else {
      // Wait before showing next word
      const timeout = setTimeout(() => {
        setLetterIndex(0);
        setDisplayText("");
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 2000); // Hold current word for 2s

      return () => clearTimeout(timeout);
    }
  }, [letterIndex, wordIndex, t]);

  const scrollToContact = () => {
    router.push("/contact-us");
  };

  return (
    <section className="top_section">
      <Container>
        <div className="top_row">
          <h1 className="top_section_title d-none d-lg-block">
            {t("Empowering Energy & Tech")}
            {/* <br />   */}{" "}
            {/* <span className="animated-typing">{displayText}</span> */}
            <span className="animated-typing">{t('with AI & Engineering Excellence')}</span>
            {/* <span className="cursor">|</span> */}
          </h1>
          <h1 className="top_section_title  d-lg-none">
            {t("Empowering Businesses to Scale")}
            <br />
            <span className="animated-typing">{t('with AI & Engineering Excellence')}</span>
            {/* <span className="animated-typing">{displayText}</span>
            <span className="cursor">|</span> */}
          </h1>
          <p className="top_section_sub_title">
            {t(
              "Surkh delivers cutting-edge AI, Data Science, and Full-Stack Development services for the energy and industrial sectors — cost-effectively from onsite or offshore."
            )}
          </p>
          <button
            className="main_btn"
            type="button"
            aria-label="Start a conversation"
            onClick={scrollToContact}
          >
            {t("Talk to Us")}
          </button>
        </div>
      </Container>
      <div className="top_bg">
        {/* <div className="scroll-wrapper">
          <div className="scroll-content">
            <Image
              src={"/images/home/homeLargeBg.png"}
              width={1920}
              height={421}
              alt="bg image"
              priority
              className="d-none d-lg-block"
            />
          </div>
        </div> */}
        <Image
          src={"/images/home/topBg.webp"}
          width={1920}
          height={421}
          alt="bg image"
          priority
          className="d-none d-lg-block"
        />
        <Image
          src={"/images/home/mobileTopBgNew1.webp"}
          width={393}
          height={107}
          alt="bg image"
          className="d-lg-none"
          priority
        />
      </div>
    </section>
  );
};

export default TopSection;
