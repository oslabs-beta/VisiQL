import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Login from './components/Login';
import LoginKelly from './components/LoginKelly';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const tokenChecker = async () => {
    try {
      const token = await fetch('/user/checkToken', {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('fetching in tokenChecker');
      const tokenCheck = await token.json();
      console.log('tokenCheck:', tokenCheck);
      if (tokenCheck === 'success') {
        setLoggedIn(true);
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
        <Route path='/' element={<Homepage loggedIn={loggedIn} />} />
        <Route path='/about' element={<About />} />
        <Route
          path='/login'
          element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path='/logink'
          element={<LoginKelly loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
      </Routes>
    </div>
  );
};

export default App;
