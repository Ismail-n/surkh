import {
  footerCompany,
  footerQuickLinks,
  footerServices,
  footerServices2,
} from "@/data/commonData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <footer>
      <Container>
        

        <div className="new_footer_row desktop">
          <div className="single_item logo_section">
            <Link href="/">
              <Image
                src="/images/icons/logoNew.svg"
                width={161}
                height={62}
                alt="logo"
                priority
              />
            </Link>
            <h6>{t("© 2025 Tod All Rights Reserved.")}</h6>
          </div>
          <div className="single_item reach_section">
            <h2>{t("Address")}</h2>
            <div className="address_info">
              <div className="single_add">
                <Image
                  src={"/images/icons/location.svg"}
                  width={24}
                  height={24}
                  alt="location"
                />
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  {t("Building A1, Dubai Digital Park, Dubai Silicon Oasis,")}
                  {t("Dubai, United Arab Emirates")}
                </a>
              </div>
              <div className="single_add">
                <Image
                  src={"/images/icons/call.svg"}
                  width={24}
                  height={24}
                  alt="call"
                />
                <a href="tel:+966554848908">+966 55 484 8908</a>
              </div>
              <div className="single_add">
                <Image
                  src={"/images/icons/sms.svg"}
                  width={24}
                  height={24}
                  alt="email"
                />
                <a href="mailto:business@tod.com.sa">
                  {t("hello@surkh.be")}
                </a>
              </div>
            </div>
          </div>

          <div className="single_item quick_links">
            <h2>{t("Company")}</h2>
            <ul>
              {footerQuickLinks?.map(({ name, href }, index) => (
                <li key={index}>
                  <Link href={href}>{t(name)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="single_item follow_us">
            <div className="social_links">
              <h2>{t("Follow Us")}</h2>
              <div className="icons">
                <Link
                  href="https://www.linkedin.com/company/tod-%D8%B7%D9%88%D8%AF"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/icons/linkedIn.svg"
                    width={36}
                    height={36}
                    alt="LinkedIn"
                  />
                </Link>

                <Link
                  href="https://www.instagram.com/tod.dev/?igsh=MWw2OXkyZmtpa3hsbA%3D%3D&utm_source=qr#"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/icons/instagram.svg"
                    width={36}
                    height={36}
                    alt="instagram"
                  />
                </Link>
                <Link
                  href="https://x.com/todcomsa?s=11&t=lG3tydHI4tkzXwsvpgOCCA"
                  aria-label="X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/icons/X.svg"
                    width={36}
                    height={36}
                    alt="X"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="new_footer_row mobile">
          <div className="single_item logo_section">
            <Link href="/">
              <Image
                src="/images/icons/logoNew.svg"
                width={161}
                height={62}
                alt="logo"
                priority
              />
            </Link>
          </div>
          <div className="single_item quick_links">
            <Row>
              {footerQuickLinks?.map(({ name, href }, index) => (
                <Col xs={6} key={index} className="inner_col">
                  <Link href={href}>{t(name)}</Link>
                </Col>
              ))}
            </Row>
          </div>
          <div className="single_item reach_section">
            <h2>{t("Reach Us")}</h2>
            <div className="address_info">
              <div className="single_add">
                <Image
                  src={"/images/icons/location.svg"}
                  width={24}
                  height={24}
                  alt="location"
                />
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  {t("Building A1, Dubai Digital Park, Dubai Silicon Oasis,")}
                  {t("Dubai, United Arab Emirates")}
                </a>
              </div>
              <div className="single_add">
                <Image
                  src={"/images/icons/call.svg"}
                  width={24}
                  height={24}
                  alt="call"
                />
                <a href="tel:+966554848908" className="ltr">+966 55 484 8908</a>
              </div>
              <div className="single_add">
                <Image
                  src={"/images/icons/sms.svg"}
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

          <div className="single_item follow_us ">
            <div className="social_links">
              <h2>{t("Follow Us")}</h2>
              <div className="icons">
                <Link
                  href="https://www.linkedin.com/company/tod-%D8%B7%D9%88%D8%AF"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/icons/linkedIn.svg"
                    width={36}
                    height={36}
                    alt="LinkedIn"
                  />
                </Link>

                <Link
                  href="https://www.instagram.com/tod.dev/?igsh=MWw2OXkyZmtpa3hsbA%3D%3D&utm_source=qr#"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/icons/instagram.svg"
                    width={36}
                    height={36}
                    alt="instagram"
                  />
                </Link>
                <Link
                  href="https://x.com/todcomsa?s=11&t=lG3tydHI4tkzXwsvpgOCCA"
                  aria-label="X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/icons/X.svg"
                    width={36}
                    height={36}
                    alt="X"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
