import React from 'react';
import { TextField, Button } from '@mui/material';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import SchemaContainer from './SchemaContainer';
import VisualizerContainer from './VisualizerContainer';

const initialData = {
  name: 'Database',
  children: [
    {
      name: 'Table-1',
      children: [
        {
          name: 'Column-1',
        },
        {
          name: 'Column-2',
        },
        {
          name: 'Column-3',
        },
      ],
    },
    {
      name: 'Table-2',
    },
  ],
};

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

const DBInput = () => {
  const [dbLink, dbLinkOnChange] = useInput('');
  const [dbSchemaData, dbSchemaDataOnChange] = useState(
    'Enter a Postgres DB link to generate your schema...'
  );
  const [dataReceived, setDataReceived] = useState(false);
  const [treeData, setTreeData] = useState(initialData);

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
          data.schemaString
        );

        setDataReceived(true);
        setTreeData(data.tree);
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
          <Button
            className='submit-button'
            variant='contained'
            onClick={saveDBLink}
            sx={{
              backgroundColor: '#ed6a5a',
              ':hover': { backgroundColor: '#f1887b' },
            }}
          >
            {' '}
            Submit{' '}
          </Button>
        </form>
      </div>
      <div className='schema-vis-container'>
        <SchemaContainer
          dataReceived={dataReceived}
          dbSchemaData={dbSchemaData}
          dbSchemaDataOnChange={dbSchemaDataOnChange}
        />
        <VisualizerContainer data={treeData}/>
      </div>
    </div>
  );
};

export default DBInput;
