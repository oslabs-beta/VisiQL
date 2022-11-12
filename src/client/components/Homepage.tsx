import React from 'react';
import Navbar from './Navbar';
//@ts-ignore
import DBInput from './DBInput';

const Homepage = () => {
  return (
    <div id='homepage-container'>
      <Navbar />
      <DBInput />
    </div>
  );
};

export default Homepage;
