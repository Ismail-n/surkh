import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import { blogPosts } from "@/data/homeData";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Blogs = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1.08,
      spacing: 16,
    },
    loop: false,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <section className="blogs common_section">
      <Container>
        <Title title={t("Blogs")} />
        <SubTitle subTitle={t("Insights That Inspire Innovation")} />

        {/* Desktop Grid */}
        <Row className="blogs_row d-none d-md-flex">
          {blogPosts?.map((item) => (
            <BlogCard key={item?.image} item={item} />
          ))}
        </Row>

        {/* Mobile Slider */}
        <div className="d-block d-md-none blogs_row">
          <div ref={sliderRef} className="keen-slider">
            {blogPosts?.map((item) => (
              <div className="keen-slider__slide" key={item?.image}>
                <BlogCard item={item} isSlider />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="common_dots mt-3 text-center">
            {blogPosts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`dot ${currentSlide === idx ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blogs;

const BlogCard = ({ item }) => {
  const { t } = useTranslation();
  const { image, title, description, author, date } = item || {};
  return (
    <Col lg={4} md={6}>
      <div className="blog_card_inner">
        <Image
          src={`/images/home/${image}.webp`}
          width={347}
          height={210}
          alt={t(`${title} blog thumbnail`)}
        />
        <div className="content">
          <h3>{t(title)}</h3>
          <p>{t(description)}</p>
          <small>
            {t(author)} — {t(date)}
          </small>
        </div>
      </div>
    </Col>
  );
};
