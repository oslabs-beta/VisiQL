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
  setLoggedIn: Function;
  setCurrentUserId: Function;
  currentUserId: Number;
  dbSchemaData: String;
  dbSchemaDataOnChange: Function;
  treeData: Object;
  setTreeData: Function;
  resolverData: String;
  setResolverData: Function;
  notSignedInPop: Boolean;
  setNotSignedInPop: Function;
};

const Homepage = ({
  loggedIn,
  setLoggedIn,
  currentUserId,
  dbSchemaData,
  dbSchemaDataOnChange,
  treeData,
  setTreeData,
  resolverData,
  setResolverData,
  notSignedInPop,
  setNotSignedInPop,
}: HomepageProps) => {
  return (
    <div id='homepage-container'>
      <DBInput
        currentUserId={currentUserId}
        dbSchemaData={dbSchemaData}
        dbSchemaDataOnChange={dbSchemaDataOnChange}
        treeData={treeData}
        setTreeData={setTreeData}
        resolverData={resolverData}
        setResolverData={setResolverData}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        notSignedInPop={notSignedInPop}
        setNotSignedInPop={setNotSignedInPop}
      />
      <NotSignedIn trigger={notSignedInPop} close={setNotSignedInPop} />
    </div>
  );
};

export default Homepage;
