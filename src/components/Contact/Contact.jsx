import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Team1 from '../../assets/teams/1.png';
import Team2 from '../../assets/teams/2.png';
import Team3 from '../../assets/teams/3.png';
import Team4 from '../../assets/teams/4.png';
import Team5 from '../../assets/teams/5.png';
import Team6 from '../../assets/teams/6.png';
import Team7 from '../../assets/teams/7.png';
import Team8 from '../../assets/teams/8.png';
import Title from '../Title/Title';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Title title="Teams" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="team-item">
                  <div className="image-wrapper">
                    <img src={Team1} alt="" className="img-team" />
                  </div>
                  <h3>MC. Basyar</h3>
                  <sspan>Chief Executive Officer (CEO)</sspan>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="team-item">
                  <div className="image-wrapper">
                    <img src={Team2} alt="" className="img-team" />
                  </div>
                  <h3>M. Saidi</h3>
                  <span>Chief Supervisory Board (CSB)</span>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="team-item">
                  <div className="image-wrapper">
                    <img src={Team3} alt="" className="img-team" />
                  </div>
                  <h3>Fathul Arif</h3>
                  <span>Chief Secretary</span>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="team-item">
                  <div className="image-wrapper">
                    <img src={Team4} alt="" className="img-team" />
                  </div>
                  <h3>R. Sjah</h3>
                  <p>Member Of Governing Board</p>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="team-item">
                  <div className="image-wrapper">
                    <img src={Team5} alt="" className="img-team" />
                  </div>
                  <h3>RR. Rachman</h3>
                  <span>Chief Financial Officer</span>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="team-item">
                  <div className="image-wrapper">
                    <img src={Team6} alt="" className="img-team" />
                  </div>
                  <h3>H. Gorbachev</h3>
                  <span>Chief Technology Officer</span>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="team-item">
                  <div className="image-wrapper">
                    <img src={Team7} alt="" className="img-team" />
                  </div>
                  <h3>MJ. RIdha</h3>
                  <span>Technology Officer</span>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="team-item">
                  <div className="image-wrapper">
                    <img src={Team8} alt="" className="img-team" />
                  </div>
                  <h3>Farhan</h3>
                  <span>Lead Community</span>
                </div>
              </div>
            </div>
            {/* <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's Talk"}
            </a> */}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
