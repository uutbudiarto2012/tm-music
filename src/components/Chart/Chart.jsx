import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import Title from '../Title/Title';

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: [
    'Presale',
    'Liquidity',
    'Stacking',
    'Seed',
    'Team',
    'Charity',
    'Development',
    'Marketing',
  ],
  datasets: [
    {
      label: '#of Votes',
      data: [12, 19, 3, 5, 2, 3, 4, 6],
      backgroundColor: [
        '#E93363',
        '#A8DEFC',
        '#81CFF9',
        '#63B6F7',
        '#4396F7',
        '#E9BB4D',
        '#71D1FA',
        '#7383F7',
      ],
      borderColor: [
        '#E93363',
        '#A8DEFC',
        '#81CFF9',
        '#63B6F7',
        '#4396F7',
        '#E9BB4D',
        '#71D1FA',
        '#7383F7',
      ],
      borderWidth: 1,
    },
  ],
};

const Chart = () => {
  return (
    <section id="projects" className="mb-5">
      <Container>
        <div className="project-wrapper">
          <Title title="Tokenomics" />
          <div className="row justify-content-center">
            <div className="col-lg-5 col-10">
              <Doughnut data={data} />;
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Chart;
