import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="4">
      <div className="py-5 text-center">
        <div className='image-container'>
        <img className=" bg-white mb-3" src={data.companyLogo} alt={data.companyName} width={120}  />
        </div>
        <h4>{data.companyName}</h4>
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;