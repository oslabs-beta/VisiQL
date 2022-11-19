import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Paper, TextField, InputAdornment, Button, Input, IconButton, imageListItemBarClasses } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logo from '../assets/VisiQLLogo.png';
import '../scss/loginkelly.scss';



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

const LoginKelly = (props) => {
  const [state, setState] = useState({ loginPage: true });
  const { loginPage } = state;
  const navigate = useNavigate();
  const [username, setUserName, resetUserName] = useInput('');
  const [password, setPassword, resetPassword] = useInput('');
  const [name, setName, resetName] = useInput('');
  const [email, setEmail, resetEmail] = useInput('');
  const [password2, setPassword2, resetPassword2] = useInput('');
  const [passwordVis, setPasswordVis] = useState(false)

  // changes the boolean value of the variable that the conditional rendering depends on
 const showOtherPage = () => {
  console.log(!loginPage)
  // if text is in input boxes, clear it
    resetUserName();
    resetPassword();
  if (!loginPage) {
    resetPassword2();
    resetName();
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
          navigate('/');
        } else alert('Username or password is incorrect.');
        // passwordField.current.value = '';
       resetUserName();
       resetPassword();
        return;
      });
  
    } catch (err) {
      console.log('err: ', err);
    }
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
                    onChange={setUserName}
                    // value={...setUserName}
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
    <img id='signin-img' src={logo} width='275px' height='92px' marginBottom='1vh'/>
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
                  type='name' 
                  fullWidth 
                  label='Name' 
                  placeholder='Name' 
                  variant='outlined'
                  value={name}
                  onChange={setName}
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
                  onChange={setUserName}
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
                  id='password'
                  type={passwordVis? 'text' : 'password'}
                  fullWidth 
                  label='Retype Your Password'
                  placeholder='Password2'
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
                    <Button
                     onClick={logInUser}
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

export default LoginKelly;