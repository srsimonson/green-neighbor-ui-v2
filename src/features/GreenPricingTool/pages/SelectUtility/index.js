import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUtilities } from '../../actions';

const SelectUtility = () => {
  const dispatch = useDispatch();
  const { utilities, error, location } = useSelector((store) => store.GreenPricingTool);
  const { zip } = useParams();

  useEffect(() => {
    if (zip) {
      dispatch(getUtilities(zip));
    }
  }, [zip, dispatch]);

  return (
    <div style={{ background: 'white' }}>
      <code>{JSON.stringify(utilities, undefined, 3)}</code>
      <code>{JSON.stringify(location, undefined, 3)}</code>
    </div>
  );
};

export default SelectUtility;
