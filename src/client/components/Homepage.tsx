import React from 'react';
import Navbar from './Navbar';
//@ts-ignore
import DBInput from './DBInput';
import ProjectSide from './ProjectSide';

type HomepageProps = {
  loggedIn: Boolean;
};

const Homepage = ({ loggedIn }: HomepageProps) => {
  return (
    <div id='homepage-container'>
      <Navbar isLoggedIn={loggedIn} />
      <DBInput />
      {/* <ProjectSide /> */}
    </div>
  );
};

export default Homepage;
