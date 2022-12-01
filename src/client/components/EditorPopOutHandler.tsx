import React from 'react';
import { Button } from '@mui/material';
import EditorPopOut from './EditorPopOut';

type EditorPopOutHandlerProps = {
  close: Function;
  dbSchemaData: string;
  resolverData: string;
  trigger: boolean;
  dbSchemaDataOnChange: Function;
  setResolverData: Function;
  setShowTree: Function;
}

const EditorPopOutHandler = ({
  close,
  dbSchemaData,
  resolverData,
  dbSchemaDataOnChange,
  setResolverData,
  trigger,
  setShowTree, }: EditorPopOutHandlerProps) => {

  const handleClick = () => {
    close(false);
    setShowTree(true);
  }
  return trigger ? (
    <div className='editor-pop-out'>
    <div className='combined-editor-container'>
      
          <Button
            sx={{
              backgroundColor: '#ed6a5a',
              ':hover': { backgroundColor: '#f1887b' },
            }}
            variant='contained'
            className='editor-pop-out-close'
            onClick={handleClick}
            // onClick={() => {
            //   close(false);
            // }}
          >
            Close
          </Button>
          <EditorPopOut  dbSchemaData={dbSchemaData}
          resolverData={resolverData} dbSchemaDataOnChange={dbSchemaDataOnChange} setResolverData={setResolverData} close={close}/>
        
      </div>
    </div>
  ) : (
    null
  );
};

export default EditorPopOutHandler;