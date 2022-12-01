import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Login from './components/Login';
import Resolver from './components/Resolver';
import ProjectsPage from './components/ProjectsPage';
import GraphiQLPlayground from './components/GraphiQLPlayground';

const App = () => {
  const initialData = {
    name: 'Database',
    children: [
      {
        name: 'Table-1',
        children: [
          {
            name: 'Column-1',
          },
          {
            name: 'Column-2',
          },
          {
            name: 'Column-3',
          },
        ],
      },
      {
        name: 'Table-2',
      },
    ],
  };
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(''); //should we set this to null to by typesafe?
  const [notSignedInPop, setNotSignedInPop] = useState(false);

  //starting treedata from top
  const [dbSchemaData, dbSchemaDataOnChange] = useState(
    'Enter a Postgres DB link to generate your schema...'
  );
  const [treeData, setTreeData] = useState(initialData);

  const [resolverData, setResolverData] = useState(
    'Enter a Postgres DB link to generate your resolvers...'
  );

  const tokenChecker = async () => {
    try {
      const token = await fetch('/user/checkToken', {
        headers: { 'Content-Type': 'application/json' },
      });

      const tokenCheck = await token.json();

      if (tokenCheck.status === 'success') {
        setLoggedIn(true);
        setCurrentUserId(tokenCheck.id);
      } else {
        setLoggedIn(false);
      }
    } catch (err) {
      console.log('error');
    }
  };
  tokenChecker();

  return (
    <div className='router'>
      <Routes>
        <Route
          path='/'
          element={
            <Homepage
              loggedIn={loggedIn}
              setCurrentUserId={setCurrentUserId}
              currentUserId={currentUserId}
              dbSchemaData={dbSchemaData}
              dbSchemaDataOnChange={dbSchemaDataOnChange}
              resolverData={resolverData}
              setResolverData={setResolverData}
              treeData={treeData}
              setTreeData={setTreeData}
              notSignedInPop={notSignedInPop}
              setNotSignedInPop={setNotSignedInPop}
            />
          }
        />

        <Route
          path='/about'
          element={
            <About
              loggedIn={loggedIn}
              setCurrentUserId={setCurrentUserId}
              notSignedInPop={notSignedInPop}
              setNotSignedInPop={setNotSignedInPop}
            />
          }
        />
        <Route
          path='/login'
          element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route path='/resolver' element={<Resolver />} />
        <Route
          path='/myprojects'
          element={
            <ProjectsPage
              id={currentUserId}
              setTreeData={setTreeData}
              dbSchemaDataOnChange={dbSchemaDataOnChange}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              resolverData={resolverData}
              dbSchemaData={dbSchemaData}
            />
          }
        />
        <Route
          path='/gqlplayground'
          element={
            <GraphiQLPlayground
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              resolverData={resolverData}
              dbSchemaData={dbSchemaData}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
