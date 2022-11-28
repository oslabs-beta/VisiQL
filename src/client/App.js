import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Login from './components/Login';
import LoginKelly from './components/LoginKelly';
import Resolver from './components/Resolver';
import ProjectsPage from './components/ProjectsPage';

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

  //starting treedata from top
  const [dbSchemaData, dbSchemaDataOnChange] = useState(
    'Enter a Postgres DB link to generate your schema...'
  );
  const [treeData, setTreeData] = useState(initialData);

  const tokenChecker = async () => {
    try {
      const token = await fetch('/user/checkToken', {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('fetching in tokenChecker');
      const tokenCheck = await token.json();
      console.log('tokenCheck:', tokenCheck);
      if (tokenCheck.status === 'success') {
        console.log('tokenCheck.id', tokenCheck.id);
        setLoggedIn(true);
        console.log(tokenCheck.id)
        setCurrentUserId(tokenCheck.id);
        console.log('current id', currentUserId);
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
              treeData={treeData}
              setTreeData={setTreeData}
            />
          }
        />

        <Route path='/about' element={<About />} />
        <Route
          path='/login'
          element={<LoginKelly loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route path='/resolver' element={<Resolver />} />
        <Route path='/myprojects' element={<ProjectsPage id={currentUserId} setTreeData={setTreeData} dbSchemaDataOnChange={dbSchemaDataOnChange}/>} />
      </Routes>
    </div>
  );
};

export default App;
