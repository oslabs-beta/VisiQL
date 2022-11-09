import React from 'react';
import DBInput from './DBInput';
import Diagram from './Diagram';

const VisualizerContainer = () => {
  return (
    <div id='vis-container'>
      <DBInput />
      <Diagram />
    </div>
  );
};

export default VisualizerContainer;
