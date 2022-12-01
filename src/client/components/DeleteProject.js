import React from 'react';
import { Button } from '@mui/material';

const DeleteProject = (props) => {

  return props.trigger ? (
    <div className='save-project-popover-parent'>
      <div className='save-project-popover'>
        <h1>Are you sure you want to delete this project?</h1>
        <div className='project-save-cancel-buttons'>
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#ed6a5a',
              ':hover': { backgroundColor: '#f1887b' },
            }}
            onClick={() => {
                props.deleteProjectFunc();
            }}
          >
            Delete
          </Button>
          <Button
            sx={{
              backgroundColor: '#ed6a5a',
              ':hover': { backgroundColor: '#f1887b' },
            }}
            variant='contained'
            onClick={() => {
              props.close(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  ) : (
    null
  );
};

export default DeleteProject;