import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import AboutImage from '../../assets/profile.png';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, paragraphThree } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about" className="pt-5">
      <div className="circle" />
      <Container>
        <Title title="About Us" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <img
                  src={AboutImage}
                  alt="profile"
                  className="img-fluid"
                  style={{ opacity: 0.3 }}
                />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="text-left">
                  <b>What is STADIUM REBORN ?</b>
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Stadium Reborn is blockchain’s real-life application and powered rave party event in Indonesia. Stadium Reborn’s core values are supporting Indonesian Disk-Jockey and at the same time initiate rave party event to increase tourism visits to various destinations in Indonesia'}
                </p>
                <p className="text-left">
                  <b>Vision</b>
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Our goal is to encourage more people into this world of crypto currencies by creating event that people can interact and participate with the use of blockchain technology.'}
                </p>
                <p className="text-left">
                  <b>Mission</b>
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'We really appreciate the disc jockey profession, especially the talents and legends from Indonesia. Our main mission is to make local Disc Jockeys and Indonesian tourism more recognized around the world.'}
                </p>
                {/* {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )} */}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
