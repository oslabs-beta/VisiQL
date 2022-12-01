import React from 'react';
import Team from './Team';
import Navbar from './Navbar';
import Documentation from './Documentation';
import '../scss/about.scss';

const About = ({
  loggedIn,
  setCurrentUserId,
  notSignedInPop,
  setNotSignedInPop,
}) => {
  console.log(loggedIn);
  return (
    <div className='about-container'>
      <Documentation />
      <Team />
    </div>
  );
};

export default About;
