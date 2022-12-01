import React from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
//@ts-ignore
import DBInput from './DBInput';
//@ts-ignore
import NotSignedIn from './NotSignedIn';
import ProjectSide from './ProjectSide';

type HomepageProps = {
  loggedIn: Boolean;
  setCurrentUserId: Function;
  currentUserId: Number;
  dbSchemaData: String;
  dbSchemaDataOnChange: Function;
  treeData: Object;
  setTreeData: Function;
  resolverData: String;
  setResolverData: Function;
  showTree: boolean;
  setShowTree: Function;
  notSignedInPop: Boolean;
  setNotSignedInPop: Function;
};

const Homepage = ({
  loggedIn,
  setCurrentUserId,
  currentUserId,
  dbSchemaData,
  dbSchemaDataOnChange,
  treeData,
  setTreeData,
  resolverData,
  setResolverData,
  showTree,
  setShowTree,
  notSignedInPop,
  setNotSignedInPop,
}: HomepageProps) => {
  return (
    <div id='homepage-container'>
      <Navbar
        loggedIn={loggedIn}
        setCurrentUserId={setCurrentUserId}
        notSignedInPop={notSignedInPop}
        setNotSignedInPop={setNotSignedInPop}
      />
      <DBInput currentUserId={currentUserId} dbSchemaData={dbSchemaData} dbSchemaDataOnChange={dbSchemaDataOnChange} treeData={treeData} setTreeData={setTreeData} resolverData={resolverData} setResolverData={setResolverData} showTree={showTree} setShowTree={setShowTree}/>
      <NotSignedIn trigger={notSignedInPop} close={setNotSignedInPop} />
      {/* <ProjectSide /> */}
    </div>
  );
};

export default Homepage;
