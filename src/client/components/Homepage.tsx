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
  blankTree: Object;
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
  blankTree
}: HomepageProps) => {
  const [notSignedInPop, setNotSignedInPop] = useState(false);
  return (
    <div id='homepage-container'>
      <Navbar
        isLoggedIn={loggedIn}
        setCurrentUserId={setCurrentUserId}
        notSignedInPop={notSignedInPop}
        setNotSignedInPop={setNotSignedInPop}
        setTreeData={setTreeData}
        dbSchemaDataOnChange={dbSchemaDataOnChange}
        setResolverData={setResolverData}
        blankTree={blankTree}
      />
      <DBInput currentUserId={currentUserId} dbSchemaData={dbSchemaData} dbSchemaDataOnChange={dbSchemaDataOnChange} treeData={treeData} setTreeData={setTreeData} resolverData={resolverData} setResolverData={setResolverData} />
      <NotSignedIn trigger={notSignedInPop} close={setNotSignedInPop} />
      {/* <ProjectSide /> */}
    </div>
  );
};

export default Homepage;
