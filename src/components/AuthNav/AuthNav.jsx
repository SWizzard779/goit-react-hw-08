import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css'

const AuthNav = () => {
  return (
    <div className={styles.auth}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default AuthNav;
