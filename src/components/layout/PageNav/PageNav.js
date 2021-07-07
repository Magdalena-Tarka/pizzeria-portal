import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.scss';
import { baseURL } from '../../../App';
import Button from '@material-ui/core/Button';

const PageNav = () => {
  return (
    <nav className={styles.component}>
      <Button className={styles.link} component={NavLink} exact to={`${baseURL}/`} activeClassName='active'>Home</Button>
      <Button className={styles.link} component={NavLink} to={`${baseURL}/login`} activeClassName='active'>Login</Button>
      <Button className={styles.link} component={NavLink} to={`${baseURL}/tables`} activeClassName='active'>Tables</Button>
      <Button className={styles.link} component={NavLink} to={`${baseURL}/waiter`} activeClassName='active'>Waiter</Button>
      <Button className={styles.link} component={NavLink} to={`${baseURL}/kitchen`} activeClassName='active'>Kitchen</Button>
    </nav>
  );
};

export default PageNav;
