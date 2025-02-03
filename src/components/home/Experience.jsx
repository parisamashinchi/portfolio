import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { MainContainer } from './MainContainer';
import {
  Container,
  Row,
} from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Container>
        <MainContainer className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {experiences.heading}
          </h2>
          <Row>
            {
              experiences.data.map((data, index) => {
                return <ExperienceCard key={index} data={data} />
              })
            }
          </Row>
        </MainContainer>
      </Container>
    </section>
  );
}

export default Experience;