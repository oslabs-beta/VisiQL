import { Button } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/VisiQLLogo.png';
import styles from './scss/_index.scss';

const ProjectsPage = require('./ProjectsPage');

type NavbarProps = {
  loggedIn: Boolean;
  setCurrentUserId: Function;
  notSignedInPop: Boolean;
  setNotSignedInPop: Function;
  dbSchemaDataOnChange: Function;
  setTreeData: Function;
  blankTree: Object;
  setResolverData: Function;
};

const Navbar = ({
  loggedIn,
  setCurrentUserId,
  setNotSignedInPop,
  dbSchemaDataOnChange,
  setTreeData,
  blankTree,
  setResolverData,
}: NavbarProps) => {
  const navigate = useNavigate();
  const thisOrThat = () => {
    if (loggedIn) {
      return <Link to='/myprojects'>Projects</Link>;
    } else {
      return (
        <Link onClick={() => setNotSignedInPop(true)} to='/'>
          Projects
        </Link>
      );
    }
  };

  const signOut = async () => {
    try {
      setCurrentUserId('');
      document.cookie =
        'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      setResolverData('Enter a Postgres DB link to generate your resolvers...');
      dbSchemaDataOnChange(
        'Enter a Postgres DB lin to generate your schema...'
      );
      setTreeData(blankTree);
      navigate('/login');
      return;
    } catch (err) {
      console.log('error');
    }
  };
  const signInOut = () => {
    if (!loggedIn) {
      return <Link to='/login'>Sign In</Link>;
    } else {
      return (
        <Link to='/login' onClick={signOut}>
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
            <Link to='/gqlplayground'>GraphiQL Playground</Link>
          </li>
          <li>{thisOrThat()}</li>
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
