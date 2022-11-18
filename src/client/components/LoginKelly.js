import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Paper, TextField, InputAdornment, Button, Input, IconButton, imageListItemBarClasses } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logo from '../assets/VisiQLLogo.png';
import '../scss/loginkelly.scss';



const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return [value, onChange];
};

const LoginKelly = (props) => {
  const navigate = useNavigate();
  const [username, setUserName] = useInput('');
  const [password, setPassword] = useInput('');
  const [passwordVis, setPasswordVis] = useState(false)
  // const [values, setValues] = useState({
  //   username: '',
  //   password: '',
  //   showPassword: false
  // });

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

  return (
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
  
  )
};

export default LoginKelly;