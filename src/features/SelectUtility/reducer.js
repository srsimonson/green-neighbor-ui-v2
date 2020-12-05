import {
  // STARTED_GETTING_UTILITIES,
  FINISHED_GETTING_UTILITIES,
  ERROR_GETTING_UTILITIES,
} from './constants';

const initialState = {
  utilities: null,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FINISHED_GETTING_UTILITIES:
      return { ...state, utilities: payload };
    case ERROR_GETTING_UTILITIES:
      return { ...state, error: payload };
    default:
      return state;
  }
};
