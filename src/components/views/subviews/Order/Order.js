import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Order.module.scss';

const Order = () => {
  const params = useParams();

  return (
    <div className={styles.component}>
      <h2>Order view</h2>
      <p>
        {params.id === 'new' ? '' : 'Order nr: ' + params.id.substr(1)}
      </p>
    </div>
  );
};

export default Order;
