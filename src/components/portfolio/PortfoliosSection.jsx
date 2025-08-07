import { portfolios } from "@/data/portfolioData";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const PortfoliosSection = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <section className="portfolio_inner_section">
      <Container>
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
              backgroundAr,
            },
            index
          ) => (
            <div
              className="portfolio_inner"
              key={id}
              id={id}
              style={{
                background:
                  language === "ar" && backgroundAr ? backgroundAr : background,
              }}
            >
              <div className="left">
                <div className="content">
                  <h3>{t(title)}</h3>
                  <p>{t(description)}</p>
                  {/* DESKTOP BUTTON & LINKS */}
                </div>
                {caseStudyLink && (
                  <Link
                    href={`/portfolio/${caseStudyLink}`}
                    className="case_study_btn d-none d-md-flex"
                  >
                    <span>{t("View Case Study")}</span>
                    <ArrowRight />
                  </Link>
                )}
                {caseStudyLink && (
                  <Link
                    href={`/portfolio/${caseStudyLink}`}
                    className="case_study_btn d-md-none "
                  >
                    <span>{t("View Case Study")}</span>
                    <ArrowRight />
                  </Link>
                )}
              </div>
              <div className="right">
              </div>
            </div>
          )
        )}
      </Container>
    </section>
  );
};

export default PortfoliosSection;
