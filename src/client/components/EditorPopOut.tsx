import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';
import { IconButton, Tooltip } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

type EditorPopOutProps = {
  dbSchemaData: string;
  dbSchemaDataOnChange: Function;
  resolverData: string;
  setResolverData: Function;
  close: Function;
};

const EditorPopOut = ({
  dbSchemaData,
  dbSchemaDataOnChange, 
  resolverData,
  setResolverData, 
  // close,
}: EditorPopOutProps) => {
  const [currSchIcon, setCurrSchIcon] = useState(
    <ContentCopyIcon sx={{ fontSize: 40 }} />
  );
  const [currResIcon, setCurrResIcon] = useState(
    <ContentCopyIcon sx={{ fontSize: 40 }} />
  );
  const [currTooltip, setCurrTooltip] = useState(<h1>Copy</h1>);
  const resetIcons = () => {
    setCurrTooltip(<h1>Copy</h1>);
    setCurrSchIcon(<ContentCopyIcon sx={{ fontSize: 40 }} />);
    setCurrResIcon(<ContentCopyIcon sx={{ fontSize: 40 }} />);
  };

  function delay(callback: Function, waitTime: number) {
    return function delayedFunction() {
      return setTimeout(callback, waitTime);
    };
  }
  const delayedFunc = delay(() => resetIcons(), 1000);

  const handleClickSch = () => {
    navigator.clipboard.writeText(dbSchemaData);
    setCurrTooltip(<h1>Copied</h1>);
    setCurrSchIcon(<DoneOutlineIcon sx={{ fontSize: 40 }} />);
    delayedFunc();
  };

  const handleClickRes = () => {
    navigator.clipboard.writeText(resolverData);
    setCurrTooltip(<h1>Copied</h1>);
    setCurrResIcon(<DoneOutlineIcon sx={{ fontSize: 40 }} />);
    delayedFunc();
  };

  return(
        <>
        
      <Editor
      className='schema'
        padding='20'
        value={dbSchemaData}
        onValueChange={(code) => dbSchemaDataOnChange(code)}
        highlight={(code) => highlight(code, languages.js)}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 20,
        }} /><Tooltip title={currTooltip} placement='top' arrow>
        <IconButton
          style={{ fontSize: 100, backgroundColor: 'rgb(127, 127, 127)' }}
          onClick={handleClickSch}
        >
          {currSchIcon}
        </IconButton>
      </Tooltip>
        <Editor
        className='resolver'
          padding='20'
          value={resolverData}
          onValueChange={(code) => setResolverData(code)}
          highlight={(code) => highlight(code, languages.js)}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 20,
          }} />
      <Tooltip title={currTooltip} placement='top' arrow>
        <IconButton
          style={{ fontSize: 100, backgroundColor: 'rgb(127, 127, 127)' }}
          onClick={handleClickRes}
        >
          {currResIcon}
        </IconButton>
      </Tooltip>
     
      </>
  )
};

export default EditorPopOut;