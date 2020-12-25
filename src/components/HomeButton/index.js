import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.scss';

export default () => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <FontAwesomeIcon
        icon={faHome}
        onClick={() => history.push('/')}
        role="link"
        aria-label="Home"
        className={styles.icon}
      />
      <p className={styles.title}>The Green Neighbor Challenge</p>
    </div>
  );
};
