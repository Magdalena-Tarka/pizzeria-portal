import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.scss';
import { baseURL } from '../../../App';

const PageNav = () => {
  return (
    <div className={styles.component}>
      <nav>
        <NavLink exact to={`${baseURL}/`} activeClassName='active'>Home</NavLink>
        <NavLink to={`${baseURL}/login`} activeClassName='active'>Login</NavLink>
        <NavLink to={`${baseURL}/tables`} activeClassName='active'>Tables</NavLink>
        <NavLink to={`${baseURL}/waiter`} activeClassName='active'>Waiter</NavLink>
        <NavLink to={`${baseURL}/kitchen`} activeClassName='active'>Kitchen</NavLink>
      </nav>
    </div>
  );
};

export default PageNav;
