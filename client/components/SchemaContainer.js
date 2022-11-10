import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';
import { Box } from '@mui/system';
import { Button, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const SchemaContainer = (props) => {
  return (
    <div>
      <Box className='editor-container'>
        <Editor
          padding='20'
          className='schema-editor'
          value={props.dbSchemaData}
          onValueChange={(code) => props.dbSchemaDataOnChange(code)}
          highlight={(code) => highlight(code, languages.js)}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 40,
          }}
        />
        <IconButton
          className='copy-button'
          style={{ fontSize: 100 }}
          size='inherit'
          variant='contained'
          onClick={() => {
            navigator.clipboard.writeText(props.dbSchemaData);
          }}
        >
          <ContentCopyIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    </div>
  );
};

export default SchemaContainer;
