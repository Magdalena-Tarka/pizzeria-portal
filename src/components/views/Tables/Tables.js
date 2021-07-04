import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';
import { baseURL } from '../../../App';

const Tables = () => {
  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Link to={`${baseURL}/tables/booking/:abc123`}>Reservation details</Link>
      <Link to={`${baseURL}/tables/booking/new`}>New Reservation</Link><br />
      <Link to={`${baseURL}/tables/event/:def456`}>Event details</Link>
      <Link to={`${baseURL}/tables/event/new`}>New Event</Link>
    </div>
  );
};

export default Tables;
