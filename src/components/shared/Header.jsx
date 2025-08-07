import React, { useEffect, useMemo, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Container, Modal } from "react-bootstrap";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter } from "next/router";

const Header = () => {
  const { t } = useTranslation();
  const { pathname, asPath } = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isPortfolioDetail, setIsPortfolioDetail] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const homeLinks = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about-us" },
      { name: "Portfolio", href: "/portfolio" },
      {
        name: "Services",
        href: "/our-services",
        isSubLinks: true,
        subLinks: [
          { name: "Mobile App Development", href: "/our-services#mobile-app" },
          { name: "Web Development", href: "/our-services#web" },
          { name: "Digital Transformation", href: "/our-services#digital" },
          { name: "Odoo Customisation", href: "/our-services#odoo" },
          {
            name: "Managed Cloud Services",
            href: "/our-services#cloud-services",
          },
          { name: "AI/ML", href: "/our-services#ai-ml" },
          { name: "Data Analytics", href: "/our-services#data-analytics" },
          { name: "UI/UX Design", href: "/our-services#ui-ux" },
        ],
      },
      { name: "Get In Touch", href: "/contact-us" },
    ],
    []
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setIsPortfolioDetail(pathname === "/portfolio/[slug]");
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/portfolio" && pathname.startsWith("/portfolio")) {
      return true;
    }
    return pathname === href || pathname === href + "/";
  };
  const isSubLinkActive = (href) => {
    const [baseHref, hash] = href.split("#");
    const [currentPath, currentHash] = asPath.split("#");

    return pathname === baseHref && currentHash === hash;
  };

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Stop Scrolling when modal is opened
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isClient) return; // Only run on client

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return; // Only run on client

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient]);

  return (
    <>
      <header
        className={`header ${showHeader ? "visible" : "hidden header_2"} ${isPortfolioDetail ? "portfolio-detail-header" : ""
          } ${isScrolled ? "scrolled" : ""}`}
      >
        <Container>
          <div className="g_between">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/images/icons/logoNew.svg"
                  width={177}
                  height={66}
                  alt="logo"
                  priority
                />
              </Link>
            </div>
            <nav
              aria-label="Main navigation"
              className="menu_links d-none d-md-flex"
            >
              <ul>
                {homeLinks?.map(({ href, name }, index) => (
                  <li key={index}>
                    <Link
                      href={href}
                      className={isActive(href) ? "active" : ""}
                    >
                      {t(name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="d-none d-md-flex end_header_buttons">
              <LanguageSwitcher />

              
            </div>
            {/* Mobile Menu Icon */}
            <div className="d-flex align-items-center gap-2 d-md-none ">
              {/* {!isMobileMenuOpen && <LanguageSwitcher />} */}
              <div className="mobile_menu_icon " onClick={handleMenuClick}>
                {isMobileMenuOpen ? (
                  <Image
                    src={"/images/icons/close.svg"}
                    width={25}
                    height={25}
                    alt="menu"
                  />
                ) : (
                  <Image
                    src={`/images/icons/${isPortfolioDetail && !isScrolled
                      ? "menuBlackNew"
                      : "menuNew"
                      }.svg`}
                    width={25}
                    height={25}
                    alt="menu"
                  />
                )}
              </div>
            </div>
          </div>
        </Container>
        <Modal
          show={isMobileMenuOpen}
          onHide={() => setIsMobileMenuOpen(false)}
          fullscreen
          className="mobile_menu_modal"
        >
          <div className="modal_header">
            <Link href="/">
              <Image
                src={`/images/icons/logoNew.svg`}
                width={126}
                height={40}
                alt="logo"
                className="mobile_logo"
                priority
              />
            </Link>
            <Image
              src={"/images/icons/close.svg"}
              width={25}
              height={25}
              alt="menu"
              className="close_icon"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
          <nav aria-label="Main navigation" className="mobile_menu_links">
            <ul>
              {homeLinks?.map(({ href, name, isSubLinks, subLinks }, index) => (
                <li key={index} className={isSubLinks ? "has-dropdown" : ""}>
                  {isSubLinks ? (
                    <div className="sub_link">
                      <button
                        type="button"
                        onClick={() => setOpenDropdown((prev) => !prev)}
                        className={`${openDropdown ? "active" : ""}`}
                      >
                        {t(name)}{" "}
                        {openDropdown ? <ChevronUp /> : <ChevronDown />}
                      </button>
                      {openDropdown && (
                        <ul className="submenu">
                          {subLinks.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.href}
                                className={
                                  isSubLinkActive(subItem.href) ? "active" : ""
                                }
                              >
                                <span
                                  onClick={() => {
                                    setOpenDropdown(false);
                                    setIsMobileMenuOpen(false);
                                  }}
                                >
                                  {t(subItem.name)}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={href}
                      className={isActive(href) ? "active" : ""}
                    >
                      <span onClick={() => setIsMobileMenuOpen(false)}>
                        {t(name)}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
              <LanguageSwitcher />
            </ul>
          </nav>
        </Modal>
      </header>
      <div className="header_padding"></div>
    </>
  );
};

export default Header;
