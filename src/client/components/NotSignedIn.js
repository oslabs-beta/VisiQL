import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotSignedIn = (props) => {
  const navigate = useNavigate();
  return props.trigger ? (
    <div className='save-project-popover-parent'>
      <div className='save-project-popover'>
        <h1>Please Sign In Or Sign Up To View Your Saved Projects</h1>
        <Button
          variant='contained'
          sx={{
            backgroundColor: '#ed6a5a',
            ':hover': { backgroundColor: '#f1887b' },
          }}
          onClick={() => navigate('/login')}
        >
          Sign In or Sign Up
        </Button>
        <Button
          sx={{
            backgroundColor: '#ed6a5a',
            ':hover': { backgroundColor: '#f1887b' },
          }}
          variant='contained'
          onClick={() => props.close(false)}
        >
          Continue as Guest Without Saving{' '}
        </Button>
      </div>
    </div>
  ) : (
    null
  );
};

export default NotSignedIn;
