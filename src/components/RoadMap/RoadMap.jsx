import React from 'react';
import { Container } from 'react-bootstrap';
import { Chrono } from 'react-chrono';
import Title from '../Title/Title';

const RoadMap = () => {
  const items = [
    {
      title: '02-03 December 2021',
    },
    {
      title: '04-05 December 2021',
    },
    {
      title: '06 December 2021',
    },
    {
      title: '07 December 2021',
    },
    {
      title: '08 December 2021',
    },
    {
      title: '10 December 2021',
    },
    {
      title: '11 December 2021',
    },
    {
      title: '12-17 December 2021',
    },
    {
      title: '18-19 December 2021',
    },
    {
      title: '20 December 2021',
    },
  ];
  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Interactive Roadmap" />
          <p className="contact-wrapper__text text-white">
            Roadmap IDM Coop - Because tomorrow is a dream together
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-12 mb-5">
              <div style={{ width: '100%' }}>
                <Chrono
                  items={items}
                  mode="VERTICAL_ALTERNATING"
                  hideControls
                  useReadMore={{ useReadMore: false }}
                  theme={{
                    primary: '#010042',
                    secondary: '#FFF',
                    cardBgColor: 'rgba(1, 0, 66, 0.7)',
                    cardForeColor: 'violet',
                    titleColor: '#010042',
                  }}
                >
                  <div>
                    <ul>
                      <li>Live Telegram</li>
                      <li>Live Website</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Influinser</li>
                      <li>Soft Marketing</li>
                      <li>Start Partership</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Announce Private & Presale</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Influinser</li>
                      <li>Soft Marketing</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Open Private</li>
                      <li>Detail Private</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Open Whitelist</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Close Private</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Branding</li>
                      <li>Plus Marketing</li>
                      <li>Close Whitelist</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>IDO</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Launching</li>
                    </ul>
                  </div>
                </Chrono>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RoadMap;
