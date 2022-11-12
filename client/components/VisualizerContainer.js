import React, { useState, useEffect, useRef } from 'react';
import Diagram from './Diagram';


const VisualizerContainer = (props) => {
  
  return (
    <div className='schema-vis-container'>
      <Diagram data={props.data} />
    </div>
  );
};

export default VisualizerContainer;
//might need the fetch request and onSubmit here to trigger the update to data
