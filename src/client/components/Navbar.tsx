import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/VisiQLLogo.png';
import styles from './scss/_index.scss';

const Navbar = () => {
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
            <Button variant='outlined' size='large'>
              Sign Out
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
