import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProjectDeleted = (props) => {
  const navigate = useNavigate();
  return props.trigger ? (
    <div className='save-project-popover-parent'>
      <div className='save-project-popover'>
        <h2>Project Deleted</h2>
        <Button
          variant='contained'
          sx={{
            backgroundColor: '#ed6a5a',
            ':hover': { backgroundColor: '#f1887b' },
          }}
          onClick={() => {
            props.close(false);
            props.setGetData(true);
        }}
        >
          Back to Projects
        </Button>
        <Button
          sx={{
            backgroundColor: '#ed6a5a',
            ':hover': { backgroundColor: '#f1887b' },
          }}
          variant='contained'
          onClick={() => {
            props.close(false);
            navigate('/');
          }}
        >
          Home
        </Button>
      </div>
    </div>
  ) : (
    null
  );
};

export default ProjectDeleted;