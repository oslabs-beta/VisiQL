// import React, { useState } from 'react';
// import Editor from 'react-simple-code-editor';
// import { highlight, languages } from 'prismjs/components/prism-core';
// import 'prismjs/components/prism-clike';
// import 'prismjs/components/prism-javascript';
// import 'prismjs/themes/prism-okaidia.css';
// import { Box } from '@mui/system';
// import { Button, IconButton, Tooltip, Typography } from '@mui/material';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

// type SchemaContainerProps = {
//   dbSchemaData: string;
//   dbSchemaDataOnChange: Function;
// };

// const SchemaContainer = ({
//   dbSchemaData,
//   dbSchemaDataOnChange,
// }: SchemaContainerProps) => {
//   const [currIcon, setCurrIcon] = useState(
//     <ContentCopyIcon sx={{ fontSize: 40 }} />
//   );
//   const [currTooltip, setCurrTooltip] = useState(<h1>Copy</h1>);

//   const [currClick, setCurrClick] = useState(false);

//   const resetIcons = () => {
//     setCurrTooltip(<h1>Copy</h1>);
//     setCurrIcon(<ContentCopyIcon sx={{ fontSize: 40 }} />);
//   };

//   function delay(callback: Function, waitTime: number) {
//     return function delayedFunction() {
//       return setTimeout(callback, waitTime);
//     };
//   }
//   const delayedFunc = delay(() => resetIcons(), 3000);

//   const handleClick = () => {
//     navigator.clipboard.writeText(dbSchemaData);
//     setCurrTooltip(<h1>Copied</h1>);
//     setCurrIcon(<DoneOutlineIcon sx={{ fontSize: 40 }} />);
//     delayedFunc();
//   };

//   return (
//     <div>
//       <div className='schema-editor-container'>
//         <Editor
//           padding='20'
//           value={dbSchemaData}
//           onValueChange={(code) => dbSchemaDataOnChange(code)}
//           highlight={(code) => highlight(code, languages.js)}
//           style={{
//             fontFamily: '"Fira code", "Fira Mono", monospace',
//             fontSize: 20,
//           }}
//         />
//       </div>
//       <Tooltip title={currTooltip} placement='top' arrow>
//         <IconButton
//           className='copy-button'
//           style={{ fontSize: 100, backgroundColor: 'rgb(127, 127, 127)' }}
//           onClick={handleClick}
//         >
//           {currIcon}
//         </IconButton>
//       </Tooltip>
//     </div>
//   );
// };

// export default SchemaContainer;
