import React, { useState } from 'react';
//@ts-ignore
import Tree from './Tree';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { IconButton, Tooltip } from '@mui/material';
//@ts-ignore
import TreePopOutHandler from './TreePopOutHandler';

const VisualizerContainer = (props: { data: object, showTree: boolean}) => {
  const [treeExpand, setTreeExpand] = useState(false);
  
  return props.showTree? (
    <div>
      <div className='tree-vis-container' >
        <div id='diagram' >
          <Tree data={props.data} />
        </div>
      </div>
      <Tooltip title={<h1>Open in New Window</h1>} placement='top' arrow>
        <IconButton
          className='tree-expand-button'
          onClick={() => {
            setTreeExpand(true);
          }}
        >
          {<OpenInNewIcon style={{ fontSize: 50 }} />}
        </IconButton>
      </Tooltip>
      <TreePopOutHandler
        treedata={props.data}
        close={setTreeExpand}
        trigger={treeExpand}
      />
    </div>
  ) : (
    null
  );
};

export default VisualizerContainer;
//might need the fetch request and onSubmit here to trigger the update to data
//
