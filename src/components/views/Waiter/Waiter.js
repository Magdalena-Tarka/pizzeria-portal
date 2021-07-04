import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Waiter.module.scss';
import { baseURL } from '../../../App';

const Waiter = () => {
  return (
    <div className={styles.component}>
      <h2>Waiter view</h2>
      <Link to={`${baseURL}/waiter/order/:abc123`}>Order details</Link>
      <Link to={`${baseURL}/waiter/order/new`}>New Order</Link>
    </div>
  );
};

export default Waiter;
