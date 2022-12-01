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
      <Navbar
        loggedIn={loggedIn}
        setCurrentUserId={setCurrentUserId}
        notSignedInPop={notSignedInPop}
        setNotSignedInPop={setNotSignedInPop}
      />
      <Documentation />
      <Team />
    </div>
  );
};

export default About;
