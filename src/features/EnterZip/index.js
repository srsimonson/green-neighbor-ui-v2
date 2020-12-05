import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.module.scss';

const EnterZip = () => {
  const history = useHistory();
  const [zip, setZip] = useState('');

  const onZipSubmit = () => {
    if (zip && zip.length) {
      history.push(`/SelectUtility/${zip}`);
    }
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      onZipSubmit();
    }
  };

  return (
    <div className={styles.spacingBox}>
      <div className={styles.container}>
        <div className={styles.zipBox}>
          <h1>The Green Neighbor Challenge</h1>
          <h2>Find green energy near your.</h2>
          <label htmlFor="zip-input">
            Enter your zip code to get started
          </label>
          <input
            type="number"
            id="zip-input"
            value={zip}
            onKeyPress={onKeyPress}
            onChange={(e) => setZip(e.target.value)}
          />
          <button
            type="submit"
            className="button-wire"
            onClick={() => onZipSubmit(zip)}
          >
            Go
          </button>
        </div>
        <div className={styles.linksBox}>
          <button
            type="button"
            className="button-default"
            onClick={() => history.push('/about')}
          >
            Learn who we are
          </button>
          <button
            type="button"
            className="button-default"
            onClick={() => history.push('/contribute')}
          >
            How you can help
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterZip;
