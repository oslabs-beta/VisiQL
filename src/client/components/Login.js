import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../scss/login.scss';

const Login = () => {
  const [state, setState] = useState({ loginPage: true });
  const { loginPage } = state;
  const navigate = useNavigate();
  const usernameField = useRef(null);
  const passwordField = useRef(null);
  const password2Field = useRef(null);
  const nameField = useRef(null);
  const emailField = useRef(null);

  // changes the boolean value of the variable that the conditional rendering depends on
  const showOtherPage = () => {
    // if text is in input boxes, clear it
    usernameField.current.value = '';
    passwordField.current.value = '';
    if (!loginPage) {
      password2Field.current.value = '';
      nameField.current.value = '';
      emailField.current.value = '';
    }
    setState((prevState) => {
      return {
        ...prevState,
        loginPage: !loginPage,
      };
    });
  };

  const loginUser = async (e) => {
    try {
      // prevents the automatic page refresh
      e.preventDefault();

      const username = usernameField.current.value;
      const password = passwordField.current.value;
      // catch invalid inputs
      if (username === '' || password === '') return;

      const credentialCheck = await fetch('/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      }).then((response) => {
        if (response.status === 200) {
          navigate('/');
        } else alert('Username or password is incorrect.');
        passwordField.current.value = '';
        return;
      });
      //   const parsedCheck = await credentialCheck.json();
      //   console.log('parsedCheck: ', parsedCheck);
      //   // if credentials are correct, redirect to homepage
      //   if (parsedCheck)
      //     // revert password input value to empty string for user to try a different attempt

      //     return;
    } catch (err) {
      console.log('err: ', err);
    }
  };

  // on signup page: as user types into username input field, check if currently typed value is already taken and let user know based on input field background color
  const checkExistence = async (e) => {
    const username = usernameField.current.value;
    const checkExistence = await fetch('/user/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    });
    const parsedCheckExistence = await checkExistence.json();
    const inputColor = document.getElementById('username-input');
    console.log('username: ', username);
    if (parsedCheckExistence === 'exists') {
      inputColor.style.backgroundColor = 'red';
    } else if (username === '') {
      inputColor.style.backgroundColor = 'white';
    } else {
      inputColor.style.backgroundColor = 'green';
    }
    // console.log('checkExistence: ', parsedCheckExistence)
  };

  const signUserUp = async (e) => {
    try {
      e.preventDefault();
      const name = nameField.current.value;
      const email = emailField.current.value;
      const username = usernameField.current.value;
      const password = passwordField.current.value;
      const password2 = password2Field.current.value;
      // catch invalid inputs
      if (
        name === '' ||
        email === '' ||
        username === '' ||
        password === '' ||
        password !== password2
      )
        return;
      // check if username is already taken prior to sign up attempt
      const checkExistence = await fetch('/user/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      });
      const parsedCheckExistence = await checkExistence.json();
      if (parsedCheckExistence === 'exists') {
        alert('Username is already taken.');
        return;
      }

      // create new username account
      const createdUser = await fetch('/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, username, password }),
      });
      const parsedUserInfo = await createdUser.json();
      // if user sign up is successful: alert user and redirect to login screen
      showOtherPage();
      alert('Sign Up Successful!');
      nameField.current.value = '';
      emailField.current.value = '';
      usernameField.current.value = '';
      passwordField.current.value = '';
      password2Field.current.value = '';
    } catch (err) {
      console.log('err: ', err);
    }
  };

  return (
    <>
      {loginPage ? (
        <>
          <header>
            <h1>Log In Here</h1>
          </header>
          <div className='login-page'>
            <main className='login'>
              <form onSubmit={loginUser}>
                <span>Username: </span>
                <input ref={usernameField} type='text' />
                <br />
                <span>Password: </span>
                <input ref={passwordField} type='password' />
                <br />
                <button>Log In</button>
              </form>
              <br />
              <div className='signup-btn'>
                <span>Don't have an account?</span>
                <button onClick={showOtherPage}>Sign Up Here</button>
              </div>
            </main>
          </div>
        </>
      ) : (
        <>
          <header>
            <h1>Sign Up Here</h1>
          </header>
          <main className='signup'>
            <form onSubmit={signUserUp}>
              <span>Name: </span>
              <input ref={nameField} type='text' />
              <br />
              <span>Email: </span>
              <input ref={emailField} type='text' />
              <br />
              <span>Username: </span>
              <input
                ref={usernameField}
                onChange={checkExistence}
                id='username-input'
                type='text'
              />
              <br />
              <span>Password: </span>
              <input ref={passwordField} type='password' />
              <br />
              <span>Confirm Password: </span>
              <input ref={password2Field} type='password' />
              <br />
              <button>Create An Account</button>
            </form>
            <br />
            <button className='login-btn' onClick={showOtherPage}>
              Take Me Back To Login
            </button>
          </main>
        </>
      )}
    </>
  );
};

export default Login;
