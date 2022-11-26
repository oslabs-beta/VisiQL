import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
//@ts-ignore
import DBInput from './DBInput';
//@ts-ignore
import NotSignedIn from './NotSignedIn';

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
  const [notSignedInPop, setNotSignedInPop] = useState(false);
  return (
    <div id='homepage-container'>
      <Navbar
        isLoggedIn={loggedIn}
        setCurrentUserId={setCurrentUserId}
        notSignedInPop={notSignedInPop}
        setNotSignedInPop={setNotSignedInPop}
      />
      <DBInput currentUserId={currentUserId} />
      <NotSignedIn trigger={notSignedInPop} close={setNotSignedInPop} />
    </div>
  );
};

export default Homepage;
