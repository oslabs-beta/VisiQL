import React, { useState, useEffect, useRef } from 'react';
//@ts-ignore
import Diagram from './Diagram';
// import TestDiagram from './testDiagram';

const VisualizerContainer = (props: { data: object }) => {
  return (
    <div className='schema-vis-container'>
      <Diagram data={props.data} />
      {/* <TestDiagram data={props.data}/> */}
    </div>
  );
};

export default VisualizerContainer;
//might need the fetch request and onSubmit here to trigger the update to data
