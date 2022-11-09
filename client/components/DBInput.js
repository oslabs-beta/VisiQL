import React from 'react';
import { TextField, Button } from '@mui/material';

const DBInput = () => {
  return (
    <div className='db-input'>
      <form>
        <TextField variant='outlined' />
        <Button variant='contained'> Submit </Button>
      </form>
    </div>
  );
};

export default DBInput;
