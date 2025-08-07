import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Title from '../common/Title'
import { useTranslation } from 'react-i18next'
import { crossBorderDisciplinaryTeamPoints } from '@/data/aboutUsData'


function CrossDisciplinaryTeam() {
    const { t } = useTranslation();

    return (
        <section className='cross_disciplinary_team_section'>
            <Container>
                <Row>
                    <Col lg={6} xs={12} className='left_section'>
                        <Image
                            src="/images/aboutUs/crossDiciplinaryTeam.webp"
                            width={500}
                            alt="cross Diciplinary Team"
                            height={556}
                        />
                    </Col>
                    <Col lg={6} xs={12} className='right_section'>
                        <div className="cross_disciplinary_content">
                            <Title title={t("A Cross-Border, Cross-Disciplinary Team")} />
                            <p>{t("Our team is spread across Europe, South Asia, and the Middle East, combining engineering excellence with a strong sense of cultural and contextual awareness.")}</p>
                            <div className="cross_disciplinary_team_point_wrapper"></div>
                        </div>
                        <div className="cross_disciplinary_team_points_wrapper">
                            <h2>{t("At Surkh, we:")}</h2>
                            {crossBorderDisciplinaryTeamPoints?.map((point, index) => (
                                <div className="single_point" key={index}>
                                    <Image
                                        src={"/images/icons/tickCircleFilled.svg"}
                                        width={24}
                                        height={24}
                                        alt="tick"
                                    />
                                    <h3>{t(point)}</h3>
                                </div>
                            ))}


                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default CrossDisciplinaryTeam
