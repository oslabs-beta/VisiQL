import React from 'react';
import Kelly from '../assets/Kelly.jpg';
import Jordan from '../assets/Jordan.jpg';
import Cavin from '../assets/Cavin.jpg';
import Rebecca from '../assets/Rebecca.png';
import TeamCards from './TeamCards';

const Team = () => {
  const bios = [
    {
      teammembername: 'Kelly Cuevas',
      title: 'Software Engineer',
      headshot: Kelly,
      github: 'https://github.com/KellyCuevas',
      linkedin: 'https://www.linkedin.com/in/kelly-cuevas/',
    },
    {
      teammembername: 'Jordan Jeter',
      title: 'Software Engineer',
      headshot: Jordan,
      github: 'https://github.com/gpys',
      linkedin: 'https://www.linkedin.com/',
    },
    {
      teammembername: 'Cavin Park',
      title: 'Software Engineer',
      headshot: Cavin,
      github: 'https://github.com/sanghpark1',
      linkedin: 'https://www.linkedin.com/in/sanghpark1/',
    },
    {
      teammembername: 'Rebecca Shesser',
      title: 'Software Engineer',
      headshot: Rebecca,
      github: 'https://github.com/rebshess',
      linkedin: 'https://www.linkedin.com/in/rebeccashesser/',
    },
  ];
  const bioArr = bios.map((bio, i) => {
    return <TeamCards key={i} info={bio} />;
  });

  return (
    <div className='team-container'>
      <h1 className='team-title'>Meet the Team</h1>
      <div className='headshots-links'>{bioArr}</div>
    </div>
  );
};

export default Team;
