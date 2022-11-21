import React from 'react';
import Navbar from './Navbar';
//@ts-ignore
import DBInput from './DBInput';
//@ts-ignore

type HomepageProps = {
  loggedIn: Boolean;
  setCurrentUserId: Function;
  currentUserId: Number;
};

const Homepage = ({
  loggedIn,
  setCurrentUserId,
  currentUserId,
}: HomepageProps) => {
  return (
    <div id='homepage-container'>
      <Navbar isLoggedIn={loggedIn} setCurrentUserId={setCurrentUserId} />
      <DBInput currentUserId={currentUserId} />
    </div>
  );
};

export default Homepage;
