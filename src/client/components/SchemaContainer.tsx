import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-okaidia.css';
import { IconButton, Tooltip, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EditorPopOutHandler from './EditorPopOutHandler';



type SchemaContainerProps = {
  dbSchemaData: string;
  dbSchemaDataOnChange: Function;
  resolverData: string;
  setResolverData: Function;
  showTree: boolean;
  setShowTree: Function;
};



const SchemaContainer = ({
  dbSchemaData,
  dbSchemaDataOnChange,
  resolverData,
  setResolverData,
  setShowTree
}: SchemaContainerProps) => {
  const [currIcon, setCurrIcon] = useState(
    <ContentCopyIcon sx={{ fontSize: 40 }} />
  );
  const [currTooltip, setCurrTooltip] = useState(<h1>Copy</h1>);

  // const [currClick, setCurrClick] = useState(false);
//handle state of current tab
  const [tab, setTab] = useState('1');
  const [editorExpand, setEditorExpand] = useState(false);
  

  const changeDisplay = () => { 
    setEditorExpand(true);
    setShowTree(false);
  }

//handle changing of tabs
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const resetIcons = () => {
    setCurrTooltip(<h1>Copy</h1>);
    setCurrIcon(<ContentCopyIcon sx={{ fontSize: 40 }} />);
  };

  function delay(callback: Function, waitTime: number) {
    return function delayedFunction() {
      return setTimeout(callback, waitTime);
    };
  }
  const delayedFunc = delay(() => resetIcons(), 3000);

  const handleClick = () => {
   
    if(tab === '1') navigator.clipboard.writeText(dbSchemaData);
    else navigator.clipboard.writeText(resolverData);
    setCurrTooltip(<h1>Copied</h1>);
    setCurrIcon(<DoneOutlineIcon sx={{ fontSize: 40 }} />);
    delayedFunc();
  };

  return (
    <div>
      <TabContext value={tab} >
        <TabList className='tab-list' aria-label='Tabs' onChange={handleChange} centered >
          <Tab className='tab' label='Schema' value='1' sx={{color: '#ed6a5a', '& .MuiTabs-indicator': {bgcolor: '#5ca4a9'}, '& .Mui-selected': {color: '#5ca4a9', 

          },}}/>
          <Tab className='tab'label='Resolvers' value='2'sx={{color: '#ed6a5a'}}/>
        </TabList>
        <TabPanel value='1' sx={{paddingTop: '0'}}>
        <div className='schema-editor-container'>
        <Editor
          padding='20'
          value={dbSchemaData}
          onValueChange={(code) => dbSchemaDataOnChange(code)}
          highlight={(code) => highlight(code, languages.js)}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 20,
          }}
        />
      </div>
      <Tooltip title={currTooltip} placement='top' arrow>
        <IconButton
          className='copy-button'
          style={{ fontSize: 100, backgroundColor: 'rgb(127, 127, 127)' }}
          onClick={handleClick}
        >
          {currIcon}
        </IconButton>
      </Tooltip>
      <Tooltip title={<h1>Open in New Window</h1>} placement='top' arrow>
        <IconButton
          className='expand-button'
          onClick={changeDisplay}
        >
          {<OpenInNewIcon style={{ fontSize: 45 }} />}
        </IconButton>
      </Tooltip>
      <EditorPopOutHandler
        dbSchemaData={dbSchemaData}
        resolverData={resolverData}
        close={setEditorExpand}
        trigger={editorExpand}
        dbSchemaDataOnChange={dbSchemaDataOnChange}
        setResolverData={setResolverData}
        setShowTree={setShowTree}
      />
      
        </TabPanel>
        <TabPanel value='2' sx={{paddingTop: '0'}}>
        <div className='schema-editor-container'>
        <Editor
          padding='20'
          value={resolverData}
          onValueChange={(code) => setResolverData(code)}
          highlight={(code) => highlight(code, languages.js)}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 20,
          }}
        />
      </div>
      <Tooltip title={currTooltip} placement='top' arrow>
        <IconButton
          className='copy-button'
          style={{ fontSize: 100, backgroundColor: 'rgb(127, 127, 127)' }}
          onClick={handleClick}
        >
          {currIcon}
        </IconButton>
      </Tooltip>
      <Tooltip title={<h1>Open in New Window</h1>} placement='top' arrow>
        <IconButton
          className='expand-button'
          onClick={changeDisplay}
        >
          {<OpenInNewIcon style={{ fontSize: 50 }} />}
        </IconButton>
      </Tooltip>
      <EditorPopOutHandler
        dbSchemaData={dbSchemaData}
        resolverData={resolverData}
        close={setEditorExpand}
        trigger={editorExpand}
        dbSchemaDataOnChange={dbSchemaDataOnChange}
        setResolverData={setResolverData}
        setShowTree={setShowTree}
      />
        </TabPanel>
     
      </TabContext>
      
    </div>
  );
};

export default SchemaContainer;