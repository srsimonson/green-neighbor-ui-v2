import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getLocation, getUtilities } from '../../actions';
import styles from './index.module.scss';

const SelectUtility = () => {
  const dispatch = useDispatch();
  const { utilities, location } = useSelector((store) => store.GreenPricingTool);
  const { zip } = useParams();
  // Sum of all programs in all utilites
  const programCount = utilities.reduce((acc, ut) => acc + ut.programs.length, 0);

  useEffect(() => {
    if (zip) {
      dispatch(getUtilities(zip));
      dispatch(getLocation(zip));
    }
  }, [zip, dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <p>Showing results for</p>
        <h1>{ location || zip }</h1>
        <p>
          {`We found ${utilities.length} ${utilities.length === 1 ? 'company' : 'companies'} `}
          {`and ${programCount} energy ${programCount === 1 ? 'program' : 'programs'}.`}
        </p>
      </div>
    </div>
  );
};

export default SelectUtility;
