import React from 'react';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';

import Tree from './Tree';

const TreePopOutHandler = (props) => {
  return props.trigger ? (
    <div>
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
      <div className='tree-pop-out'>
        <div className='tree-pop-out-container'>
          <Tree data={props.treedata} />
        </div>
      </div>
    </div>
  ) : (
    ' '
  );
};

export default TreePopOutHandler;
