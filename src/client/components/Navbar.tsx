import { Button } from '@mui/material';
import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../assets/VisiQLLogo.png';
import styles from './scss/_index.scss';

type NavbarProps = {
  isLoggedIn: Boolean;
  setCurrentUserId: Function;
};

const Navbar = ({ isLoggedIn, setCurrentUserId }: NavbarProps) => {
  const navigate = useNavigate();

  const signOut = async () => {
    try {
      setCurrentUserId('');
      document.cookie =
        'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      navigate('/logink');
    } catch (err) {
      console.log('error');
    }
  };
  const signInOut = () => {
    if (!isLoggedIn) {
      return <Link to='/logink'>Sign In</Link>;
    } else {
      return (
        <Link to='/logink' onClick={signOut}>
          Sign Out
        </Link>
      );
    }
  };
  return (
    <div id='navbar'>
      <img id='logo' src={logo} width='275px' height='92px' />
      <nav id='nav-menu'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/myprojects'>Projects</Link>
          </li>
          <li>
            <Button variant='outlined' size='large'>
              {signInOut()}
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
