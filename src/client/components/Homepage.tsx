import React from 'react';
//@ts-ignore
import DBInput from './DBInput';
//@ts-ignore
import NotSignedIn from './NotSignedIn';


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
  projectId: Number;
  setProjectId: Function;
  projectName: String;
  setProjectName: Function;
  notSignedInPop: Boolean;
  setNotSignedInPop: Function;
  showTree: boolean;
  setShowTree: Function;
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
  projectId,
  setProjectId,
  projectName,
  setProjectName,
  notSignedInPop,
  setNotSignedInPop,
  showTree,
  setShowTree,
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
        projectId={projectId}
        setProjectId={setProjectId}
        projectName={projectName}
        setProjectName={setProjectName}
        showTree={showTree}
        setShowTree={setShowTree}
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
