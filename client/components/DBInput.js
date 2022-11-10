import React from 'react';
import { TextField, Button } from '@mui/material';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import SchemaContainer from './SchemaContainer';

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

const DBInput = () => {
  const [dbLink, dbLinkOnChange] = useInput('');
  const [dbSchemaData, dbSchemaDataOnChange] = useState('placeholderObj');
  const [dataReceived, setDataReceived] = useState(false);

  const saveDBLink = (event) => {
    const body = { dbLink };
    fetch('/db', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        dbSchemaDataOnChange(
          JSON.stringify(data.dbSchema.tables).replaceAll('"', ' ')
        );

        setDataReceived(true);
        console.log(dbSchemaData);
      })
      .catch((err) => console.log('dbLink fetch /db: ERROR:', err));
  };
  return (
    <div className='input-and-visualizer'>
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
      <div>
        <SchemaContainer
          dataReceived={dataReceived}
          dbSchemaData={dbSchemaData}
        />
      </div>
    </div>
  );
};

export default DBInput;
