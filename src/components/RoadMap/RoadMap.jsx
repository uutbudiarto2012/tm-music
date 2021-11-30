import React from 'react';
import { Container } from 'react-bootstrap';
import ImageRoadMap from '../../assets/roadmap.jpeg';
import Title from '../Title/Title';

const RoadMap = () => {
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
              <img src={ImageRoadMap} alt="" className="img-fluid rounded thumbnail" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RoadMap;
