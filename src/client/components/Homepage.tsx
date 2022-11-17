import React from 'react';
import Navbar from './Navbar';
//@ts-ignore
import DBInput from './DBInput';

type HomepageProps = {
  loggedIn: Boolean;
};

const Homepage = ({ loggedIn }: HomepageProps) => {
  return (
    <div id='homepage-container'>
      <Navbar isLoggedIn={loggedIn} />
      <DBInput />
    </div>
  );
};

export default Homepage;
