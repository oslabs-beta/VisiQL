import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const UpdateProject = (props) => {
    const [newName, setNewName] = useState(props.projectName)
    const updateProjName = e => {
        setNewName(e.target.value)
    };
    //const placeholderString = `current name: ${props.projectName}`
  return props.trigger ? (
    <div className='save-project-popover-parent'>
      <div className='save-project-popover'>
        <h1>Update Project</h1>
        <TextField 
          placeholder='(optional) enter new name'
          style={{ width: 300 }}
          onChange={updateProjName} 
        />
        <div className='project-save-cancel-buttons'>
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#ed6a5a',
              ':hover': { backgroundColor: '#f1887b' },
            }}
            onClick={() => props.updateProjectFunc(newName)}
          >
            Update
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

export default UpdateProject;