import React from 'react';
import Navbar from './Navbar';
import VisualizerContainer from './VisualizerContainer';
import SchemaContainer from './SchemaContainer';

const Homepage = () => {
  return (
    <div id='homepage-container'>
      <Navbar />
      <VisualizerContainer />
      <SchemaContainer />
    </div>
  );
};

export default Homepage;
