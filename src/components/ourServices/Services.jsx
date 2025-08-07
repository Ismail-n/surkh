import { servicesTabs } from "@/data/servicesData";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState, useTransition } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Services = ({ selectedService, servicesData, setSelectedService }) => {
  const { t } = useTranslation();
  const [activeServiceTab, setActiveServiceTab] = useState(
    servicesData?.[0]?.id
  );

  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes("#")) {
      const id = router.asPath.split("#")[1]; // e.g., "full-stack"
      handleTabChange(id);

      // SCROLL TO TOP
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  }, [router]);

  const { overview, categories, techStack } = selectedService || {};

  const handleTabChange = (id) => {
    setActiveServiceTab(id);

    const newService =
      servicesData?.find((service) => service?.id === id) || {};
    setSelectedService(newService);
  };

  const groupedSlides = [];
  for (let i = 0; i < servicesData.length; i += 3) {
    groupedSlides.push(servicesData.slice(i, i + 3));
  }

  return (
    <section className={`services_section`} id={`${selectedService?.id}`}>
      <Container>
        {/* DESKTOP TAB*/}
        <div className="d-none d-lg-block">
          <div className="services_tab">
            {servicesTabs?.map(({ id, text ,maxTitleWidth }) => (
              <button
                type="button"
                key={id}
                className={`${id === activeServiceTab ? "active" : ""}`}
                onClick={() => handleTabChange(id)}
                aria-label={`${t("Switch to")} ${t(text)} ${t("services")}`}
              >
                <span style={{maxWidth:maxTitleWidth}}>
                  {t(text)}
                </span>
              </button>
            ))}
          </div>
        </div>
        {/* MOBILE TAB */}
        {/* <div className="d-md-none">
          <div className="mobile_services_tab">
            <select
              value={activeServiceTab}
              onChange={(e) => handleTabChange(e.target.value)}
            >
              {servicesTabs?.map(({ id, text }) => (
                <option key={id} value={id}>
                  {t(text)}
                </option>
              ))}
            </select>
          </div>
        </div> */}

        <div className="services_inner">
          <div className="">
            <h2 className="title">{t(selectedService?.title)}</h2>
            <p className="sub_title">{t(selectedService?.subtitle)}</p>
          </div>
        </div>

        {/* SERVICE CARD/CATEGORIES */}
        <div className="service_categories">
          <Row>
            {categories?.map((item) => (
              <ServiceTechCard key={item?.title} item={item} />
            ))}
          </Row>
        </div>

        {/* OVERVIEW */}
        {Object?.keys(overview || {})?.length > 0 && (
          <div className="overview_section common_section">
            <div className="img_section">
              <Image
                src={`/images/services/${overview?.image}.webp`}
                width={500}
                height={556}
                alt="mobile app background"
              />
            </div>

            <div className="content">
              <h2>{t(overview?.heading)}</h2>
              {overview?.paragraphs?.map((para) => (
                <p key={para}>{t(para)}</p>
              ))}
              {overview?.isShowUlList && (
                <ul>
                  {overview?.ulList?.map((list) => (
                    <li key={list}>{t(list)}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Services;

const ServiceTechCard = ({ item }) => {
  const { icon, title, subtitle, titleMaxWidth, titleArMaxWidth } = item || {};
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const router = useRouter();

  const getTitleStyle = () => {
    if (language === "ar") {
      return titleArMaxWidth
        ? { maxWidth: titleArMaxWidth }
        : titleMaxWidth
          ? { maxWidth: titleMaxWidth }
          : {};
    }
    return titleMaxWidth ? { maxWidth: titleMaxWidth } : {};
  };

  return (
    <Col lg={4} md={6}>
      <div className="single_tech_card">
        <div className="card-content">
          <Image
            src={`/images/services/${icon}.svg`}
            width={48}
            height={48}
            alt={title}
          />
          <h2 style={getTitleStyle()}>{t(title)}</h2>
          <p>{t(subtitle)}</p>
        </div>
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
