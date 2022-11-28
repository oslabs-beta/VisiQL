import React from 'react';
import { GitHub } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import Kelly from '../assets/Kelly.jpg';
import Jordan from '../assets/Jordan.jpg';
import Cavin from '../assets/Cavin.jpg';
import Rebecca from '../assets/Rebecca.png';

const TeamCards = (props) => {
  const { teammembername, title, headshot, linkedin, github } = props.info;
  return (
    <div className='team-member-card'>
      <h2 className='team-name'>{teammembername}</h2>
      <img src={headshot} width='450px' height='450px' />
      <div>
        <li className='title'>{title}</li>
        <br />
        <li>
          <LinkedIn fontSize='large' />
          <a href={linkedin} target='_blank'>
            LinkedIn
          </a>
        </li>
        <br />
        <li>
          <GitHub fontSize='large' />
          <a href={github} target='_blank'>
            GitHub
          </a>
        </li>
      </div>
    </div>
  );
};

export default TeamCards;
