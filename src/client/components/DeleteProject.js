import React from 'react';
import { Button } from '@mui/material';

const DeleteProject = (props) => {

    const deleteProjectFunc = async (id) => {
        const request = await fetch(`/projects/delete/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        const response = await request.json();
        props.setDeletePopup(false);
    }

    console.log('delete proj');
  return props.trigger ? (
    <div className='delete-project-popover-parent'>
      <div className='delete-project-popover'>
        <h3>Are you sure you want to delete this project?</h3>
        <div className='project-delete-cancel-buttons'>
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#ed6a5a',
              ':hover': { backgroundColor: '#f1887b' },
            }}
            onClick={() => {
                console.log('clicked it')
                deleteProjectFunc(props.id)
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
              props.setDeletePopup(false);
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  ) : (
    ' '
  );
};

export default DeleteProject;