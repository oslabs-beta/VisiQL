import React from 'react';
import { GitHub } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import Kelly from '../assets/Kelly.jpg';
import Jordan from '../assets/Jordan.jpg';
import Cavin from '../assets/Cavin.jpg';
import Rebecca from '../assets/Rebecca.png';
import { info } from 'console';

type TeamCardsProps = {
  info: {
    teammembername: string;
    title: string;
    headshot: string;
    linkedin: string;
    github: string; 
  }
}
const TeamCards = ({
  info: {
    teammembername,
    title,
    headshot,
    linkedin,
    github
  }
}: TeamCardsProps) => {
  
  return (
    <div className='team-member-card'>
      <h2 className='team-name'>{teammembername}</h2>
      <img src={headshot} width='325px' height='325px' />
      <div>
        <li className='title'>{title}</li>
        <br />
        <li>
          <LinkedIn fontSize='medium' />
          <a href={linkedin} target='_blank'>
            LinkedIn
          </a>
        </li>
        <br />
        <li>
          <GitHub fontSize='medium' />
          <a href={github} target='_blank'>
            GitHub
          </a>
        </li>
      </div>
    </div>
  );
};

export default TeamCards;
