import React, { useRef, useEffect, useState } from 'react';
import {
  select,
  hierarchy,
  tree,
  linkHorizontal,
  zoom,  
} from 'd3';


const Tree = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const clearAllNodes = svg.selectAll('g').remove();
    const root = hierarchy(data);
    const cacheReferenceTableNames = {};
    root.descendants().forEach((d, i) => {
      d.id = i;
      d._children = d.children;
      if (d.depth === 3) {
        cacheReferenceTableNames[d.data.name] = [];
        d.children = d.children ? null : d._children;
      }
    });
    
    const zoomG = svg.append('g');
      //append gLink and gNode to zoomG in order to capture everything rendered for the zoom
    const gLink = zoomG.append('g').attr('fill', 'none');

    const gNode = zoomG.append('g')
    .attr('cursor', 'pointer')
    .attr('pointer-events', 'all')
    .attr('id', 'node-parent');

    //handleZoom takes zoom event object
    const  handleZoom = ({transform}) => {
      zoomG.attr('transform', transform);
    }

    const Zoom = zoom()
    .scaleExtent([0.7, 8])
    .on('zoom', handleZoom);
    svg.call(Zoom); 

    const update = (source) => {
      const duration = 500;
      const nodes = root.descendants().reverse();
      const links = root.links();

      const treeLayout = tree().size([
        document.getElementById('diagram').clientHeight,
        document.getElementById('diagram').clientWidth,
      ]);
      treeLayout(root);

      //make size of diagram div responsive
      const diagramDiv = document.getElementById('diagram');
      svg.attr('viewBox', [
        document.getElementById('diagram').clientWidth * -0.11,
        document.getElementById('diagram').clientHeight * 0.3,
        document.getElementById('diagram').clientWidth * 1.3,
        document.getElementById('diagram').clientHeight / 2,
      ]);


      const linkGenerator = linkHorizontal()
        .x((node) => node.y)
        .y((node) => node.x);

      const transition = svg.transition().duration(duration);

      const node = gNode.selectAll('g').data(nodes, (d) => d.id);

      const nodeEnter = node
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', (d) => `translate(${source.y0},${source.x0})`)
        .attr('fill-opacity', 0)
        .attr('stroke-opacity', 0);

      nodeEnter
        .append('circle')
        .attr('class', (d) => {
          if (d.depth === 2 || d.depth === 4) return 'circle column-circle';
          return 'circle';
        })
        .attr('r', (d) => {
          const nodeCountCircleSizeRatio = (document.getElementById('diagram').clientHeight) / (document.getElementById('node-parent').childElementCount) / 2;
          if (nodeCountCircleSizeRatio < 3 && (d.depth === 2 || d.depth === 4)) {
            return nodeCountCircleSizeRatio;
          }
          return 3;
        })
        .attr('fill', (d) => (d._children ? '#ed6a5a' : '#5ca4a9'))
        .attr('stroke-width', 10)
        .on('click', (event, d) => {
          d.children = d.children ? null : d._children;
          update(d);
          const nodeCountfontSizeRatio = (document.getElementById('diagram').clientHeight) / (document.getElementById('node-parent').childElementCount) * 1.35;
          if (nodeCountfontSizeRatio < 16) {
            svg.selectAll('.column-node').attr('font-size', nodeCountfontSizeRatio);
          } else {
            svg.selectAll('.column-node').attr('font-size', 16);
          }
          const nodeCountCircleSizeRatio = (document.getElementById('diagram').clientHeight) / (document.getElementById('node-parent').childElementCount) / 2;
          if (nodeCountCircleSizeRatio < 3) {
            svg.selectAll('.column-circle').attr('r', nodeCountCircleSizeRatio);
          } else {
            svg.selectAll('.column-circle').attr('r', 3);
          }
        });

      nodeEnter
        .append('text')
        .attr('class', (d) => {
          if (d.depth === 2 || d.depth === 4) return 'label column-node'
          return 'label';
        })
        .attr('id', (d) => `aa${d.id}`)
        .attr('dy', '0.31em')
        .attr('x', (d) => (d._children ? -6 : 6))
        .attr('text-anchor', (d) => (d._children ? 'end' : 'beginning'))
        // .attr('fill', (d) => {
        //   if (d.data.name.slice(0, 7) === 'primKey') return 'red';
        .attr('fill', (d) => {
          if (d.depth === 4 && d.data.name.slice(0, 7) === 'primKey')
            return 'red';
          return 'black';
        })
        .text((d) => {
          if (d.data.name.slice(0, 7) === 'primKey') {
            d.data.name = d.data.name.slice(7);
          }
          if (
            (d.depth === 1 || d.depth === 3) &&
            cacheReferenceTableNames[d.data.name]
          ) {
            cacheReferenceTableNames[d.data.name].push(d.id);
          }
          return d.data.name;
        })
        .on('click', (event, node) => {
          if (node.depth === 0 || node.depth === 1 || node.depth === 3) return;
          if (node.data.name[node.data.name.length - 1] === '!') {
            node.data.name = node.data.name.slice(0, -1);
          } else node.data.name += '!';
          console.log('node.data.name: ', node.data.name);
          svg.selectAll('.label').text((d) => d.data.name);
        })
        .attr('font-size', d => {
          const nodeCountfontSizeRatio = (document.getElementById('diagram').clientHeight) / (document.getElementById('node-parent').childElementCount) * 1.35;
          if (nodeCountfontSizeRatio <= 16 && (d.depth === 2 || d.depth === 4)) {
            return nodeCountfontSizeRatio;
          };
          return 16;
        })
        .on('mouseover', (event, d) => {
          if (cacheReferenceTableNames[d.data.name]) {
            cacheReferenceTableNames[d.data.name].forEach((ele) => {
              svg.selectAll(`#aa${ele}`).attr('fill', 'orange');
            });
          }
        })
        .on('mouseout', (event, d) => {
          cacheReferenceTableNames[d.data.name].forEach((ele) => {
            svg.selectAll(`#aa${ele}`).attr('fill', 'black');
          });
        })
        .clone(true)
        .lower()
        .attr('stroke-linejoin', 'round')
        .attr('stroke-width', 3)
        .attr('stroke-opacity', 0);

      const nodeUpdate = node
        .merge(nodeEnter)
        .transition(transition)
        .attr('transform', (d) => `translate(${d.y},${d.x})`)
        .attr('fill-opacity', 1)
        .attr('stroke-opacity', 1);

      const nodeExit = node
        .exit()
        .transition(transition)
        .remove()
        .attr('transform', (d) => `translate(${source.y},${source.x})`)
        .attr('fill-opacity', 0)
        .attr('stroke-opacity', 0);

      const link = gLink.selectAll('path').data(links, (d) => d.target.id);

      const linkEnter = link
        .enter()
        .append('path')
        .attr('class', 'link')
        .attr('stroke', '#5ca4a9')
        .attr('d', (d) => {
          const o = { x: source.x0, y: source.y0 };
          return linkGenerator({ source: o, target: o });
        });

      link
        .merge(linkEnter)
        .transition(transition)
        .attr('d', linkGenerator)
        .transition()
        .attr('stroke-dashoffset', 0);

      link
        .exit()
        .transition(transition)
        .remove()
        .attr('d', (d) => {
          const o = { x: source.x, y: source.y };
          return linkGenerator({ source: o, target: o });
        });

      root.eachBefore((d) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });

         

    };
    
    update(root);
  }, [data]);

  return (
    <div id='inner-diagram-div'>
      <svg id='tree-svg' ref={svgRef}></svg>
    </div>
  );
};

export default Tree;
