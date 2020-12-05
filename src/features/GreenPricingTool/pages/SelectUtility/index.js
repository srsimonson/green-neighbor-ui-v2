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

  return <code style={{ color: 'white' }}>{JSON.stringify(utilities, undefined, 2)}</code>;
};

export default SelectUtility;
