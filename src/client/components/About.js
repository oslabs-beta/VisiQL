import React from 'react';
import Team from './Team';
import Documentation from './Documentation';
import '../scss/about.scss';

const About = () => {
  return (
    <div className='about-container'>
      <Documentation />
      <Team />
    </div>
  );
};

export default About;
