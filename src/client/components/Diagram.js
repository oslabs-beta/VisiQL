// import React, { useRef, useEffect, useState } from 'react';
// import { select, line, selectAll, curveCardinal, hierarchy, tree, linkHorizontal } from 'd3'; //npm install d3 and then require in the select module


// const Diagram = ({ data }) => {
//   const svgRef = useRef(); //this returns an obj with a property 'current' it will be undefined until the svg dom element is rendered. We can trigger the rendering with a useEffect hook.
//   // const dimensions = useResizeObserver(svgRef);
//   useEffect(() => {
//     // this is where we select the element where our svg dom element lives
//     const svg = select(svgRef.current);
//     const root = hierarchy(data);
//     const treeLayout = tree().size([520, 240]); //this can be changed later if made responsive
//     // const treeLayout = tree()
//     //   .nodeSize([15, 50])
//     //   .separation((a,b) => a.depth);
//     treeLayout(root);
//     const linkGenerator = linkHorizontal()
//       .x((node) => node.y + 50)
//       .y((node) => node.x);
//     //nodes
//     svg
//       .selectAll('.node')
//       .data(root.descendants())
//       .join('circle')
//       .attr('class', 'node')
//       .attr('r', 3)
//       .attr('fill', '#5ca4a9')
//       .attr('cx', (node) => node.y + 50)
//       .attr('cy', (node) => node.x);

//     //links
//     svg
//       .selectAll('.link')
//       .data(root.links())
//       .join('path')
//       .attr('class', 'link')
//       .attr('fill', 'none')
//       .attr('stroke', '#5ca4a9')
//       //generation and animation of links
//       .attr('d', linkGenerator)
//       .attr('stroke-dasharray', function () {
//         const length = this.getTotalLength();
//         return `${length} ${length}`;
//       })
//       .attr('stroke-dashoffset', function () {
//         const length = this.getTotalLength();
//         return length;
//       })
//       .transition()
//       .attr('stroke-dashoffset', 0);

//     //labels
//     svg
//       .selectAll('.label')
//       .data(root.descendants())
//       .join('text')
//       .attr('class', 'label')
//       .text((node) => node.data.name)
//       .attr('text-anchor', 'beginning')
//       .attr('font-size', 10)
//       .attr('fill', '#ed6a5a')
//       .attr('x', (node) => node.y + 55)
//       .attr('y', (node) => node.x - 10);
//     // this returns a selection obj. the most imp props are enter, exit, update. enter => represents the dom elements that need to enter the svg to sync data and dom. update(groups) => represents the elements that need to be synced. exit => represents any extra dom elements that need to be removed because there is no data element to connect to it.
   
//   }, [data]);

//   return (
//     <div id='diagram'>
//       <svg id='tree-svg' ref={svgRef}>
//       </svg>
//     </div>
//   );
// };

// export default Diagram;
