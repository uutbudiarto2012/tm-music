import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import BG from '../../assets/2.mp4';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>
        <div className="hero-container">
          <div className="captionWrapper">
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <h1 className="hero-title">
                {title || 'Hi, my name is'}{' '}
                <span className="text-color-main">{name || 'Your Name'}</span>
                <br />
                {subtitle || "I'm the Unknown Developer."}
              </h1>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <p className="hero-cta">
                <span className="cta-btn cta-btn--hero mr-5">
                  {/* <Link to="about" smooth duration={1000}>
                    {cta || 'Know more'}
                  </Link> */}
                  <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>
                </span>
                <span className="cta-btn cta-btn--hero mr-5">
                  <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                    Whitepaper
                  </a>
                  {/* <Link to="about" smooth duration={1000}>
                    {cta || 'Know more'}
                  </Link> */}
                </span>
              </p>
            </Fade>
          </div>
          <div className="videoWrapper">
            <video autoPlay muted loop className="videoHero">
              <source src={BG} type="video/mp4" />
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
