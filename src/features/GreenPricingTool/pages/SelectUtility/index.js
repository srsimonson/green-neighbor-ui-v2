import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import HomeButton from 'src/components/HomeButton';
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
      <HomeButton />
      <div className={styles.titleBox}>
        <p className={styles.smallTitle}>Showing results for</p>
        <h1 className={styles.largeTitle}>{ location || zip }</h1>
        <p className={styles.smallTitle}>
          {`We found ${utilities.length} ${utilities.length === 1 ? 'company' : 'companies'} `}
          {`and ${programCount} energy ${programCount === 1 ? 'program' : 'programs'}.`}
        </p>
      </div>
    </div>
  );
};

export default SelectUtility;
