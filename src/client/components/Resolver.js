import React, { useEffect, useState, useRef } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';
import { Box } from '@mui/system';
import { Button, IconButton, Tooltip, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';


const Resolver = (props) => {
  const [show, changeShow] = useState('');

  useEffect(() => {
    const update = async () => {
      const resolverString = await fetch('/db/resolver', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dbLink: 'postgres://nfvukbtr:d7AGqY2wq7gu0Y58CNUcHjK1oXC9aHov@peanut.db.elephantsql.com/nfvukbtr' }),
      });
      const parsedResolverString = await resolverString.json();
      console.log('parsedResolverString: ', parsedResolverString);
      changeShow(parsedResolverString);
    }
    update();
  }, [])

  // return (
  //   <>
  //     <textarea style={{height: '100%', width: '100%'}} value={show}></textarea>
  //   </>
  // )


  return (
    <div>
      <div className='schema-editor-container2'>
        <Editor
          padding='20'
          value={show}
          //this is for custom edits within the editor
          // onValueChange={(code) => dbSchemaDataOnChange(code)}
          highlight={(code) => highlight(code, languages.js)}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 20,
          }}
        />
      </div>
    </div>
  );
}

export default Resolver;