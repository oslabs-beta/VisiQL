import React, { useRef, useEffect, useState } from 'react';
import { select, line, selectAll, curveCardinal, hierarchy, tree, linkHorizontal
 } from 'd3'; //npm install d3 and then require in the select module


const Diagram = ({ data }) => {
  const svgRef = useRef();//this returns an obj with a property 'current' it will be undefined until the svg dom element is rendered. We can trigger the rendering with a useEffect hook.
  // const dimensions = useResizeObserver(svgRef);
  useEffect(() => {
    // this is where we select the element where our svg dom element lives
    const svg =  select(svgRef.current);
    const root = hierarchy(data);
    const treeLayout = tree().size([300, 150]);//this can be changed later if made responsive
    treeLayout(root);
    const linkGenerator = linkHorizontal()
      .x(node => node.y + 50)
      .y(node => node.x)
    //nodes
    svg
      .selectAll('.node')
      .data(root.descendants())
      .join('circle')
      .attr('class', 'node')
      .attr('r', 4)
      .attr('fill', '#5ca4a9')
      .attr('cx', node => node.y + 50)
      .attr('cy', node => node.x);

    //links
    svg
      .selectAll('.link')
      .data(root.links())
      .join('path')
      .attr('class', 'link')
      .attr('fill', 'none')
      .attr('stroke', '#5ca4a9')
      .attr('d', linkGenerator)
      .attr('stroke-dasharray', function() {
        const length = this.getTotalLength();
        return `${length} ${length}`;
      })
      .attr('stroke-dashoffset', function() {
        const length = this.getTotalLength();
        return length;
      })
      .transition()
      .attr('stroke-dashoffset', 0)

    //labels
    svg
      .selectAll('.label')
      .data(root.descendants())
      .join('text')
      .attr('class', 'label')
      .text(node => node.data.name)
      .attr('text-anchor', 'middle')
      .attr('font-size', 10)
      .attr('fill', '#ed6a5a')
      .attr('x', node => node.y + 50)
      .attr('y', node => node.x - 15)
    // this returns a selection obj. the most imp props are enter, exit, update. enter => represents the dom elements that need to enter the svg to sync data and dom. update(groups) => represents the elements that need to be synced. exit => represents any extra dom elements that need to be removed because there is no data element to connect to it.
  //   svg
  //   .selectAll('circle')
  //   .data(data)
  //   .join('circle')
  //   .attr('r', value => value)
  //   .attr('cx', value => value * 2)
  //   .attr('cy', value => value * 2)
  //   .attr('stroke', 'red')
      // svg
      // .selectAll('path')
      // .data([data])
      // .join('path')
      // .attr('d', value => myLine(value))
      // .attr('fill', 'none')
      // .attr('stroke', 'blue')
  }, [data]);
   
  return (
  <div id='diagram'>
    <svg id='tree-svg' ref={svgRef}>
      {/* the path element draws a line. the d attr is a collection of all the dots along the path  */}
               
     
    </svg>
  </div>
  
  )
};

export default Diagram;