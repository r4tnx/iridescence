import React, { useState } from 'react';
import '../styles/Card.css';
import lcliq from "../Photo/lowDSC_5256.jpeg";
import { Link } from 'react-router-dom';

const CardPotowalk = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={lcliq} alt='cliqevent' className="card-img" loading='lazy' />
      <div className="card-overlay">
        <p className={`card-text ${isHovered ? 'raised' : ''}`}>
          In club comprehensive photography workshop aimed at improving skills in using a DSLR camera. This workshop covered the basics of photography and provide hands-on training on how to effectively use a DSLR camera.
        </p>
        {isHovered && <Link to="/workshop"><button className="know-more-button">Know More</button></Link>}
      </div>
    </div>
  );
};

export default CardPotowalk;
