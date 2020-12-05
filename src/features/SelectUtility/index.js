import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUtilities } from './actions';

const SelectUtility = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const reduxState = useSelector((store) => store);
  console.log(reduxState);
  const { zip } = useParams();

  useEffect(() => {
    if (zip) {
      dispatch(getUtilities(zip));
    }
  }, [zip, dispatch]);

  return <div>{JSON.stringify(reduxState)}</div>;
};

export default SelectUtility;
