import React from 'react';
import Team from './Team';
import Navbar from './Navbar';
import Documentation from './Documentation';
import '../scss/about.scss';

const About = () => {
  return (
    <div className='about-container'>
      <Navbar />
      <Documentation />
      <Team />
    </div>
  );
};

export default About;
