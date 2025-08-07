import Image from "next/image";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ContactFormSection from "./ContactFormSection";

const ContactUsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="our_values">
      <Container>
        <Row className="mx-0">
          <div className="inner_section">
            <div className="left_content">
              <section className="contact_info_section">
                <div className="info_wrapper">
                  <h2 className="headline">
                    {t("Let's Connect and Bring Your Ideas to Life!")}
                  </h2>

                  <p className="para">
                    {t(
                      "Tell us about your requirements, and our team will get in touch with you within 24 hours."
                    )}
                  </p>

                  <Image
                    src={"/images/home/contactOurExportVector.webp"}
                    width={372}
                    height={207}
                    alt={t("Consult with our experts illustration")}
                    className="contact_bg_vector"
                  />
                </div>
              </section>
            </div>
            <div className="contact_form_section">
              <ContactFormSection />
            </div>
          </div>
        </Row>
        {/* <Row>
          <div className="address_row">
            <h2>{t("Let's Build Something Great Here In Saudi Arabia")}</h2>
            <div className="inner_div">
              <div className="address_block">
                <h5>{t("Location")}</h5>
                <div className="icon_text">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Prince+Mohammed+Ibn+Salman+Ibn+Abdulaziz+Rd,+Ar+Rabi,+Riyadh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <Image
                      src="/images/icons/location.svg"
                      width={24}
                      height={24}
                      alt="location"
                    />
                    <p>
                  {t("Building A1, Dubai Digital Park, Dubai Silicon Oasis,")}
                  {t("Dubai, United Arab Emirates")}
                    </p>
                  </a>
                </div>
              </div>

              <div className="contact_block">
                <h5>{t("Contact Us")}</h5>
                <div className="icon_text">
                  <Image
                    src={`/images/icons/call.svg`}
                    width={24}
                    height={24}
                    alt="call"
                  />
                  <a href="tel:+966554848908">+966 55 484 8908</a>
                </div>
                <div className="icon_text">
                  <Image
                    src={`/images/icons/sms.svg`}
                    width={24}
                    height={24}
                    alt="email"
                  />
                  <a href="mailto:business@tod.com.sa">
                    {t("business@tod.com.sa")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Row> */}
      </Container>
    </section>
  );
};

export default ContactUsSection;
