import React from 'react';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

const DBInput = () => {
  const [dbLink, dbLinkOnChange] = useInput('');
  const saveDBLink = (event) => {
    const body = { dbLink };
    fetch('/db', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log('dbLink fetch /db: ERROR: ', err));
  };
  return (
    <div className='db-input'>
      <form className='db-input'>
        <TextField
          className='db-textfield'
          placeholder='Enter a Postgres DB link...'
          style={{ width: 900 }}
          inputProps={{ style: { fontSize: 30 } }}
          variant='outlined'
          value={dbLink}
          onChange={dbLinkOnChange}
        />
        <Button variant='contained' onClick={saveDBLink}>
          {' '}
          Submit{' '}
        </Button>
      </form>
    </div>
  );
};

export default DBInput;