import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProjectUpdated = (props) => {
  const navigate = useNavigate();
  return props.trigger ? (
    <div className='save-project-popover-parent'>
      <div className='save-project-popover'>
        <h2>Project Updated!</h2>
        <Button
          variant='contained'
          sx={{
            backgroundColor: '#ed6a5a',
            ':hover': { backgroundColor: '#f1887b' },
          }}
          onClick={() => navigate('/myprojects')}
        >
          View Your Saved Projects
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
          Back to Current Project
        </Button>
      </div>
    </div>
  ) : (
    null
  );
};

export default ProjectUpdated;