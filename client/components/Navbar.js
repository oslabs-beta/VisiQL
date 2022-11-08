import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/VisiQLLogo.png';
import styles from '../scss/_index.scss';

const Navbar = () => {
  return (
    <div id='navbar'>
      <header>
        <img id='logo' src={logo} width='275px' height='92px' />
        <nav id='navMenu'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
