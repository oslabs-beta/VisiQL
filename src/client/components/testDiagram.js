import React, { useRef, useEffect, useState } from 'react';
import { select, create, event, line, selectAll, curveCardinal, hierarchy, tree, linkHorizontal, interpolateTransformCss } from 'd3'; //npm install d3 and then require in the select module


const TestDiagram = ({ data }) => {
  const svgRef = useRef(); //this returns an obj with a property 'current' it will be undefined until the svg dom element is rendered. We can trigger the rendering with a useEffect hook.
  // const dimensions = useResizeObserver(svgRef);
  useEffect(() => {
    // this is where we select the element where our svg dom element lives
    const margin = {top: 10, right: 120, bottom: 10, left: 40};
    const svg = select(svgRef.current)
    // .attr("viewBox", [-margin.left, -margin.top, 1152, 10])
    const root = hierarchy(data);
    root.x0 = 192/2;
    root.y0 = 0;
    root.descendants().forEach((d, i) => {
        d.id = i;
        d._children = d.children;
    });


const gLink = svg.append('g')
      .attr('fill', 'none')
      .attr('stroke', '#555')
      .attr('stroke-opacity', 0.4)
      .attr('stroke-width', 1.5);

const gNode = svg.append('g')
      .attr('cursor', 'pointer')
      .attr('pointer-events', 'all');

const update = (source) => {
    const duration =  1500;
    const nodes = root.descendants().reverse();
    const links = root.links();



    const treeLayout = tree().size([520, 240]); //this can be changed later if made responsive
    // const treeLayout = tree()
    //   .nodeSize([15, 50])
    //   .separation((a,b) => a.depth);
    treeLayout(root);

    let left = root;
    let right = root;
    root.eachBefore(node => {
      if (node.x < left.x) left = node;
      if (node.x > right.x) right = node;
    });
    const height = right.x - left.x + margin.top + margin.bottom;

    const transition = svg.transition()
        .duration(duration)
        .attr('viewBox', [-margin.left, left.x - margin.top, 450, height])
        .tween('resize', window.ResizeObserver ? null : () => () => svg.dispatch('toggle'));

    const node = gNode.selectAll("g")
      .data(nodes, d => d.id);

    const vsgNode =  svg.selectAll('.node')
        .attr('cursor', 'pointer')
        .attr('pointer-events', 'all');

    const vNode = vsgNode.selectAll('.node')
        .data(vNodes, d => d.id);

    const enterNode = vNode.enter().append('g')
        .attr("transform", d => `translate(${source.y0},${source.x0})`)
        .attr("fill-opacity", 0)
        .attr("stroke-opacity", 0)
        .on("click", (event, d) => {
          d.children = d.children ? null : d._children;
          update(d);
          });

      const nodeEnter = node.enter().append("g")
    .attr("transform", d => `translate(${source.y0},${source.x0}`)
    .attr("fill-opacity", 0)
    .attr("stroke-opacity", 0)
    .on("click", (event, d) => {
      d.children = d.children ? null : d._children;
      update(d);
    })
    .attr('fill', node => node._children ? '#ed6a5a' : '#5ca4a9')
      .attr('cx', (node) => node.y + 50)
      .attr('cy', (node) => node.x)


    const linkGenerator = linkHorizontal()
      .x((node) => node.y + 50)
      .y((node) => node.x);
    //nodes
    const nodeSelect = svg
      .selectAll('.node')
      .data(root.descendants())
      .join('circle')
      .attr('class', 'node')
      .attr('r', 3)
      .attr('fill', node => node._children ? '#ed6a5a' : '#5ca4a9')
      .attr('cx', (node) => node.y + 50)
      .attr('cy', (node) => node.x)
      .on("click", (event, d) => {
        d.children = d.children ? null : d._children;
        update(d)
    })
      .attr("transform", d => `translate(${source.y0},${source.x0}`)
      .exit().transition(transition).remove()
  .attr("transform", d => `translate(${source.y},${source.x})`)
  .attr("fill-opacity", 0)
  .attr("stroke-opacity", 0);
    //links
    svg
      .selectAll('.link')
    .data(links, d => d.target.id)
    .join('path')
    // .data(links, d => d.target.id)
      .attr('class', 'link')
      .attr('fill', 'none')
      .attr('stroke', '#5ca4a9')
      //generation and animation of links
      .attr('d', linkGenerator)
      .attr('stroke-dasharray', function () {
        const length = this.getTotalLength();
        return `${length} ${length}`;
      })
      .attr('stroke-dashoffset', function () {
        const length = this.getTotalLength();
        return length;
      })
    //   .transition()
      .attr('stroke-dashoffset', 0);
      

    //labels
    svg
      .selectAll('.label')
      .data(root.descendants())
      .join('text')
      .attr('class', 'label')
      .text((node) => node.data.name)
      .attr('text-anchor', node => node._children ? 'end' : 'start')
      .attr('font-size', 10)
      .attr('fill', '#ed6a5a')
      .attr('dy', '0.31em') // lines up text with node horizontally
      .attr('x', (node) => node._children ? node.y + 44 : node.y + 56) // added 50px because nodes and links were moved to right by 50px
      .attr('y', (node) => node.x)
      .clone(true).lower()
      .attr('stroke-linejoin', 'round')
      .attr('stroke-width', 3)
    //   .attr('stroke', 'white');
    
    // this returns a selection obj. the most imp props are enter, exit, update. enter => represents the dom elements that need to enter the svg to sync data and dom. update(groups) => represents the elements that need to be synced. exit => represents any extra dom elements that need to be removed because there is no data element to connect to it.
   
    // const nodeUpdate = node.merge(nodeEnter).transition(transition)
    // .attr('transform', d => `translate(${d.y}, ${d.x})`)
    // .attr('fill-opacity', 1)
    // .attr('stroke-opacity', 1);




    const nodeUpdate = node.merge(nodeEnter).transition(transition)
.attr('transform', d => `translate(${d.y}, ${d.x})`)
.attr('fill-opacity', 1)
.attr('stroke-opacity', 1);

const nodeExit = node.exit().transition(transition).remove()
  .attr("transform", d => `translate(${source.y},${source.x})`)
  .attr("fill-opacity", 0)
  .attr("stroke-opacity", 0);

  const diagonal = linkHorizontal().x(d => d.y).y(d => d.x)
  
  
    
  const link = gLink.selectAll("path")
    .data(links, d => d.target.id);

  const linkEnter = link.enter().append("path")
  .attr("d", d => {
    const o = {x: source.x0, y: source.y0};
    return diagonal({source: o, target: o});
  });

  link.merge(linkEnter).transition(transition)
    .attr('d', diagonal);


  
  
  link.exit().transition(transition).remove()
    .attr("d", d => {
      const o = {x: source.x, y: source.y};
      return diagonal({source: o, target: o});
    });

    root.eachBefore(d => {
        d.x0 = d.x;
        d.y0 = d.y;
    });
  
    }
    update(root);
  }, [data]);

  return (
    <div id='diagram'>
      <svg id='tree-svg' ref={svgRef}>
      </svg>
    </div>
  );
};

export default TestDiagram;