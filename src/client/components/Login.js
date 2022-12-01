import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Paper, TextField, InputAdornment, Button, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logo from '../assets/VisiQLLogo.png';
import '../scss/login.scss';




const useInput = (init) => {
  const [value, setValue] = useState(init);
  const reset = () => {
    setValue(init);
  }
  const set = (e) => {
    value,
    console.log(e.target.value);
    setValue(e.target.value);
    
  };

  return [value, set, reset];
};



const Login = (props) => {
  const [state, setState] = useState({ loginPage: true });
  const { loginPage } = state;
  const navigate = useNavigate();
  const [username, setUsername, resetUsername] = useInput('');
  const [password, setPassword, resetPassword] = useInput('');
  const [firstName, setFirstName, resetFirstName] = useInput('');
  const [lastName, setLastName, resetLastName] = useInput('');
  const [email, setEmail, resetEmail] = useInput('');
  const [password2, setPassword2, resetPassword2] = useInput('');
  const [passwordVis, setPasswordVis] = useState(false);
 
  // const checkUserExist = [setUsername, checkExistence];
  // changes the boolean value of the variable that the conditional rendering depends on
 const showOtherPage = () => {
  console.log(!loginPage)
  // if text is in input boxes, clear it
    resetUsername();
    resetPassword();
  if (!loginPage) {
    resetPassword2();
    resetFirstName();
    resetLastName();
    resetEmail();
  }
  setState((prevState) => {
    console.log(loginPage)
    return {
      // ...prevState,
      loginPage: !loginPage,
    };
    
  });
};
 console.log(loginPage)
  const handlePassVis = () => {
    setPasswordVis(!passwordVis)
  };

  const logInUser = async (e) => {
    try {
      // prevents the automatic page refresh
      e.preventDefault();

      console.log(username, password)
      // catch invalid inputs
      if (username === '' || password === '') return;
      
      const credentialCheck = await fetch('/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      }).then((response) => {
        if (response.status === 200) {
          props.setLoggedIn(true);
          props.tokenChecker();
          navigate('/');
        } else alert('Username or password is incorrect.');
        resetUsername();
        resetPassword();
        return;
      });
  
    } catch (err) {
      console.log('err: ', err);
    }
  };



    // on signup page: as user types into username input field, check if currently typed value is already taken and let user know based on input field background color
    // const checkExistence = async (e) => {
    //   //need to possibly pass helper function that calls useInput and then checkExistence for each onChange
  
    //   // const username = usernameField.current.value;
    //   const checkExistence = await fetch('/user/check', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username }),
    //   });
    //   const parsedCheckExistence = await checkExistence.json();
    //   const inputColor = document.getElementById('username-input');
    //   console.log('username: ', username);
    //   if (parsedCheckExistence === 'exists') {
    //     inputColor.style.backgroundColor = 'red';
    //   } else if (username === '') {
    //     inputColor.style.backgroundColor = 'white';
    //   } else {
    //     inputColor.style.backgroundColor = 'green';
    //   }
    //   // console.log('checkExistence: ', parsedCheckExistence)
    // };
  
    const signUserUp = async (e) => {
      try {
        e.preventDefault();
    
        // catch invalid inputs
        if (
          firstName === '' ||
          lastName === '' ||
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
          body: JSON.stringify({ firstName, lastName, email, username, password }),
        });
        const parsedUserInfo = await createdUser.json();
        // if user sign up is successful: alert user and redirect to login screen
        showOtherPage();
        alert('Sign Up Successful!');
        resetFirstName();
        resetLastName();
        resetEmail();
        resetUsername();
        resetPassword();
        resetPassword2();
       
      } catch (err) {
        console.log('err: ', err);
      }
    };

    const guestMode = () => {
      navigate('/');
      return;
    };

  return (
   <>
    {loginPage ? (
     <> 
    <div className='login-body'>
      <header className='login-logo'>
      <img id='login-img' src={logo} width='275px' height='92px' />
       <h2>Welcome Back!</h2>
      </header>
       
       <Container maxWidth='sm'  >
          <Grid 
            container spacing={2}
            direction='column'
            justifyContent='center'
            style={{ minHeight: '60vh'}}
          >
            <Paper elevation={3} sx={{padding: 5}}>
              <Grid container direction='column' spacing={2}>
                <Grid item>
                    <TextField 
                    type='username' 
                    fullWidth 
                    label='Username' 
                    placeholder='Username' 
                    variant='outlined'
                    value={username}
                    onChange={setUsername}
                    ></TextField>
                     </Grid>
                <Grid item>
                    <TextField
                    id='password'
                    type={passwordVis? 'text' : 'password'}
                    fullWidth 
                    label='Password'
                    placeholder='Password'
                    variant='outlined'
                    value={password}
                    onChange={setPassword}
                    // value={...setPassword}
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton onClick={handlePassVis} aria-label='toggle password' edge='end'>
                              {passwordVis? (
                                <VisibilityOffIcon />
                              ) : (
                                <VisibilityIcon />
                              )
                              }    
                            </IconButton>
                          </InputAdornment>
                        ),

                      }}
                    />
                </Grid>
                <Grid item>
                      <Button
                       onClick={logInUser}
                       variant="contained"
                       sx={{
                        backgroundColor: '#5ca4a9',
                        ':hover': { backgroundColor: '#9bc1bc' },
                      }}
                        fullWidth
                       >Login</Button>
                </Grid>
                <h3 className='sign-up-message'>Don't Have an Account Yet?</h3>
                <Grid item>
                      <Button
                      onClick={showOtherPage}
                       variant="contained"
                       sx={{
                        backgroundColor: '#9bc1bc',
                        ':hover': { backgroundColor: '#e6ebe0' },
                      }}
                        fullWidth
                       >Sign Up</Button>
                </Grid>
                <Grid item>
                      <Button
                      onClick={guestMode}
                       variant="contained"
                       sx={{
                        backgroundColor: '#9bc1bc',
                        ':hover': { backgroundColor: '#e6ebe0' },
                      }}
                        fullWidth
                       >Continue As Guest</Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
       </Container>
      
    </div>
  </>
  ) : (
    <>
    <div className='signin-body'>
    <header className='login-logo'>
    <img id='signin-img' src={logo} width='275px' height='92px' marginbottom='1vh'/>
     <h2>Welcome - Let's Get VisiQL!</h2>
    </header>
     
     <Container maxWidth='sm'  >
        <Grid 
          container spacing={2}
          direction='column'
          justifyContent='center'
          style={{ minHeight: '50vh'}}
        >
          <Paper elevation={3} sx={{padding: 5}}>
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <TextField 
                      type='firstName' 
                      fullWidth 
                      label='First Name' 
                      placeholder='First Name' 
                      variant='outlined'
                      value={firstName}
                      onChange={setFirstName}
                  ></TextField>
                   </Grid>
                   <Grid item>
                    <TextField 
                      type='lastName' 
                      fullWidth 
                      label='Last Name' 
                      placeholder='Last Name' 
                      variant='outlined'
                      value={lastName}
                      onChange={setLastName}
                  ></TextField>
                   </Grid>
                <Grid item>
                    <TextField 
                      type='email' 
                      fullWidth 
                      label='Email' 
                      placeholder='Email' 
                      variant='outlined'
                      value={email}
                      onChange={setEmail}
                   ></TextField>
                   </Grid>
                   
              <Grid item>
                  <TextField 
                  type='username' 
                  fullWidth 
                  label='Username' 
                  placeholder='Username' 
                  variant='outlined'
                  value={username}
                  onChange={setUsername}
                  ></TextField>
                   </Grid>
              <Grid item>
                  <TextField
                  id='password'
                  type={passwordVis? 'text' : 'password'}
                  fullWidth 
                  label='Password'
                  placeholder='Password'
                  variant='outlined'
                  value={password}
                  onChange={setPassword}
                  InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton onClick={handlePassVis} aria-label='toggle password' edge='end'>
                            {passwordVis? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )
                            }    
                          </IconButton>
                        </InputAdornment>
                      ),

                    }}
                  />
              </Grid>
              <Grid item>
                  <TextField
                  id='password2'
                  type={passwordVis? 'text' : 'password'}
                  fullWidth 
                  label='Retype Your Password'
                  placeholder='Password2'
                  variant='outlined'
                  value={password2}
                  onChange={setPassword2}
                  InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton onClick={handlePassVis} aria-label='toggle password' edge='end'>
                            {passwordVis? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )
                            }    
                          </IconButton>
                        </InputAdornment>
                      ),

                    }}
                  />
              </Grid>
              <Grid item>
                    <Button
                     onClick={signUserUp}
                     variant="contained"
                     sx={{
                      backgroundColor: '#5ca4a9',
                      ':hover': { backgroundColor: '#9bc1bc' },
                    }}
                      fullWidth
                     >Sign Up</Button>
              </Grid>
              <h3 className='sign-up-message'>Already Have An Account?</h3>
              <Grid item>
                    <Button
                    onClick={showOtherPage}
                     variant="contained"
                     sx={{
                      backgroundColor: '#9bc1bc',
                      ':hover': { backgroundColor: '#e6ebe0' },
                    }}
                      fullWidth
                     >Return to Login</Button>
              </Grid>
              <Grid item>
                      <Button
                      onClick={guestMode}
                       variant="contained"
                       sx={{
                        backgroundColor: '#9bc1bc',
                        ':hover': { backgroundColor: '#e6ebe0' },
                      }}
                        fullWidth
                       >Continue As Guest</Button>
                </Grid>
            </Grid>
          </Paper>
        </Grid>
     </Container>
  </div>
  </>
  )}
  </>
  );
};

export default Login;