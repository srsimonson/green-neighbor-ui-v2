import axios from 'axios';
import { API } from 'src/constants';
import logger from 'src/logger';

import {
  STARTED_GETTING_UTILITIES,
  FINISHED_GETTING_UTILITIES,
  ERROR_GETTING_UTILITIES,
  STARTED_GETTING_LOCATION,
  FINISHED_GETTING_LOCATION,
  ERROR_GETTING_LOCATION,
} from './constants';

// eslint-disable-next-line import/prefer-default-export
export const getUtilities = (zip) => async (dispatch) => {
  dispatch({ type: STARTED_GETTING_UTILITIES });
  try {
    const response = await axios.get(`${API}GreenPricing/${zip}`);
    dispatch({ type: FINISHED_GETTING_UTILITIES, payload: response.data });
  } catch (error) {
    logger.debug(error);
    dispatch({ type: ERROR_GETTING_UTILITIES, error });
  }
};

export const getLocation = (zip) => async (dispatch) => {
  dispatch({ type: STARTED_GETTING_LOCATION });
  try {
    const response = await axios.get(`${API}GreenPricing/geocode/${zip}`);
    dispatch({ type: FINISHED_GETTING_LOCATION, payload: response.data.address });
  } catch (error) {
    logger.debug(error);
    dispatch({ type: ERROR_GETTING_LOCATION, error });
  }
};
