import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Booking.module.scss';

const Booking = () => {
  const params = useParams();

  return (
    <div className={styles.component}>
      <h2>Booking view</h2>
      <p>
        {params.id === 'new' ? '' : 'Reservation nr: ' + params.id.substr(1)}
      </p>
    </div>
  );
};

export default Booking;
