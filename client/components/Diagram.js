import React, { useRef, useEffect, useState } from 'react';
import { select, line } from 'd3'; //npm install d3 and then require in the select module


const Diagram = () => {
  const [data, setData] = useState([20, 40, 50, 60]);
  const svgRef = useRef();//this returns an obj with a property 'current' it will be undefined until the svg dom element is rendered. We can trigger the rendering with a useEffect hook.
  useEffect(() => {
    console.log(svgRef);
    // this is where we select the element where our svg dom element lives
    const svg =  select(svgRef.current);
    const myLine = line()
    .x((value, index) => index * 50)
    .y(value => value);
    // this returns a selection obj. the most imp props are enter, exit, update. enter => represents the dom elements that need to enter the svg to sync data and dom. update(groups) => represents the elements that need to be synced. exit => represents any extra dom elements that need to be removed because there is no data element to connect to it.
    svg
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('r', value => value)
    .attr('cx', value => value * 2)
    .attr('cy', value => value * 2)
    .attr('stroke', 'red')
  }, []);
  return (
  <div id='diagram'>
    <h2>This is Diagram</h2>
    <svg ref={svgRef}>
      {/* the path element draws a line. the d attr is a collection of all the dots along the path  */}
               
     
    </svg>
  </div>
  
  )
};

export default Diagram;