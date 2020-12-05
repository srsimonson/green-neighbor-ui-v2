import {
  // STARTED_GETTING_UTILITIES,
  FINISHED_GETTING_UTILITIES,
  ERROR_GETTING_UTILITIES,
  STARTED_GETTING_UTILITIES,
  STARTED_GETTING_LOCATION,
  FINISHED_GETTING_LOCATION,
  ERROR_GETTING_LOCATION,
} from './constants';

const initialState = {
  isBusy: false,
  utilities: null,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Utilities
    case STARTED_GETTING_UTILITIES:
      return { ...state, isBusy: true };
    case FINISHED_GETTING_UTILITIES:
      return { ...state, utilities: payload, isBusy: false };
    case ERROR_GETTING_UTILITIES:
      return { ...state, error: payload, isBusy: false };
    // LOCATION
    case FINISHED_GETTING_LOCATION:
      return { ...state, location: payload };
    case STARTED_GETTING_LOCATION:
    case ERROR_GETTING_LOCATION:
    default:
      return state;
  }
};
