import axios from 'axios';
import { API } from 'src/constants';
import logger from 'src/logger';

import {
  STARTED_GETTING_UTILITIES,
  FINISHED_GETTING_UTILITIES,
  ERROR_GETTING_UTILITIES,
} from './constants';

// eslint-disable-next-line import/prefer-default-export
export const getUtilities = (zip) => async (dispatch) => {
  dispatch({ type: STARTED_GETTING_UTILITIES });
  try {
    const response = await axios.get(`${API}SelectUtility/${zip}`);
    dispatch({ type: FINISHED_GETTING_UTILITIES, payload: response.data });
  } catch (error) {
    logger.debug(error);
    dispatch({ type: ERROR_GETTING_UTILITIES, error });
  }
};
