import React from 'react';
import { Button } from '@mui/material';

import Tree from './Tree';

const TreePopOutHandler = (props) => {
  return props.trigger ? (
    <div>
      <div className='tree-pop-out'>
        <div className='tree-pop-out-container'>
          <Button
            sx={{
              backgroundColor: '#ed6a5a',
              ':hover': { backgroundColor: '#f1887b' },
            }}
            variant='contained'
            className='tree-pop-out-close'
            onClick={() => {
              props.close(false);
            }}
          >
            Close
          </Button>
          <Tree data={props.treedata} />
        </div>
      </div>
    </div>
  ) : (
    ' '
  );
};

export default TreePopOutHandler;
