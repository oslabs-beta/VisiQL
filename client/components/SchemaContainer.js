import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const SchemaContainer = (props) => {
  return (
    <div>
      <Box>
        <Editor
          className='schema-editor'
          value={props.dbSchemaData}
          // onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.js)}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 40,
          }}
        />
        <Button
          variant='contained'
          onClick={() => {
            navigator.clipboard.writeText(props.dbSchemaData);
          }}
        >
          Copy
        </Button>
      </Box>
    </div>
  );
};

export default SchemaContainer;
