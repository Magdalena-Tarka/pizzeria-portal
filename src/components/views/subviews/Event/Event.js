import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Event.module.scss';

const Event = () => {
  const params = useParams();

  return (
    <div className={styles.component}>
      <h2>Event view</h2>
      <p>
        {params.id === 'new' ? '' : 'Event nr: ' + params.id.substr(1)}
      </p>
    </div>
  );
};

export default Event;
