
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { whySurkhCards } from "@/data/homeData";
import { ChevronDown, ChevronUp } from "lucide-react";

const WhySurkh = () => {
    const { t } = useTranslation();
    return (
        <section className="common_section why_surkh">
            <Container>
                <Title title={t("Why Surkh")} />
                <SubTitle subTitle={t("Outsource Smart. Operate Sharp.")} />
                <Row className="why_surkh_cards_row">
                    {whySurkhCards?.map((item, index) => (
                        <WhySurkhCard item={item} key={index} />
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default WhySurkh;

const WhySurkhCard = ({ item }) => {
    const {
        t,
        i18n: { language },
    } = useTranslation();
    const {
        image,
        title,
        description,
    } = item || {};


    return (
        <Col lg={6}>
            <div className="single_card">
                <div className="why_surkh_image_wrapper">
                    <Image
                        src={`images/home/whySurkh/${image}.svg`}
                        width={48}
                        height={48}
                        alt={image || "ai tools by surkh"}
                    />
                </div>
                <div className="why_surkh_titles_wrapper">

                    <h2>{t(title)}</h2>
                    <p>{t(description)}</p>
                </div>
            </div>
        </Col>
    );
};
