import React from 'react';
import { Button, TextField } from '@mui/material';

const SaveProject = (props) => {
  return props.trigger ? (
    <div className='save-project-popover-parent'>
      <div className='save-project-popover'>
        <h1>Save Your Project</h1>
        <TextField 
          placeholder='Enter your project name...'
          style={{ width: 300 }}
          value={props.projectName}
          onChange={props.useInput}
        />
        <div className='project-save-cancel-buttons'>
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#ed6a5a',
              ':hover': { backgroundColor: '#f1887b' },
            }}
            onClick={() => props.saveProjectFunc()}
          >
            Save
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

export default SaveProject;
