import React, { useState, useEffect, useRef } from 'react';
//@ts-ignore
// import TestDiagram from './TestDiagram';
// import Diagram from './Diagram';
// import TreeTest from './TreeTest';
import Copy from './Copy';


const VisualizerContainer = (props: { data: object; }) => {
  
  return (
    <div className='schema-vis-container'>
      <Copy data={props.data}/>
      {/* <Diagram data={props.data} /> */}
      {/* <TreeTest data={props.data} /> */}
    </div>
  );
};

export default VisualizerContainer;
//might need the fetch request and onSubmit here to trigger the update to data
// 